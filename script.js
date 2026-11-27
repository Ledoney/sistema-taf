const STORAGE_KEY = 'ata_taf_registros_v1';
const META_KEY = 'ata_taf_meta_v1';
const FAIXAS = ['Até 25', '26 a 30', '31 a 35', '36 a 40', '41 a 45', '46 a 50', 'Acima de 51'];

const EFETIVO_BASE = [
  { posto: '1SGT PM', nome: 'LEDONEY FERREIRA BARBOSA DA SILVA', guerra: 'LEDONEY', re: '99961021', idade: 47, sexo: 'Masculino' },
  { posto: 'MAJ PM', nome: 'KLEBER DE SOUZA OLIVEIRA', guerra: 'KLEBER', re: '99951001', idade: 44, sexo: 'Masculino' },
  { posto: 'TC PM', nome: 'VINÍCIUS DE SOUZA ALMEIDA', guerra: 'VINÍCIUS', re: '99941002', idade: 46, sexo: 'Masculino' },
  { posto: '1SGT PM', nome: 'LUCIENE APARECIDA DA SILVA', guerra: 'LUCIENE', re: '99962010', idade: 42, sexo: 'Feminino' },
  { posto: '3SGT PM', nome: 'LUARA GOMES ESPINDOLA', guerra: 'LUARA', re: '99973015', idade: 31, sexo: 'Feminino' }
];

// Pontuações de referência (0,0 a 10,0 em passos de 0,5) por sexo e faixa etária
const PONTOS_ESC = [10, 9.5, 9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0];

const TABELAS_REF = {
  Masculino: {
    barra: [40,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2,0],
    apoio: [60,57,54,51,48,45,42,39,36,33,30,27,24,21,18,15,12,9,6,3,0],
    abdominal: [70,67,64,61,58,55,52,49,46,43,40,37,34,31,28,25,22,19,16,13,0],
    corrida: [3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,0]
  },
  Feminino: {
    barra: [35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,4,3,2,1,0],
    apoio: [50,47,44,41,38,35,32,29,26,23,20,17,14,11,8,6,5,4,3,2,0],
    abdominal: [62,59,56,53,50,47,44,41,38,35,32,29,26,23,20,17,14,11,8,5,0],
    corrida: [2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,0]
  }
};

let state = {
  records: [],
  meta: {
    om: 'BPMRv',
    semestre: '2º Semestre',
    data: new Date().toISOString().slice(0, 10),
    comissao: ''
  },
  refProtocol: 'Masculino',
  pendingDuplicate: null,
  calcVoltas: 0
};

function getFaixaEtaria(idade) {
  const n = Number(idade);
  if (!n || Number.isNaN(n)) return 'Faixa etária: automática';
  if (n <= 25) return 'Até 25';
  if (n <= 30) return '26 a 30';
  if (n <= 35) return '31 a 35';
  if (n <= 40) return '36 a 40';
  if (n <= 45) return '41 a 45';
  if (n <= 50) return '46 a 50';
  return 'Acima de 51';
}

function getIdadeOffset(faixa) {
  const idx = FAIXAS.indexOf(faixa);
  return idx > 0 ? idx : 0;
}

function calcularPontosProva(valor, sexo, modalidade, faixa) {
  const num = Number(valor);
  if (valor === '' || valor === null || Number.isNaN(num) || num <= 0) return 0;
  const tab = TABELAS_REF[sexo] && TABELAS_REF[sexo][modalidade];
  if (!tab) return 0;
  const ajuste = faixa === 'Acima de 51' ? 0.96 : (1 - getIdadeOffset(faixa) * 0.015);
  const escalaAjustada = tab.map((v, i) => i === tab.length - 1 ? 0 : Math.max(1, Math.round(v * ajuste)));
  for (let i = 0; i < escalaAjustada.length; i++) {
    if (num >= escalaAjustada[i]) {
      return PONTOS_ESC[i];
    }
  }
  return 0;
}

function fmtPt(val) {
  return Number(val || 0).toFixed(1).replace('.', ',');
}

function fmtMed(val) {
  return Number(val || 0).toFixed(2).replace('.', ',');
}

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function showToast(msg, isError = false) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast' + (isError ? ' error' : '');
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 260);
  }, 2800);
}

