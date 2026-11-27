/**
     * ============================================================================
     * INTEGRAÇÃO FIREBASE FIRESTORE (EFETIVO + ATA COM CACHE LOCAL)
     * ============================================================================
     */
    const DEFAULT_FIREBASE_CONFIG = {
      apiKey: "AIzaSyADdSGtfpY21SNo7xjJlXAu9rSLrjeBW2g",
      authDomain: "taf-bpmrv.firebaseapp.com",
      projectId: "taf-bpmrv",
      storageBucket: "taf-bpmrv.firebasestorage.app",
      messagingSenderId: "720035659679",
      appId: "1:720035659679:web:78848a1d6c29b8c5f6c7aa"
    };
    const ATA_COLLECTION_NAME = 'taf_bpmrv_ata_Lancamentos';
    const EFETIVO_COLLECTION_NAME = 'taf_bpmrv_efetivo';
    const FB_EFETIVO_CACHE_KEY = 'taf_efetivo_cache_v1';

    let efetivoList = [];
    let dbFirestore = null;
    let firebaseConnected = false;

    function loadEfetivoCache() {
      try {
        const raw = localStorage.getItem(FB_EFETIVO_CACHE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            efetivoList = parsed;
            return;
          }
        }
      } catch (e) {
        console.warn('Cache de efetivo não disponível.', e);
      }
      efetivoList = [];
    }

    function saveEfetivoCache() {
      try {
        localStorage.setItem(FB_EFETIVO_CACHE_KEY, JSON.stringify(efetivoList));
      } catch (e) {
        console.warn('Não foi possível salvar cache de efetivo:', e);
      }
    }

    async function initFirebaseBackground() {
      if (typeof firebase === 'undefined') {
        console.warn('Firebase SDK compat não encontrado no escopo global.');
        return;
      }
      try {
        const appName = 'taf_app_bpmrv';
        const existingApp = firebase.apps.find(a => a.name === appName);
        const app = existingApp || firebase.initializeApp(DEFAULT_FIREBASE_CONFIG, appName);
        dbFirestore = app.firestore();
        firebaseConnected = true;

        await Promise.all([
          loadEfetivoFromFirestore(),
          loadAtaFromFirestore()
        ]);
      } catch (err) {
        console.warn('Erro ao inicializar Firebase em segundo plano:', err);
        firebaseConnected = false;
        dbFirestore = null;
      }
    }

    async function loadEfetivoFromFirestore() {
      if (!firebaseConnected || !dbFirestore) return;
      try {
        const snap = await dbFirestore.collection(EFETIVO_COLLECTION_NAME).get();
        if (!snap.empty) {
          efetivoList = snap.docs
            .map(d => ({ id: d.id, ...d.data() }))
            .sort((a, b) => String(a.id || '').localeCompare(String(b.id || ''), 'pt-BR'));
          saveEfetivoCache();
        }
      } catch (err) {
        console.warn('Erro ao carregar efetivo do Firestore:', err);
      }
    }

    async function syncRecordToFirebase(rec) {
      if (!firebaseConnected || !dbFirestore || !rec?.id) return;
      try {
        await dbFirestore.collection(ATA_COLLECTION_NAME).doc(rec.id).set(rec);
      } catch (err) {
        console.warn('Falha ao salvar registro no Firestore:', err);
      }
    }

    async function deleteRecordFromFirebase(id) {
      if (!firebaseConnected || !dbFirestore || !id) return;
      try {
        await dbFirestore.collection(ATA_COLLECTION_NAME).doc(id).delete();
      } catch (err) {
        console.warn('Falha ao excluir registro no Firestore:', err);
      }
    }

    async function syncAtaToFirebase() {
      if (!firebaseConnected || !dbFirestore) {
        await initFirebaseBackground();
      }
      if (!firebaseConnected || !dbFirestore) {
        showToast('Sem conexão ativa com o Firestore no momento.', 'error');
        return;
      }
      try {
        const batch = dbFirestore.batch();
        for (const r of records) {
          batch.set(dbFirestore.collection(ATA_COLLECTION_NAME).doc(r.id), r);
        }
        await batch.commit();
        await loadAtaFromFirestore();
        showToast('Ata sincronizada com o Firestore!');
      } catch (err) {
        console.error('Erro ao sincronizar Ata com o Firestore:', err);
        showToast('Erro ao sincronizar Ata com o Firestore.', 'error');
      }
    }

    async function loadAtaFromFirestore() {
      if (!firebaseConnected || !dbFirestore) return;
      try {
        const snap = await dbFirestore.collection(ATA_COLLECTION_NAME).get();
        if (!snap.empty) {
          const remoteItems = snap.docs.map(d => normalizeLoadedItem({ id: d.id, ...d.data() }));
          const mapById = new Map();
          for (const r of records) mapById.set(r.id, r);
          for (const r of remoteItems) mapById.set(r.id, r);
          records = Array.from(mapById.values());
          sortRecordsBySeniority();
          saveRecords();
          renderAll();
        }
      } catch (err) {
        console.warn('Erro ao carregar Ata do Firestore:', err);
      }
    }