function switchView(viewName) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('on'));
  const target = document.getElementById('view-' + viewName);
  if (target) target.classList.add('on');
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.classList.toggle('on', btn.dataset.tab === viewName);
  });
  if (viewName === 'ata') {
    renderAta();
  } else if (viewName === 'tabelas') {
    renderReferenceTable();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getSituacaoTaf() {
  const checked = document.querySelector('input[name="situacao-taf"]:checked');
  return checked ? checked.value : 'AVALIADO';
}

function getSexoSelecionado() {
  const checked = document.querySelector('input[name="sexo"]:checked');
  return checked ? checked.value : 'Masculino';
}

function getModalidadeBraco() {
  const checked = document.querySelector('input[name="modalidade-braco"]:checked');
  return checked ? checked.value : 'barra';
}

function atualizarRegraModalidadeBraco() {
  const idade = Number(document.getElementById('militar-idade').value || 0);
  const note = document.getElementById('arm-modality-rule-note');
  const apoioRadio = document.getElementById('radio-mod-apoio');
  const barraRadio = document.querySelector('input[name="modalidade-braco"][value="barra"]');
  const podeApoio = idade >= 36;
  if (apoioRadio) {
    apoioRadio.disabled = !podeApoio;
    if (!podeApoio && apoioRadio.checked && barraRadio) {
      barraRadio.checked = true;
    }
  }
  if (note) {
    note.textContent = podeApoio
      ? 'Idade igual ou superior a 36 anos: você pode escolher entre Barra fixa ou Apoio.'
      : 'Abaixo de 36 anos: Barra fixa obrigatória (opção por Apoio somente a partir de 36 anos).';
  }
  const mod = getModalidadeBraco();
  const lblProva = document.getElementById('lbl-prova-braco');
  if (lblProva) lblProva.textContent = mod === 'apoio' ? '1. Apoio de frente' : '1. Barra fixa';
  const refBraco = document.getElementById('ref-braco');
  const refAbd = document.getElementById('ref-abdominal');
  const refCorr = document.getElementById('ref-corrida');
  const sexo = getSexoSelecionado();
  const faixa = getFaixaEtaria(idade);
  const tab = TABELAS_REF[sexo] || TABELAS_REF.Masculino;
  if (refBraco) refBraco.textContent = `Tabela (${faixa}): ref. mín. 7,0 = ${tab[mod][6]} rep.`;
  if (refAbd) refAbd.textContent = `Tabela (${faixa}): ref. mín. 7,0 = ${tab.abdominal[6]} rep.`;
  if (refCorr) refCorr.textContent = `Tabela (${faixa}): ref. mín. 7,0 = ${tab.corrida[6]} m`;
}

function onSituacaoTafChange() {
  const sit = getSituacaoTaf();
  const naoAvalBox = document.getElementById('nao-avaliado-box');
  const ausenteBox = document.getElementById('ausente-box');
  const fisicosBox = document.getElementById('dados-fisicos-box');
  if (naoAvalBox) naoAvalBox.classList.toggle('hidden', sit !== 'NAO_AVALIADO');
  if (ausenteBox) ausenteBox.classList.toggle('hidden', sit !== 'AUSENTE');
  if (fisicosBox) fisicosBox.classList.toggle('hidden', sit !== 'AVALIADO');
  onParecerNaoAvaliadoChange();
  recalculateLive();
}

function onParecerNaoAvaliadoChange() {
  const sel = document.getElementById('parecer-nao-avaliado');
  const wrap = document.getElementById('outros-especificar-wrap');
  if (sel && wrap) {
    wrap.classList.toggle('hidden', sel.value !== 'Outros');
  }
  recalculateLive();
}

function onIdadeInput() {
  const idade = Number(document.getElementById('militar-idade').value || 0);
  const faixaBadge = document.getElementById('faixa-auto-badge');
  const faixa = getFaixaEtaria(idade);
  if (faixaBadge) {
    faixaBadge.textContent = idade > 0 ? `Faixa etária: ${faixa}` : 'Faixa etária: automática';
  }
  atualizarRegraModalidadeBraco();
  recalculateLive();
}

function onProtocolOrAgeChange() {
  onIdadeInput();
}

function onArmModalityChange() {
  atualizarRegraModalidadeBraco();
  recalculateLive();
}

function setBadgeStyle(el, pts) {
  if (!el) return;
  el.textContent = fmtPt(pts);
  el.classList.remove('mid', 'ok');
  if (pts >= 7) el.classList.add('ok');
  else if (pts >= 5) el.classList.add('mid');
}

function recalculateLive() {
  const sit = getSituacaoTaf();
  const banner = document.getElementById('live-status-banner');
  const pill = document.getElementById('live-protocol-pill');
  const heroLabel = document.getElementById('live-hero-label');
  const heroMedia = document.getElementById('live-media-hero');
  const statusText = document.getElementById('live-status-text');
  const meterBox = document.getElementById('live-meter-box');
  const somaEl = document.getElementById('live-soma-pts');
  const diffMeta = document.getElementById('live-diff-meta');
  const barEl = document.getElementById('live-progress-bar');
  const breakdown = document.getElementById('live-breakdown-list');
  const dockMedia = document.getElementById('dock-media');
  const dockStatus = document.getElementById('dock-status');

  const sexo = getSexoSelecionado();
  const idade = Number(document.getElementById('militar-idade').value || 0);
  const faixa = getFaixaEtaria(idade);
  const mod = getModalidadeBraco();

  if (pill) {
    pill.textContent = `${sexo}, ${idade > 0 ? faixa : 'faixa pendente'}, ${mod === 'apoio' ? 'apoio' : 'barra fixa'}`;
  }

  if (sit === 'NAO_AVALIADO') {
    const motivoSel = document.getElementById('parecer-nao-avaliado').value;
    const detalhe = (document.getElementById('parecer-outros-detalhe').value || '').trim();
    const parecerTexto = motivoSel === 'Outros' ? (detalhe || 'Outros (não especificado)') : motivoSel;
    if (banner) { banner.className = 'score alt'; }
    if (heroLabel) heroLabel.textContent = 'Situação';
    if (heroMedia) heroMedia.textContent = '—';
    if (statusText) statusText.textContent = 'NÃO AVALIADO';
    if (meterBox) meterBox.classList.add('hidden');
    if (breakdown) breakdown.innerHTML = `<div class="bk"><div><b>Parecer registrado</b><small>${escapeHtml(parecerTexto)}</small></div><span class="num">N/A</span></div>`;
    if (dockMedia) { dockMedia.textContent = 'N/A'; dockMedia.className = 'num'; }
    if (dockStatus) { dockStatus.textContent = 'Não avaliado'; dockStatus.className = ''; }
    return;
  }

  if (sit === 'AUSENTE') {
    if (banner) { banner.className = 'score alt'; }
    if (heroLabel) heroLabel.textContent = 'Situação';
    if (heroMedia) heroMedia.textContent = '—';
    if (statusText) statusText.textContent = 'AUSENTE';
    if (meterBox) meterBox.classList.add('hidden');
    if (breakdown) breakdown.innerHTML = `<div class="bk"><div><b>Parecer registrado</b><small>Não compareceu ao TAF</small></div><span class="num">AUS</span></div>`;
    if (dockMedia) { dockMedia.textContent = 'AUS'; dockMedia.className = 'num'; }
    if (dockStatus) { dockStatus.textContent = 'Ausente'; dockStatus.className = ''; }
    return;
  }

  if (meterBox) meterBox.classList.remove('hidden');

  const v1 = Number(document.getElementById('prova-braco').value || 0);
  const v2 = Number(document.getElementById('prova-abdominal').value || 0);
  const v3 = Number(document.getElementById('prova-corrida').value || 0);

  const p1 = calcularPontosProva(v1, sexo, mod, faixa);
  const p2 = calcularPontosProva(v2, sexo, 'abdominal', faixa);
  const p3 = calcularPontosProva(v3, sexo, 'corrida', faixa);

  setBadgeStyle(document.getElementById('pts-braco-badge'), p1);
  setBadgeStyle(document.getElementById('pts-abdominal-badge'), p2);
  setBadgeStyle(document.getElementById('pts-corrida-badge'), p3);

  const soma = p1 + p2 + p3;
  const media = soma / 3;
  const hasInput = v1 > 0 || v2 > 0 || v3 > 0;
  const apto = hasInput && media >= 7.0;

  if (heroLabel) heroLabel.textContent = 'Média final';
  if (heroMedia) heroMedia.textContent = fmtMed(media);
  if (somaEl) somaEl.textContent = fmtPt(soma);

  const pct = Math.min(100, Math.max(0, (media / 10) * 100));
  if (barEl) barEl.style.width = pct + '%';

  if (diffMeta) {
    const diff = media - 7.0;
    diffMeta.textContent = diff >= 0 ? `+${fmtMed(diff)} acima do mínimo` : `${fmtMed(Math.abs(diff))} abaixo de 7,00`;
  }

  if (banner) {
    banner.className = 'score ' + (!hasInput ? 'idle' : (apto ? 'ok' : 'no'));
  }
  if (statusText) {
    statusText.textContent = !hasInput ? 'Aguardando' : (apto ? 'APTO(A)' : 'INAPTO(A)');
  }

  if (breakdown) {
    breakdown.innerHTML = `
      <div class="bk"><div><b>1. ${mod === 'apoio' ? 'Apoio' : 'Barra fixa'}</b><small>${v1} rep.</small></div><span class="num ${p1 >= 7 ? 'g' : ''}">${fmtPt(p1)}</span></div>
      <div class="bk"><div><b>2. Abdominal</b><small>${v2} rep.</small></div><span class="num ${p2 >= 7 ? 'g' : ''}">${fmtPt(p2)}</span></div>
      <div class="bk"><div><b>3. Corrida</b><small>${v3} m</small></div><span class="num ${p3 >= 7 ? 'g' : ''}">${fmtPt(p3)}</span></div>
    `;
  }

  if (dockMedia) {
    dockMedia.textContent = fmtMed(media);
    dockMedia.className = 'num ' + (!hasInput ? '' : (apto ? 'ok' : 'no'));
  }
  if (dockStatus) {
    dockStatus.textContent = !hasInput ? 'Aguardando' : (apto ? 'Apto(a)' : 'Inapto(a)');
    dockStatus.className = !hasInput ? '' : (apto ? 'ok' : 'no');
  }
}

function checkDuplicateLive() {
  const nome = (document.getElementById('militar-nome').value || '').trim().toUpperCase();
  const re = (document.getElementById('militar-re').value || '').trim();
  const editId = document.getElementById('edit-id').value;
  const warnEl = document.getElementById('duplicate-live-warning');
  const detailEl = document.getElementById('duplicate-live-detail');
  const btnEl = document.getElementById('duplicate-live-edit-btn');
  if (!warnEl) return;

  const found = state.records.find(r => r.id !== editId && ((re && r.re === re) || (nome.length >= 4 && r.nome.toUpperCase() === nome)));
  if (found) {
    warnEl.classList.remove('hidden');
    if (detailEl) detailEl.textContent = `${found.posto || ''} ${found.nome} — Matrícula ${found.re || '—'}`;
    if (btnEl) btnEl.onclick = () => editRecord(found.id);
  } else {
    warnEl.classList.add('hidden');
  }
}

function handleFormSubmit(ev) {
  ev.preventDefault();
  const posto = document.getElementById('militar-posto').value.trim();
  const re = document.getElementById('militar-re').value.trim();
  const nome = document.getElementById('militar-nome').value.trim();
  const obs = document.getElementById('militar-obs').value.trim();
  const sit = getSituacaoTaf();
  const editId = document.getElementById('edit-id').value;

  if (!nome) {
    showToast('Informe o nome completo do militar.', true);
    document.getElementById('militar-nome').focus();
    return;
  }

  let parecer = '';
  if (sit === 'NAO_AVALIADO') {
    const sel = document.getElementById('parecer-nao-avaliado').value;
    const det = document.getElementById('parecer-outros-detalhe').value.trim();
    parecer = sel === 'Outros' ? det : sel;
    if (!parecer) {
      showToast('Especifique o motivo em "Outros".', true);
      return;
    }
  } else if (sit === 'AUSENTE') {
    parecer = 'AUSENTE';
  }

  const sexo = getSexoSelecionado();
  const idade = Number(document.getElementById('militar-idade').value || 0);
  if (sit === 'AVALIADO' && (!idade || idade < 15)) {
    showToast('Informe uma idade válida para o militar avaliado.', true);
    return;
  }

  const faixa = getFaixaEtaria(idade);
  const mod = getModalidadeBraco();
  const v1 = sit === 'AVALIADO' ? Number(document.getElementById('prova-braco').value || 0) : 0;
  const v2 = sit === 'AVALIADO' ? Number(document.getElementById('prova-abdominal').value || 0) : 0;
  const v3 = sit === 'AVALIADO' ? Number(document.getElementById('prova-corrida').value || 0) : 0;

  const p1 = sit === 'AVALIADO' ? calcularPontosProva(v1, sexo, mod, faixa) : 0;
  const p2 = sit === 'AVALIADO' ? calcularPontosProva(v2, sexo, 'abdominal', faixa) : 0;
  const p3 = sit === 'AVALIADO' ? calcularPontosProva(v3, sexo, 'corrida', faixa) : 0;
  const soma = Number((p1 + p2 + p3).toFixed(2));
  const media = Number((soma / 3).toFixed(2));
  const status = sit === 'AVALIADO' ? (media >= 7.0 ? 'APTO' : 'INAPTO') : sit;

  const record = {
    id: editId || ('taf_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7)),
    posto,
    re,
    nome,
    situacao: sit,
    parecer,
    sexo,
    idade,
    faixa,
    modalidade: mod,
    v1, v2, v3,
    p1, p2, p3,
    soma,
    media,
    status,
    obs,
    updatedAt: new Date().toISOString()
  };

  if (!editId) {
    const existing = state.records.find(r => (re && r.re === re) || r.nome.toUpperCase() === nome.toUpperCase());
    if (existing) {
      state.pendingDuplicate = { existing, record };
      openDuplicateConfirmModal(existing, record);
      return;
    }
  }

  persistRecord(record, !!editId);
}

function openDuplicateConfirmModal(existing, incoming) {
  document.getElementById('duplicate-modal-desc').textContent = `Já existe um registro para "${existing.nome}".`;
  document.getElementById('duplicate-existing-summary').textContent = `${existing.posto || ''} ${existing.nome} — ${existing.status === 'AVALIADO' ? existing.status : (existing.parecer || existing.status)} (${fmtMed(existing.media)})`;
  document.getElementById('duplicate-new-summary').textContent = `${incoming.posto || ''} ${incoming.nome} — ${incoming.status === 'AVALIADO' ? incoming.status : (incoming.parecer || incoming.status)} (${fmtMed(incoming.media)})`;
  document.getElementById('duplicate-confirm-modal').classList.add('flex');
}

function closeDuplicateConfirmModal() {
  document.getElementById('duplicate-confirm-modal').classList.remove('flex');
  state.pendingDuplicate = null;
}

function confirmDuplicateKeepBoth() {
  if (!state.pendingDuplicate) return;
  const rec = state.pendingDuplicate.record;
  closeDuplicateConfirmModal();
  persistRecord(rec, false);
}

function confirmDuplicateOverwrite() {
  if (!state.pendingDuplicate) return;
  const { existing, record } = state.pendingDuplicate;
  record.id = existing.id;
  closeDuplicateConfirmModal();
  persistRecord(record, true);
}

function persistRecord(record, isUpdate) {
  if (isUpdate) {
    const idx = state.records.findIndex(r => r.id === record.id);
    if (idx >= 0) state.records[idx] = record;
    else state.records.push(record);
  } else {
    state.records.push(record);
  }
  saveRecords();
  resetForm(false);
  showToast(isUpdate ? 'Lançamento atualizado na Ata.' : 'Militar lançado na Ata.');
}

function editRecord(id) {
  const rec = state.records.find(r => r.id === id);
  if (!rec) return;
  switchView('lancar');
  document.getElementById('edit-id').value = rec.id;
  document.getElementById('editing-badge').classList.remove('hidden');
  document.getElementById('btn-submit').textContent = 'Salvar alterações';
  document.getElementById('militar-posto').value = rec.posto || '';
  document.getElementById('militar-re').value = rec.re || '';
  document.getElementById('militar-nome').value = rec.nome || '';
  document.getElementById('militar-obs').value = rec.obs || '';

  const sitRadio = document.querySelector(`input[name="situacao-taf"][value="${rec.situacao || 'AVALIADO'}"]`);
  if (sitRadio) sitRadio.checked = true;

  const sexoRadio = document.querySelector(`input[name="sexo"][value="${rec.sexo || 'Masculino'}"]`);
  if (sexoRadio) sexoRadio.checked = true;

  document.getElementById('militar-idade').value = rec.idade || '';
  onIdadeInput();

  const modRadio = document.querySelector(`input[name="modalidade-braco"][value="${rec.modalidade || 'barra'}"]`);
  if (modRadio && !modRadio.disabled) modRadio.checked = true;

  if (rec.situacao === 'NAO_AVALIADO') {
    const sel = document.getElementById('parecer-nao-avaliado');
    const known = ['Disp. Esforço Físico', 'LTIP', 'Férias'];
    if (known.includes(rec.parecer)) {
      sel.value = rec.parecer;
      document.getElementById('parecer-outros-detalhe').value = '';
    } else {
      sel.value = 'Outros';
      document.getElementById('parecer-outros-detalhe').value = rec.parecer || '';
    }
  }

  document.getElementById('prova-braco').value = rec.v1 || '';
  document.getElementById('prova-abdominal').value = rec.v2 || '';
  document.getElementById('prova-corrida').value = rec.v3 || '';

  onSituacaoTafChange();
  checkDuplicateLive();
}

function deleteRecord(id) {
  state.records = state.records.filter(r => r.id !== id);
  saveRecords();
  renderAta();
  showToast('Registro removido da Ata.');
}

function resetForm(clearFields = true) {
  document.getElementById('edit-id').value = '';
  document.getElementById('editing-badge').classList.add('hidden');
  document.getElementById('btn-submit').textContent = 'Lançar na Ata';
  if (clearFields) {
    document.getElementById('militar-posto').value = '';
    document.getElementById('militar-re').value = '';
    document.getElementById('militar-nome').value = '';
    document.getElementById('militar-idade').value = '';
    document.getElementById('militar-obs').value = '';
    document.getElementById('prova-braco').value = '';
    document.getElementById('prova-abdominal').value = '';
    document.getElementById('prova-corrida').value = '';
    document.getElementById('parecer-outros-detalhe').value = '';
    const rAv = document.querySelector('input[name="situacao-taf"][value="AVALIADO"]');
    if (rAv) rAv.checked = true;
    const rM = document.querySelector('input[name="sexo"][value="Masculino"]');
    if (rM) rM.checked = true;
  }
  onSituacaoTafChange();
  onIdadeInput();
  checkDuplicateLive();
}

function updateBadgeCount() {
  const badge = document.getElementById('nav-count');
  if (!badge) return;
  const n = state.records.length;
  badge.textContent = String(n);
  badge.classList.toggle('hidden', n === 0);
}

function renderAta() {
  updateBadgeCount();
  const avaliados = state.records.filter(r => r.situacao === 'AVALIADO');
  const naoAvaliados = state.records.filter(r => r.situacao === 'NAO_AVALIADO');
  const ausentes = state.records.filter(r => r.situacao === 'AUSENTE');

  const aptos = avaliados.filter(r => r.status === 'APTO');
  const inaptos = avaliados.filter(r => r.status === 'INAPTO');
  const masc = avaliados.filter(r => r.sexo === 'Masculino').length;
  const fem = avaliados.filter(r => r.sexo === 'Feminino').length;

  const pctApto = avaliados.length ? ((aptos.length / avaliados.length) * 100).toFixed(1).replace('.', ',') : '0,0';
  const pctInapto = avaliados.length ? ((inaptos.length / avaliados.length) * 100).toFixed(1).replace('.', ',') : '0,0';

  document.getElementById('kpi-total').textContent = String(avaliados.length);
  document.getElementById('kpi-breakdown').textContent = `${masc} Masc · ${fem} Fem`;
  document.getElementById('kpi-aptos').textContent = String(aptos.length);
  document.getElementById('kpi-aptos-pct').textContent = `${pctApto}% de aprovação`;
  document.getElementById('kpi-inaptos').textContent = String(inaptos.length);
  document.getElementById('kpi-inaptos-pct').textContent = `${pctInapto}% do efetivo`;

  const totalNaoDisp = naoAvaliados.length + ausentes.length;
  document.getElementById('kpi-avg-media').textContent = String(totalNaoDisp);
  document.getElementById('kpi-max-name').textContent = `${naoAvaliados.length} Não aval. · ${ausentes.length} Ausentes`;

  const bar = document.getElementById('kpi-bar');
  if (bar) bar.style.width = (avaliados.length ? (aptos.length / avaliados.length) * 100 : 0) + '%';

  const q = (document.getElementById('filter-search').value || '').trim().toLowerCase();
  const fStatus = document.getElementById('filter-status').value;
  const fSexo = document.getElementById('filter-sexo').value;
  const fFaixa = document.getElementById('filter-faixa').value;

  const filtered = avaliados.filter(r => {
    if (fStatus !== 'ALL' && r.status !== fStatus) return false;
    if (fSexo !== 'ALL' && r.sexo !== fSexo) return false;
    if (fFaixa !== 'ALL' && r.faixa !== fFaixa) return false;
    if (q) {
      const hay = `${r.posto || ''} ${r.nome || ''} ${r.re || ''}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  document.getElementById('records-count').textContent = `${filtered.length} de ${avaliados.length}`;

  const tbody = document.getElementById('records-tbody');
  const cards = document.getElementById('records-cards');
  const emptyBox = document.getElementById('records-empty');
  const emptyTxt = document.getElementById('records-empty-text');

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    cards.innerHTML = '';
    emptyBox.classList.remove('hidden');
    emptyTxt.textContent = avaliados.length === 0 ? 'Nenhum militar avaliado lançado na Ata ainda.' : 'Nenhum registro corresponde aos filtros selecionados.';
  } else {
    emptyBox.classList.add('hidden');
    tbody.innerHTML = filtered.map((r, i) => {
      const isApto = r.status === 'APTO';
      return `<tr>
        <td class="num">${i + 1}</td>
        <td><b>${escapeHtml(r.posto || '')} ${escapeHtml(r.nome)}</b><br><small>Mat. ${escapeHtml(r.re || '—')}</small></td>
        <td>${escapeHtml(r.sexo)} · ${r.idade}a<br><small>${escapeHtml(r.faixa)}</small></td>
        <td class="num">${r.v1} <small>(${fmtPt(r.p1)})</small></td>
        <td class="num">${r.v2} <small>(${fmtPt(r.p2)})</small></td>
        <td class="num">${r.v3}m <small>(${fmtPt(r.p3)})</small></td>
        <td class="num r"><b>${fmtPt(r.soma)}</b></td>
        <td class="num r"><b>${fmtMed(r.media)}</b></td>
        <td><span class="st ${isApto ? 'ok' : 'no'}">${isApto ? 'APTO(A)' : 'INAPTO(A)'}</span></td>
        <td class="noprint r"><div class="acts">
          <button type="button" class="btn sm" onclick="editRecord('${r.id}')">Editar</button>
          <button type="button" class="btn sm danger" onclick="deleteRecord('${r.id}')">Excluir</button>
        </div></td>
      </tr>`;
    }).join('');

    cards.innerHTML = filtered.map((r, i) => {
      const isApto = r.status === 'APTO';
      return `<article class="rc ${isApto ? '' : 'no'}">
        <header><div><b>#${i + 1} · ${escapeHtml(r.posto || '')} ${escapeHtml(r.nome)}</b></div><span class="st ${isApto ? 'ok' : 'no'}">${isApto ? 'APTO(A)' : 'INAPTO(A)'}</span></header>
        <div class="chips"><span class="chip">Mat. ${escapeHtml(r.re || '—')}</span><span class="chip">${escapeHtml(r.sexo)} · ${r.idade}a</span><span class="chip">${escapeHtml(r.faixa)}</span></div>
        <div class="tri">
          <div class="tc"><small>${r.modalidade === 'apoio' ? 'Apoio' : 'Barra'}</small><b>${r.v1} rep.</b><em class="${r.p1 >= 7 ? 'g' : ''}">${fmtPt(r.p1)} pts</em></div>
          <div class="tc"><small>Abdominal</small><b>${r.v2} rep.</b><em class="${r.p2 >= 7 ? 'g' : ''}">${fmtPt(r.p2)} pts</em></div>
          <div class="tc"><small>Corrida</small><b>${r.v3} m</b><em class="${r.p3 >= 7 ? 'g' : ''}">${fmtPt(r.p3)} pts</em></div>
        </div>
        <footer>
          <div><small>Média final (Soma ${fmtPt(r.soma)})</small><b class="num">${fmtMed(r.media)}</b></div>
          <div class="acts"><button type="button" class="btn sm" onclick="editRecord('${r.id}')">Editar</button><button type="button" class="btn sm danger" onclick="deleteRecord('${r.id}')">Excluir</button></div>
        </footer>
      </article>`;
    }).join('');
  }

  renderParecerSection('nao-avaliados', naoAvaliados, 'Nenhum militar registrado como não avaliado.');
  renderParecerSection('ausentes', ausentes, 'Nenhum militar registrado como ausente.');
}

function renderParecerSection(prefix, list, emptyMsg) {
  const countEl = document.getElementById(prefix + '-count');
  const tbody = document.getElementById(prefix + '-tbody');
  const emptyEl = document.getElementById(prefix + '-empty');
  if (countEl) {
    countEl.textContent = prefix === 'nao-avaliados'
      ? `${list.length} registro(s) — dispensa médica comprovada ou caso fortuito / força maior`
      : `${list.length} registro(s) — não compareceram ao TAF`;
  }
  if (!list.length) {
    tbody.innerHTML = '';
    emptyEl.textContent = emptyMsg;
    emptyEl.classList.remove('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  tbody.innerHTML = list.map((r, i) => `<tr>
    <td class="num col-ord">${i + 1}</td>
    <td class="col-nome"><b>${escapeHtml(r.posto || '')} ${escapeHtml(r.nome)}</b></td>
    <td class="num col-mat">${escapeHtml(r.re || '—')}</td>
    <td class="col-parecer"><span class="chip amber">${escapeHtml(r.parecer || 'N/A')}</span></td>
    <td class="noprint r col-acoes"><div class="acts">
      <button type="button" class="btn sm" onclick="editRecord('${r.id}')">Editar</button>
      <button type="button" class="btn sm danger" onclick="deleteRecord('${r.id}')">Excluir</button>
    </div></td>
  </tr>`).join('');
}

function scrollToNaoAvaliados() {
  const el = document.getElementById('section-nao-avaliados');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTopoAta() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setReferenceProtocol(sexo) {
  state.refProtocol = sexo;
  document.getElementById('btn-ref-masculino').classList.toggle('on', sexo === 'Masculino');
  document.getElementById('btn-ref-feminino').classList.toggle('on', sexo === 'Feminino');
  renderReferenceTable();
}

function renderReferenceTable() {
  const wrap = document.getElementById('reference-table-wrapper');
  if (!wrap) return;
  const sexo = state.refProtocol;
  const base = TABELAS_REF[sexo] || TABELAS_REF.Masculino;

  let html = '<table class="rt"><thead><tr>';
  html += '<th>Pontos</th>';
  FAIXAS.forEach(fx => {
    html += `<th class="age" colspan="4">${escapeHtml(fx)}</th>`;
  });
  html += '</tr><tr><th>Nota</th>';
  FAIXAS.forEach(() => {
    html += '<th>Barra</th><th>Apoio</th><th>Abd.</th><th>Corr.</th>';
  });
  html += '</tr></thead><tbody>';

  PONTOS_ESC.forEach((pts, rowIdx) => {
    const clsPass = pts >= 7.5 ? 'top' : (pts >= 7.0 ? 'pass' : (pts === 0 ? 'zero' : ''));
    html += `<tr><td class="key ${clsPass}">${fmtPt(pts)}</td>`;
    FAIXAS.forEach((fx, fIdx) => {
      const ajuste = fx === 'Acima de 51' ? 0.96 : (1 - fIdx * 0.015);
      const calcVal = (arr) => rowIdx === arr.length - 1 ? 0 : Math.max(1, Math.round(arr[rowIdx] * ajuste));
      const bVal = calcVal(base.barra);
      const aVal = calcVal(base.apoio);
      const abVal = calcVal(base.abdominal);
      const cVal = calcVal(base.corrida);
      html += `<td class="${clsPass}">${bVal}</td><td class="${clsPass}">${aVal}</td><td class="${clsPass}">${abVal}</td><td class="${clsPass} key last">${cVal}m</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  wrap.innerHTML = html;
}

// Modal Efetivo
function openEfetivoModal() {
  document.getElementById('efetivo-modal').classList.add('flex');
  document.getElementById('efetivo-search-input').value = '';
  document.getElementById('efetivo-grad-filter').value = 'ALL';
  renderEfetivoModalList();
}

function closeEfetivoModal() {
  document.getElementById('efetivo-modal').classList.remove('flex');
}

function handleModalBackdropClick(ev) {
  if (ev.target && ev.target.id === 'efetivo-modal') closeEfetivoModal();
}

function renderEfetivoModalList() {
  const q = (document.getElementById('efetivo-search-input').value || '').trim().toLowerCase();
  const grad = document.getElementById('efetivo-grad-filter').value;
  const list = EFETIVO_BASE.filter(m => {
    if (grad !== 'ALL' && m.posto !== grad) return false;
    if (q) {
      const txt = `${m.posto} ${m.nome} ${m.guerra} ${m.re}`.toLowerCase();
      if (!txt.includes(q)) return false;
    }
    return true;
  });
  document.getElementById('efetivo-result-count').textContent = `${list.length} encontrado(s)`;
  const container = document.getElementById('efetivo-modal-tbody');
  container.innerHTML = list.map(m => `
    <button type="button" class="pol" onclick='selectEfetivo("${escapeHtml(m.posto)}","${escapeHtml(m.nome)}","${escapeHtml(m.re)}",${m.idade},"${escapeHtml(m.sexo)}")'>
      <span class="num">${escapeHtml(m.posto)}</span>
      <div><b>${escapeHtml(m.nome)}</b> <small>(${escapeHtml(m.guerra)})</small><span class="chip">Mat. ${escapeHtml(m.re)} · ${m.idade}a · ${escapeHtml(m.sexo)}</span></div>
    </button>
  `).join('');
}

function selectEfetivo(posto, nome, re, idade, sexo) {
  document.getElementById('militar-posto').value = posto;
  document.getElementById('militar-nome').value = nome;
  document.getElementById('militar-re').value = re;
  document.getElementById('militar-idade').value = idade;
  const sx = document.querySelector(`input[name="sexo"][value="${sexo}"]`);
  if (sx) sx.checked = true;
  closeEfetivoModal();
  onIdadeInput();
  checkDuplicateLive();
  showToast(`Dados de ${nome} preenchidos.`);
}

// Calculadora de Corrida
function openCorridaCalcModal() {
  const grid = document.getElementById('calc-grid-voltas');
  if (grid && !grid.children.length) {
    grid.innerHTML = Array.from({ length: 12 }, (_, idx) => {
      const v = idx + 1;
      return `<button type="button" class="vb" data-v="${v}" onclick="selectCalcVoltas(${v})">${v}</button>`;
    }).join('');
  }
  state.calcVoltas = 0;
  document.querySelectorAll('.vb').forEach(b => b.classList.remove('on'));
  document.getElementById('calc-volta-incompleta').value = '';
  recalculateCorridaCalc();
  document.getElementById('corrida-calc-modal').classList.add('flex');
}

function closeCorridaCalcModal() {
  document.getElementById('corrida-calc-modal').classList.remove('flex');
}

function handleCorridaCalcBackdropClick(ev) {
  if (ev.target && ev.target.id === 'corrida-calc-modal') closeCorridaCalcModal();
}

function selectCalcVoltas(v) {
  state.calcVoltas = state.calcVoltas === v ? 0 : v;
  document.querySelectorAll('.vb').forEach(b => b.classList.toggle('on', Number(b.dataset.v) === state.calcVoltas));
  recalculateCorridaCalc();
}

function recalculateCorridaCalc() {
  const pistaEl = document.querySelector('input[name="calc-pista"]:checked');
  const pista = pistaEl ? Number(pistaEl.value) : 425;
  const extra = Number(document.getElementById('calc-volta-incompleta').value || 0);
  const total = state.calcVoltas * pista + extra;
  document.getElementById('calc-distancia-total').textContent = String(total);
  document.getElementById('calc-formula-resumo').textContent = `${state.calcVoltas} voltas × ${pista} m + ${extra} m = ${total} m`;
}

function resetCorridaCalc() {
  state.calcVoltas = 0;
  document.querySelectorAll('.vb').forEach(b => b.classList.remove('on'));
  document.getElementById('calc-volta-incompleta').value = '';
  recalculateCorridaCalc();
}

function sendDistanciaToTafAndCopy() {
  const total = Number(document.getElementById('calc-distancia-total').textContent || 0);
  document.getElementById('prova-corrida').value = String(total);
  closeCorridaCalcModal();
  recalculateLive();
  showToast(`Distância de ${total} m enviada para a prova de corrida.`);
}

// Metadados e Backup
function saveAtaMeta() {
  state.meta.om = document.getElementById('ata-om').value;
  const sem = document.querySelector('input[name="ata-semestre"]:checked');
  state.meta.semestre = sem ? sem.value : '2º Semestre';
  state.meta.data = document.getElementById('ata-data').value;
  state.meta.comissao = document.getElementById('ata-comissao').value;
  localStorage.setItem(META_KEY, JSON.stringify(state.meta));
  const ind = document.getElementById('ata-saved-indicator');
  if (ind) ind.textContent = 'Salvo automaticamente neste aparelho.';
}

function loadAtaMeta() {
  try {
    const raw = localStorage.getItem(META_KEY);
    if (raw) Object.assign(state.meta, JSON.parse(raw));
  } catch (e) {}
  document.getElementById('ata-om').value = state.meta.om || '';
  document.getElementById('ata-data').value = state.meta.data || '';
  document.getElementById('ata-comissao').value = state.meta.comissao || '';
  const rSem = document.querySelector(`input[name="ata-semestre"][value="${state.meta.semestre}"]`);
  if (rSem) rSem.checked = true;
}

function saveRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
  updateBadgeCount();
}

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state.records = JSON.parse(raw) || [];
  } catch (e) {
    state.records = [];
  }
}

function exportJSON() {
  const payload = { meta: state.meta, records: state.records, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ata-taf-${state.meta.data || 'backup'}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Backup JSON exportado.');
}

function importJSON(ev) {
  const file = ev.target.files && ev.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(String(reader.result || '{}'));
      if (Array.isArray(data.records)) {
        state.records = data.records;
        saveRecords();
      }
      if (data.meta) {
        Object.assign(state.meta, data.meta);
        localStorage.setItem(META_KEY, JSON.stringify(state.meta));
        loadAtaMeta();
      }
      renderAta();
      showToast('Backup restaurado com sucesso.');
    } catch (err) {
      showToast('Arquivo JSON inválido.', true);
    }
    ev.target.value = '';
  };
  reader.readAsText(file);
}

function requestClearAll() {
  if (!state.records.length) return showToast('A Ata já está vazia.');
  if (confirm('Deseja realmente limpar todos os registros da Ata?')) {
    state.records = [];
    saveRecords();
    renderAta();
    showToast('Ata limpa.');
  }
}

function exportAtaExcel() {
  if (typeof XLSX === 'undefined') {
    showToast('Biblioteca Excel não carregada.', true);
    return;
  }
  const rows = state.records.map((r, i) => ({
    Ord: i + 1,
    Posto: r.posto || '',
    Nome: r.nome || '',
    Matricula: r.re || '',
    Situacao: r.situacao || '',
    Parecer: r.parecer || '',
    Sexo: r.sexo || '',
    Idade: r.idade || '',
    Faixa: r.faixa || '',
    Modalidade: r.modalidade || '',
    Prova1_Qtd: r.v1 || 0,
    Prova1_Pts: r.p1 || 0,
    Abdominal_Qtd: r.v2 || 0,
    Abdominal_Pts: r.p2 || 0,
    Corrida_Metros: r.v3 || 0,
    Corrida_Pts: r.p3 || 0,
    Soma: r.soma || 0,
    Media: r.media || 0,
    Resultado: r.status || ''
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Ata TAF');
  XLSX.writeFile(wb, `ata-taf-${state.meta.data || 'relatorio'}.xlsx`);
  showToast('Planilha Excel gerada.');
}

function syncAtaToFirebase() {
  if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) {
    showToast('Sincronização Firebase local ativa no navegador.');
    return;
  }
  showToast('Dados salvos localmente e prontos para sincronização.');
}

function prepareAndPrint() {
  const avaliados = state.records.filter(r => r.situacao === 'AVALIADO');
  const aptos = avaliados.filter(r => r.status === 'APTO').length;
  const inaptos = avaliados.filter(r => r.status === 'INAPTO').length;
  const naoAval = state.records.filter(r => r.situacao === 'NAO_AVALIADO').length;
  const ausentes = state.records.filter(r => r.situacao === 'AUSENTE').length;

  document.getElementById('print-om').textContent = (state.meta.om || 'UNIDADE').toUpperCase();
  document.getElementById('print-ata-titulo').textContent = `ATA DE TESTE DE APTIDÃO FÍSICA (TAF) — ${state.meta.semestre || ''}`;
  document.getElementById('print-ata-sub').textContent = `Data: ${state.meta.data || '—'} · Comissão: ${state.meta.comissao || '—'}`;
  document.getElementById('print-summary-bar').innerHTML = `
    <div class="k"><b>${avaliados.length}</b><span>Avaliados</span></div>
    <div class="k ok"><b>${aptos}</b><span>Aptos(as)</span></div>
    <div class="k no"><b>${inaptos}</b><span>Inaptos(as)</span></div>
    <div class="k wa"><b>${naoAval}</b><span>Não avaliados</span></div>
    <div class="k mu"><b>${ausentes}</b><span>Ausentes</span></div>
  `;
  document.getElementById('print-footer-date').textContent = `Gerado em ${new Date().toLocaleString('pt-BR')}`;
  window.print();
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('btn-topo-ata');
  if (!btn) return;
  const ataActive = document.getElementById('view-ata').classList.contains('on');
  btn.classList.toggle('visivel', ataActive && window.scrollY > 240);
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
  loadAtaMeta();
  loadRecords();
  atualizarRegraModalidadeBraco();
  recalculateLive();
  renderAta();
  renderReferenceTable();
});
