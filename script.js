/**
     * ============================================================================
     * DADOS OFICIAIS DOS PROTOCOLOS TAF (FEMININO E MASCULINO)
     * ============================================================================
     */
    const AGE_GROUPS = [
      'Até 25',
      '26 a 30',
      '31 a 35',
      '36 a 40',
      '41 a 45',
      '46 a 50',
      'Acima de 51'
    ];

    const MALE_OPTIONAL_ARM_AGES = ['36 a 40', '41 a 45', '46 a 50', 'Acima de 51'];

    // Protocolo Feminino: [corrida, apoio, abdominal, ...7 faixas]
    const PROTOCOLO_FEMININO = [
      [700, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [750, 0, 3, 0, 0, 0, 0, 0, 0, 1.5],
      [800, 0, 4, 0, 0, 0, 0, 0, 1, 2],
      [850, 0, 5, 0, 0, 0, 0, 0, 1.5, 2.5],
      [900, 0, 6, 0, 0, 0, 0, 0, 2, 3],
      [950, 0, 7, 0, 0, 0, 0, 0, 2.5, 3.5],
      [1000, 0, 8, 0, 0, 0, 0, 1, 3, 4],
      [1050, 1, 9, 0, 0, 0, 0, 1.5, 3.5, 4.5],
      [1100, 2, 10, 0, 0, 0, 1, 2, 4, 5],
      [1150, 3, 11, 0, 0, 0, 1.5, 2.5, 4.5, 5.5],
      [1200, 4, 12, 0, 0, 1, 2, 3, 5, 6],
      [1250, 5, 13, 0, 1, 1.5, 2.5, 3.5, 5.5, 6.5],
      [1300, 6, 14, 1, 1.5, 2, 3, 4, 6, 7],
      [1350, 7, 15, 1.5, 2, 2.5, 3.5, 4.5, 6.5, 7.5],
      [1400, 8, 16, 2, 2.5, 3, 4, 5, 7, 8],
      [1450, 9, 17, 2.5, 3, 3.5, 4.5, 5.5, 7.5, 8.5],
      [1500, 10, 18, 3, 3.5, 4, 5, 6, 8, 9],
      [1550, 11, 19, 3.5, 4, 4.5, 5.5, 6.5, 8.5, 9.5],
      [1600, 12, 20, 4, 4.5, 5, 6, 7, 9, 10],
      [1650, 13, 21, 4.5, 5, 5.5, 6.5, 7.5, 9.5, 10],
      [1700, 14, 22, 5, 5.5, 6, 7, 8, 10, 10],
      [1750, 15, 23, 5.5, 6, 6.5, 7.5, 8.5, 10, 10],
      [1800, 16, 24, 6, 6.5, 7, 8, 9, 10, 10],
      [1850, 17, 25, 6.5, 7, 7.5, 8.5, 9.5, 10, 10],
      [1900, 18, 26, 7, 7.5, 8, 9, 10, 10, 10],
      [1950, 19, 28, 7.5, 8, 8.5, 9.5, 10, 10, 10],
      [2000, 20, 30, 8, 8.5, 9, 10, 10, 10, 10],
      [2050, 21, 34, 8.5, 9, 9.5, 10, 10, 10, 10],
      [2100, 22, 36, 9, 9.5, 10, 10, 10, 10, 10],
      [2150, 23, 37, 9.5, 10, 10, 10, 10, 10, 10],
      [2200, 24, 38, 10, 10, 10, 10, 10, 10, 10]
    ];

    // Protocolo Masculino: [corrida, apoio, barra, abdominal, ...7 faixas]
    const PROTOCOLO_MASCULINO = [
      [1000, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1100, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1.5],
      [1200, 0, 0, 3, 0, 0, 0, 0, 0, 1, 2],
      [1250, 0, 0, 4, 0, 0, 0, 0, 0, 1.5, 2.5],
      [1300, 0, 0, 5, 0, 0, 0, 0, 0, 2, 3],
      [1350, 0, 0, 6, 0, 0, 0, 0, 0, 2.5, 3.5],
      [1400, 0, 0, 7, 0, 0, 0, 0, 1, 3, 4],
      [1450, 0, 0, 8, 0, 0, 0, 0, 1.5, 3.5, 4.5],
      [1500, 1, 0, 9, 0, 0, 0, 1, 2, 4, 5],
      [1550, 2, 0, 10, 0, 0, 0, 1.5, 2.5, 4.5, 5.5],
      [1600, 3, 0, 11, 0, 0, 0, 2, 3, 5, 6],
      [1650, 4, 0, 12, 0, 0, 0, 2.5, 3.5, 5.5, 6.5],
      [1700, 5, 0, 13, 0, 0, 1, 3, 4, 6, 7],
      [1750, 6, 0, 14, 0, 0, 1.5, 3.5, 4.5, 6.5, 7.5],
      [1800, 7, 0, 15, 0, 1, 2, 4, 5, 7, 8],
      [1850, 8, 0, 16, 0, 1.5, 2.5, 4.5, 5.5, 7.5, 8.5],
      [1900, 9, 0, 17, 1, 2, 3, 5, 6, 8, 9],
      [1950, 10, 0, 18, 1.5, 2.5, 3.5, 5.5, 6.5, 8.5, 9.5],
      [2000, 11, 1, 19, 2, 3, 4, 6, 7, 9, 10],
      [2050, 12, 1, 20, 2.5, 3.5, 4.5, 6.5, 7.5, 9.5, 10],
      [2100, 13, 1, 22, 3, 4, 5, 7, 8, 10, 10],
      [2150, 14, 1, 24, 3.5, 4.5, 5.5, 7.5, 8.5, 10, 10],
      [2200, 15, 1, 26, 4, 5, 6, 8, 9, 10, 10],
      [2250, 16, 1, 28, 4.5, 5.5, 6.5, 8.5, 9.5, 10, 10],
      [2300, 17, 2, 31, 5, 6, 7, 9, 10, 10, 10],
      [2350, 18, 3, 33, 5.5, 6.5, 7.5, 9.5, 10, 10, 10],
      [2400, 19, 4, 35, 6, 7, 8, 10, 10, 10, 10],
      [2450, 20, 5, 37, 6.5, 7.5, 8.5, 10, 10, 10, 10],
      [2500, 21, 6, 39, 7, 8, 9, 10, 10, 10, 10],
      [2550, 22, 7, 41, 7.5, 8.5, 9.5, 10, 10, 10, 10],
      [2600, 23, 8, 43, 8, 9, 10, 10, 10, 10, 10],
      [2650, 24, 9, 45, 8.5, 9.5, 10, 10, 10, 10, 10],
      [2700, 26, 10, 47, 9, 10, 10, 10, 10, 10, 10],
      [2750, 27, 11, 48, 9.5, 10, 10, 10, 10, 10, 10],
      [2800, 28, 12, 49, 10, 10, 10, 10, 10, 10, 10]
    ];

    const STORAGE_KEY = 'taf_ata_registros_v2';
    const ATA_META_KEY = 'taf_ata_cabecalho_v2';
    let records = [];
    let currentRefProtocol = 'Masculino';
    let pendingClearAll = false;
    let currentFaixaEtaria = 'Até 25';

    function formatPt(num, decimals = 1) {
      const val = Number.isFinite(num) ? num : 0;
      return val.toFixed(decimals).replace('.', ',');
    }

    function getAgeGroupFromAge(idade) {
      if (!Number.isFinite(idade) || idade <= 0) return 'Até 25';
      if (idade <= 25) return 'Até 25';
      if (idade <= 30) return '26 a 30';
      if (idade <= 35) return '31 a 35';
      if (idade <= 40) return '36 a 40';
      if (idade <= 45) return '41 a 45';
      if (idade <= 50) return '46 a 50';
      return 'Acima de 51';
    }

    function onIdadeInput() {
      const raw = document.getElementById('militar-idade').value.trim();
      const idade = raw === '' ? null : Number(raw);
      currentFaixaEtaria = getAgeGroupFromAge(idade);
      const badge = document.getElementById('faixa-auto-badge');
      if (badge) {
        badge.textContent = idade !== null && Number.isFinite(idade) && idade > 0
          ? `Faixa: ${currentFaixaEtaria}`
          : 'Faixa: autom.';
      }
      onProtocolOrAgeChange();
    }

    function showToast(message, type = 'success') {
      const t = document.createElement('div');
      t.className = `toast ${type}`;
      t.textContent = message;
      document.getElementById('toast-container').appendChild(t);
      setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 250); }, 3200);
    }

    function escapeHtml(str) {
      return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function canMaleChooseApoio(sexo, faixaEtaria) {
      return sexo === 'Masculino' && MALE_OPTIONAL_ARM_AGES.includes(faixaEtaria);
    }

    function resolveModalidadeBraco(sexo, faixaEtaria, desejada) {
      if (sexo === 'Feminino') return 'apoio';
      if (!canMaleChooseApoio(sexo, faixaEtaria)) return 'barra';
      return desejada === 'apoio' ? 'apoio' : 'barra';
    }

    function calcularPontuacaoProva(sexo, prova, valorObtido, faixaEtaria) {
      if (valorObtido === null || valorObtido === undefined || Number.isNaN(valorObtido) || valorObtido < 0) {
        return { pontos: 0, patamarAtingido: null };
      }
      if (prova === 'barra' && sexo !== 'Masculino') {
        return { pontos: 0, patamarAtingido: null };
      }

      const ageIdx = AGE_GROUPS.indexOf(faixaEtaria);
      if (ageIdx === -1) return { pontos: 0, patamarAtingido: null };

      const isMasc = sexo === 'Masculino';
      const rows = isMasc ? PROTOCOLO_MASCULINO : PROTOCOLO_FEMININO;

      let colIdx = -1;
      if (prova === 'corrida') colIdx = 0;
      else if (prova === 'apoio') colIdx = 1;
      else if (prova === 'barra') colIdx = 2;
      else if (prova === 'abdominal') colIdx = isMasc ? 3 : 2;

      const scoreStartIdx = isMasc ? 4 : 3;
      const scoreIdx = scoreStartIdx + ageIdx;

      let patamarAtingido = null;
      let pontos = 0;

      for (let i = 0; i < rows.length; i++) {
        const threshold = rows[i][colIdx];
        if (valorObtido >= threshold) {
          const scoreRow = rows[i][scoreIdx];
          if (scoreRow >= pontos) {
            pontos = scoreRow;
            patamarAtingido = threshold;
          }
        } else {
          break;
        }
      }

      return { pontos, patamarAtingido };
    }

    function calcularAvaliacaoTAF({ sexo, faixaEtaria, modalidadeBraco, corrida, bracoValor, abdominal }) {
      const modEfetiva = resolveModalidadeBraco(sexo, faixaEtaria, modalidadeBraco);

      const pBraco = calcularPontuacaoProva(sexo, modEfetiva, bracoValor, faixaEtaria);
      const pAbdominal = calcularPontuacaoProva(sexo, 'abdominal', abdominal, faixaEtaria);
      const pCorrida = calcularPontuacaoProva(sexo, 'corrida', corrida, faixaEtaria);

      const somaNotas = pBraco.pontos + pAbdominal.pontos + pCorrida.pontos;
      const mediaBruta = somaNotas / 3;
      const mediaArredondada = Math.round((mediaBruta + Number.EPSILON) * 100) / 100;
      const isApto = mediaArredondada >= 7.0;

      const statusLabel = sexo === 'Feminino'
        ? (isApto ? 'APTA' : 'INAPTA')
        : (isApto ? 'APTO' : 'INAPTO');

      return {
        modalidadeBraco: modEfetiva,
        somaNotas,
        mediaFinal: mediaArredondada,
        isApto,
        statusLabel,
        detalhes: {
          braco: { modalidade: modEfetiva, valor: bracoValor, ...pBraco },
          abdominal: { valor: abdominal, ...pAbdominal },
          corrida: { valor: corrida, ...pCorrida }
        }
      };
    }

    function getProtocolLimits(sexo) {
      const isMasc = sexo === 'Masculino';
      const rows = isMasc ? PROTOCOLO_MASCULINO : PROTOCOLO_FEMININO;
      const abdIdx = isMasc ? 3 : 2;

      const corridas = rows.map(r => r[0]);
      const apoios = rows.map(r => r[1]);
      const barras = isMasc ? rows.map(r => r[2]) : [];
      const abdominais = rows.map(r => r[abdIdx]);

      return {
        corrida: { min: Math.min(...corridas), max: Math.max(...corridas) },
        apoio: { min: Math.min(...apoios), max: Math.max(...apoios) },
        barra: isMasc ? { min: Math.min(...barras), max: Math.max(...barras) } : null,
        abdominal: { min: Math.min(...abdominais), max: Math.max(...abdominais) }
      };
    }

    /**
     * Controle da Situação no TAF (AVALIADO | NAO_AVALIADO | AUSENTE)
     */
    function getSituacaoTafSelecionada() {
      const el = document.querySelector('input[name="situacao-taf"]:checked');
      return el ? el.value : 'AVALIADO';
    }

    function setSituacaoTafSelecionada(val) {
      const target = ['NAO_AVALIADO', 'AUSENTE'].includes(val) ? val : 'AVALIADO';
      const radio = document.querySelector(`input[name="situacao-taf"][value="${target}"]`);
      if (radio) radio.checked = true;
    }

    function formatParecerNaoAvaliado(parecerTipo, parecerDetalhe) {
      if (parecerTipo === 'Outros') {
        const clean = String(parecerDetalhe || '').trim();
        return clean || 'Outros';
      }
      return parecerTipo || 'Disp. Esforço Físico';
    }

    function onParecerNaoAvaliadoChange() {
      const parecer = document.getElementById('parecer-nao-avaliado')?.value || 'Disp. Esforço Físico';
      const wrap = document.getElementById('outros-especificar-wrap');
      if (wrap) {
        wrap.classList.toggle('hidden', parecer !== 'Outros');
      }
      if (parecer !== 'Outros') {
        const det = document.getElementById('parecer-outros-detalhe');
        if (det) det.value = '';
      }
      recalculateLive();
    }

    function onSituacaoTafChange() {
      const situacao = getSituacaoTafSelecionada();
      const isAvaliado = situacao === 'AVALIADO';
      const isNaoAvaliado = situacao === 'NAO_AVALIADO';
      const isAusente = situacao === 'AUSENTE';

      document.getElementById('nao-avaliado-box')?.classList.toggle('hidden', !isNaoAvaliado);
      document.getElementById('ausente-box')?.classList.toggle('hidden', !isAusente);
      document.getElementById('dados-fisicos-box')?.classList.toggle('hidden', !isAvaliado);

      if (isNaoAvaliado) {
        onParecerNaoAvaliadoChange();
      } else {
        recalculateLive();
      }
    }

    function readFormValues() {
      const situacaoTaf = getSituacaoTafSelecionada();
      const parecerTipo = document.getElementById('parecer-nao-avaliado')?.value || 'Disp. Esforço Físico';
      const parecerDetalhe = document.getElementById('parecer-outros-detalhe')?.value.trim() || '';
      const parecerTexto = situacaoTaf === 'AUSENTE'
        ? 'AUSENTE'
        : situacaoTaf === 'NAO_AVALIADO'
          ? formatParecerNaoAvaliado(parecerTipo, parecerDetalhe)
          : '';

      const sexoEl = document.querySelector('input[name="sexo"]:checked');
      const sexo = sexoEl ? sexoEl.value : 'Masculino';

      const parseNumOrNull = (id) => {
        const raw = document.getElementById(id).value.trim();
        if (raw === '') return null;
        const n = Number(raw);
        return Number.isFinite(n) ? n : null;
      };

      const idade = parseNumOrNull('militar-idade');
      currentFaixaEtaria = getAgeGroupFromAge(idade);

      const modRadio = document.querySelector('input[name="modalidade-braco"]:checked');
      const modDesejada = modRadio ? modRadio.value : 'barra';
      const modalidadeBraco = resolveModalidadeBraco(sexo, currentFaixaEtaria, modDesejada);

      return {
        id: document.getElementById('edit-id').value.trim(),
        posto: document.getElementById('militar-posto').value.trim(),
        nome: document.getElementById('militar-nome').value.trim(),
        re: document.getElementById('militar-re').value.trim(),
        situacaoTaf,
        parecerTipo: situacaoTaf === 'NAO_AVALIADO' ? parecerTipo : '',
        parecerDetalhe: situacaoTaf === 'NAO_AVALIADO' && parecerTipo === 'Outros' ? parecerDetalhe : '',
        parecerTexto,
        idade,
        sexo,
        faixaEtaria: currentFaixaEtaria,
        modalidadeBraco,
        bracoValor: situacaoTaf === 'AVALIADO' ? parseNumOrNull('prova-braco') : null,
        abdominal: situacaoTaf === 'AVALIADO' ? parseNumOrNull('prova-abdominal') : null,
        corrida: situacaoTaf === 'AVALIADO' ? parseNumOrNull('prova-corrida') : null,
        obs: document.getElementById('militar-obs').value.trim()
      };
    }

    function onProtocolOrAgeChange() {
      const sexoEl = document.querySelector('input[name="sexo"]:checked');
      const sexo = sexoEl ? sexoEl.value : 'Masculino';
      const rawIdade = document.getElementById('militar-idade').value.trim();
      const idade = rawIdade === '' ? null : Number(rawIdade);
      currentFaixaEtaria = getAgeGroupFromAge(idade);

      const isMasc = sexo === 'Masculino';
      const armBox = document.getElementById('arm-modality-box');
      const radioBarra = document.querySelector('input[name="modalidade-braco"][value="barra"]');
      const radioApoio = document.getElementById('radio-mod-apoio');
      const ruleNote = document.getElementById('arm-modality-rule-note');

      if (!isMasc) {
        armBox.classList.add('hidden');
        radioApoio.disabled = false;
        radioApoio.checked = true;
      } else {
        armBox.classList.remove('hidden');
        const permiteApoio = canMaleChooseApoio(sexo, currentFaixaEtaria);
        if (permiteApoio) {
          radioApoio.disabled = false;
          ruleNote.innerHTML = 'Faixa <strong>36 anos ou mais</strong>: escolha entre <strong>Barra Fixa</strong> ou <strong>Apoio</strong> como 1ª prova.';
        } else {
          radioBarra.checked = true;
          radioApoio.disabled = true;
          ruleNote.innerHTML = 'Abaixo de 36 anos: <strong>Barra Fixa obrigatória</strong> (opção por Apoio somente a partir de 36 anos).';
        }
      }

      onArmModalityChange();
    }

    function onArmModalityChange() {
      const sexoEl = document.querySelector('input[name="sexo"]:checked');
      const sexo = sexoEl ? sexoEl.value : 'Masculino';
      const modRadio = document.querySelector('input[name="modalidade-braco"]:checked');
      const modalidade = resolveModalidadeBraco(sexo, currentFaixaEtaria, modRadio ? modRadio.value : 'barra');

      const limits = getProtocolLimits(sexo);
      document.getElementById('ref-abdominal').textContent = `Tabela: ${limits.abdominal.min} a ${limits.abdominal.max} rep.`;
      document.getElementById('ref-corrida').textContent = `Tabela: ${limits.corrida.min}m a ${limits.corrida.max}m`;

      const lblBraco = document.getElementById('lbl-prova-braco');
      const refBraco = document.getElementById('ref-braco');

      if (modalidade === 'barra') {
        lblBraco.textContent = '1. Barra Fixa';
        refBraco.textContent = `Tabela: ${limits.barra.min} a ${limits.barra.max} rep.`;
      } else {
        lblBraco.textContent = '1. Apoio';
        refBraco.textContent = `Tabela: ${limits.apoio.min} a ${limits.apoio.max} rep.`;
      }

      recalculateLive();
    }

    function recalculateLive() {
      const data = readFormValues();
      const meterBox = document.getElementById('live-meter-box');
      const heroLabel = document.getElementById('live-hero-label');

      if (data.situacaoTaf !== 'AVALIADO') {
        const isAusente = data.situacaoTaf === 'AUSENTE';
        const titulo = isAusente ? 'AUSENTE' : 'NÃO AVALIADO';
        const parecer = isAusente ? 'AUSENTE' : data.parecerTexto;

        document.getElementById('live-protocol-pill').textContent =
          isAusente ? 'Seção 3 · Ausentes' : 'Seção 2 · Não avaliados';
        heroLabel.textContent = 'Situação na Ata';
        document.getElementById('live-media-hero').textContent = '—';
        document.getElementById('live-status-text').textContent = titulo;
        document.getElementById('live-status-banner').className = 'score alt';

        document.getElementById('dock-media').textContent = '—';
        const ds = document.getElementById('dock-status');
        ds.textContent = titulo;
        ds.className = '';

        if (meterBox) meterBox.classList.add('hidden');
        document.getElementById('live-breakdown-list').innerHTML = `
          <div class="bk">
            <div>
              <b>Parecer registrado</b>
              <small>${isAusente ? 'Não compareceu ao TAF' : 'Dispensa / afastamento comprovado'}</small>
            </div>
            <span class="num" style="font-size:14px">${escapeHtml(parecer)}</span>
          </div>`;
        return;
      }

      if (meterBox) meterBox.classList.remove('hidden');
      heroLabel.textContent = 'Média final';

      const calc = calcularAvaliacaoTAF(data);
      const d = calc.detalhes;
      const idle = data.bracoValor === null && data.abdominal === null && data.corrida === null;
      const setBadge = (id, pts) => {
        const el = document.getElementById(id);
        el.textContent = formatPt(pts, 1);
        el.className = 'pts' + (pts >= 7 ? ' ok' : pts > 0 ? ' mid' : '');
      };
      setBadge('pts-braco-badge', d.braco.pontos);
      setBadge('pts-abdominal-badge', d.abdominal.pontos);
      setBadge('pts-corrida-badge', d.corrida.pontos);

      const modTag = data.sexo === 'Masculino' && calc.modalidadeBraco === 'barra' ? 'barra fixa' : 'apoio';
      document.getElementById('live-protocol-pill').textContent =
        `${data.sexo}, ${data.idade !== null ? data.idade + ' anos, ' : ''}faixa ${data.faixaEtaria}, ${modTag}`;

      const state = idle ? 'idle' : calc.isApto ? 'ok' : 'no';
      const label = idle ? 'Aguardando' : calc.statusLabel;
      const media = formatPt(calc.mediaFinal, 2);
      document.getElementById('live-status-banner').className = 'score ' + state;
      document.getElementById('live-media-hero').textContent = media;
      document.getElementById('live-status-text').textContent = label;
      document.getElementById('dock-media').textContent = media;
      const ds = document.getElementById('dock-status');
      ds.textContent = label; ds.className = state;
      document.getElementById('live-soma-pts').textContent = formatPt(calc.somaNotas, 1);
      document.getElementById('live-progress-bar').style.width = `${Math.min(100, calc.mediaFinal * 10)}%`;
      const diff = calc.somaNotas - 21;
      document.getElementById('live-diff-meta').textContent = idle ? '' :
        calc.isApto ? `${formatPt(diff, 1)} pts acima do mínimo` : `faltam ${formatPt(Math.max(0, -diff), 1)} pts`;

      const items = [
        [calc.modalidadeBraco === 'barra' ? '1. Barra fixa' : '1. Apoio', 'rep.', d.braco],
        ['2. Abdominal', 'rep.', d.abdominal],
        ['3. Corrida', 'm', d.corrida]
      ];
      document.getElementById('live-breakdown-list').innerHTML = items.map(([l, u, i]) => {
        const info = i.valor === null ? 'não informado'
          : `${i.valor} ${u}, ${i.patamarAtingido !== null ? `patamar ${i.patamarAtingido} ${u}` : 'abaixo do mínimo'}`;
        return `<div class="bk"><div><b>${l}</b><small>${info}</small></div><span class="num ${i.pontos >= 7 ? 'g' : ''}">${formatPt(i.pontos, 1)}</span></div>`;
      }).join('');
    }

    /**
     * ============================================================================
     * DETECÇÃO DE DUPLICIDADE (CORRIGIDA PARA MATRÍCULA E NOME COMPLETO)
     * ============================================================================
     */
    function cleanNameForDup(str) {
      return normalizeText(str || '')
        .replace(/\b(cel|tc|maj|cap|1ten|2ten|asp|st|1sgt|2sgt|3sgt|sgt|cb|sd|al|pm)\b/g, ' ')
        .replace(/[^a-z0-9 ]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function isInitialToken(token) {
      return /^[a-z]$/.test(token);
    }

    function namesMatchStrict(nameA, nameB) {
      if (!nameA || !nameB) return false;
      if (nameA === nameB) return true;

      const tokensA = nameA.split(' ').filter(Boolean);
      const tokensB = nameB.split(' ').filter(Boolean);
      if (tokensA.length < 2 || tokensB.length < 2) return false;

      const lastA = tokensA[tokensA.length - 1];
      const lastB = tokensB[tokensB.length - 1];
      if (lastA !== lastB) return false;

      const firstA = tokensA[0];
      const firstB = tokensB[0];

      if (isInitialToken(firstA) && !isInitialToken(firstB)) {
        return firstB.startsWith(firstA);
      }
      if (isInitialToken(firstB) && !isInitialToken(firstA)) {
        return firstA.startsWith(firstB);
      }
      if (firstA === firstB) {
        return true;
      }

      return false;
    }

    function getWarNameForRecord(rec) {
      if (!rec) return '';
      if (rec.nomeGuerra) return cleanNameForDup(rec.nomeGuerra);
      const mat = String(rec.re || rec.mat || '').trim();
      if (mat && Array.isArray(efetivoList)) {
        const ef = efetivoList.find(p => String(p.matricula || '').trim() === mat);
        if (ef && ef.nomeGuerra) return cleanNameForDup(ef.nomeGuerra);
      }
      const nomeNorm = cleanNameForDup(rec.nome || '');
      if (!nomeNorm) return '';
      const parts = nomeNorm.split(' ').filter(Boolean);
      return parts.length > 0 ? parts[parts.length - 1] : '';
    }

    function matchesWarName(queryNorm, warNameNorm) {
      if (!queryNorm || !warNameNorm) return false;
      if (queryNorm === warNameNorm) return true;
      const qTokens = queryNorm.split(' ').filter(Boolean);
      const wTokens = warNameNorm.split(' ').filter(Boolean);
      if (qTokens.length === 1 && wTokens.length === 1) {
        return wTokens[0] === qTokens[0] || wTokens[0].startsWith(qTokens[0]);
      }
      return namesMatchStrict(queryNorm, warNameNorm);
    }

    function findDuplicateRecord(data) {
      const matNorm = String(data.re || '').trim().toLowerCase();
      const nomeNorm = cleanNameForDup(data.nome || '');
      const postoNorm = String(data.posto || '').trim().toLowerCase();

      return records.find(r => {
        if (data.id && r.id === data.id) return false;

        const rMat = String(r.re || r.mat || '').trim().toLowerCase();
        if (matNorm && rMat && matNorm === rMat) return true;
        if (matNorm && rMat && matNorm !== rMat) return false;

        const rNome = cleanNameForDup(r.nome || '');
        const rWar = getWarNameForRecord(r);
        const rPosto = String(r.posto || '').trim().toLowerCase();

        if (!nomeNorm) return false;

        const matchesFull = rNome ? namesMatchStrict(nomeNorm, rNome) : false;
        const matchesWar = rWar ? matchesWarName(nomeNorm, rWar) : false;
        if (!matchesFull && !matchesWar) return false;

        if (postoNorm && rPosto && postoNorm !== rPosto) return false;

        return true;
      }) || null;
    }

    function formatRecordShortSummary(rec) {
      if (rec.situacaoTaf === 'AUSENTE') {
        return 'Situação: AUSENTE';
      }
      if (rec.situacaoTaf === 'NAO_AVALIADO') {
        const p = rec.parecerTexto || formatParecerNaoAvaliado(rec.parecerTipo, rec.parecerDetalhe);
        return `Situação: NÃO AVALIADO (${p})`;
      }
      return `Média ${formatPt(rec.mediaFinal, 2)} (${rec.statusLabel}) · ` +
        `Braços: ${formatPt(rec.pontuacoes?.braco ?? 0, 1)} | ` +
        `Abd: ${formatPt(rec.pontuacoes?.abdominal ?? 0, 1)} | ` +
        `Corrida: ${formatPt(rec.pontuacoes?.corrida ?? 0, 1)}`;
    }

    function buildRecordPayload(data, calc, nowIso) {
      if (data.situacaoTaf !== 'AVALIADO') {
        const isAusente = data.situacaoTaf === 'AUSENTE';
        const parecerTexto = isAusente
          ? 'AUSENTE'
          : formatParecerNaoAvaliado(data.parecerTipo, data.parecerDetalhe);

        return {
          posto: data.posto,
          nome: data.nome,
          re: data.re,
          mat: data.re,
          situacaoTaf: data.situacaoTaf,
          parecerTipo: isAusente ? 'AUSENTE' : data.parecerTipo,
          parecerDetalhe: isAusente ? '' : data.parecerDetalhe,
          parecerTexto,
          idade: data.idade,
          sexo: data.sexo,
          faixaEtaria: '',
          modalidadeBraco: '',
          bracoValor: null,
          abdominal: null,
          corrida: null,
          obs: data.obs,
          somaNotas: 0,
          mediaFinal: 0,
          isApto: false,
          statusLabel: parecerTexto,
          pontuacoes: { braco: 0, abdominal: 0, corrida: 0 },
          updatedAt: nowIso
        };
      }

      return {
        posto: data.posto,
        nome: data.nome,
        re: data.re,
        mat: data.re,
        situacaoTaf: 'AVALIADO',
        parecerTipo: '',
        parecerDetalhe: '',
        parecerTexto: calc.statusLabel,
        idade: data.idade,
        sexo: data.sexo,
        faixaEtaria: data.faixaEtaria,
        modalidadeBraco: calc.modalidadeBraco,
        bracoValor: data.bracoValor,
        abdominal: data.abdominal,
        corrida: data.corrida,
        obs: data.obs,
        somaNotas: calc.somaNotas,
        mediaFinal: calc.mediaFinal,
        isApto: calc.isApto,
        statusLabel: calc.statusLabel,
        pontuacoes: {
          braco: calc.detalhes.braco.pontos,
          abdominal: calc.detalhes.abdominal.pontos,
          corrida: calc.detalhes.corrida.pontos
        },
        updatedAt: nowIso
      };
    }

    function saveOrUpdateRecord(data, calc, existingId = '') {
      const nowIso = new Date().toISOString();
      const recordPayload = buildRecordPayload(data, calc, nowIso);

      const feedbackMsg = data.situacaoTaf === 'AUSENTE'
        ? 'Registrado como AUSENTE na Ata.'
        : data.situacaoTaf === 'NAO_AVALIADO'
          ? `Registrado como NÃO AVALIADO (${recordPayload.parecerTexto}).`
          : `Média ${formatPt(calc.mediaFinal, 2)} (${calc.statusLabel}).`;

      if (existingId) {
        const idx = records.findIndex(r => r.id === existingId);
        if (idx !== -1) {
          records[idx] = { ...records[idx], ...recordPayload };
          sortRecordsBySeniority();
          saveRecords();
          syncRecordToFirebase(records[idx]);
          resetForm(false);
          renderAll();
          showToast(`Registro atualizado · ${feedbackMsg}`);
          return;
        }
      }

      const newRecord = {
        id: `taf_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        ...recordPayload,
        createdAt: nowIso
      };

      records.push(newRecord);
      sortRecordsBySeniority();
      saveRecords();
      syncRecordToFirebase(newRecord);
      resetForm(false);
      renderAll();
      showToast(`Lançado na Ata · ${feedbackMsg}`);
    }

    let pendingDuplicateSubmission = null;

    function openDuplicateConfirmModal(dupRecord, data, calc) {
      pendingDuplicateSubmission = { dupId: dupRecord.id, data, calc };
      const modal = document.getElementById('duplicate-confirm-modal');
      const descEl = document.getElementById('duplicate-modal-desc');
      const existingSummaryEl = document.getElementById('duplicate-existing-summary');
      const newSummaryEl = document.getElementById('duplicate-new-summary');

      if (!modal || !descEl || !existingSummaryEl || !newSummaryEl) {
        saveOrUpdateRecord(data, calc, dupRecord.id);
        return;
      }

      const fullName = `${data.posto ? data.posto + ' ' : ''}${data.nome}`;
      const matText = data.re ? ` (Matrícula ${data.re})` : '';
      descEl.textContent = `O registro de ${fullName}${matText} já consta na Ata.`;

      existingSummaryEl.textContent = formatRecordShortSummary(dupRecord);

      if (data.situacaoTaf === 'AUSENTE') {
        newSummaryEl.textContent = 'Situação: AUSENTE';
      } else if (data.situacaoTaf === 'NAO_AVALIADO') {
        newSummaryEl.textContent = `Situação: NÃO AVALIADO (${data.parecerTexto})`;
      } else {
        newSummaryEl.textContent =
          `Média ${formatPt(calc.mediaFinal, 2)} (${calc.statusLabel}) · ` +
          `Braços: ${formatPt(calc.detalhes.braco.pontos, 1)} | ` +
          `Abd: ${formatPt(calc.detalhes.abdominal.pontos, 1)} | ` +
          `Corrida: ${formatPt(calc.detalhes.corrida.pontos, 1)}`;
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeDuplicateConfirmModal() {
      pendingDuplicateSubmission = null;
      const modal = document.getElementById('duplicate-confirm-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function confirmDuplicateOverwrite() {
      if (!pendingDuplicateSubmission) return;
      const { dupId, data, calc } = pendingDuplicateSubmission;
      closeDuplicateConfirmModal();
      saveOrUpdateRecord(data, calc, dupId);
    }

    function confirmDuplicateKeepBoth() {
      if (!pendingDuplicateSubmission) return;
      const { data, calc } = pendingDuplicateSubmission;
      closeDuplicateConfirmModal();
      saveOrUpdateRecord(data, calc, '');
    }

    function checkLiveDuplicateWarning() {
      const banner = document.getElementById('duplicate-live-warning');
      const detailEl = document.getElementById('duplicate-live-detail');
      const editBtn = document.getElementById('duplicate-live-edit-btn');
      if (!banner || !detailEl || !editBtn) return;

      const data = readFormValues();
      if (data.id || (!data.nome && !data.re)) {
        banner.classList.add('hidden');
        return;
      }

      const dup = findDuplicateRecord(data);
      if (!dup) {
        banner.classList.add('hidden');
        return;
      }

      const existingFull = `${dup.posto ? dup.posto + ' ' : ''}${dup.nome}`;
      detailEl.textContent = `Registrado na Ata: ${existingFull} · ${formatRecordShortSummary(dup)}`;
      editBtn.onclick = () => editRecord(dup.id);
      banner.classList.remove('hidden');
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      try {
        const data = readFormValues();

        if (!data.nome) {
          showToast('Informe o Nome do(a) militar antes de lançar na Ata.', 'error');
          document.getElementById('militar-nome').focus();
          return;
        }

        if (data.situacaoTaf === 'NAO_AVALIADO') {
          if (data.parecerTipo === 'Outros' && !data.parecerDetalhe) {
            showToast('Especifique o motivo em "Outros" para registrar como Não avaliado.', 'error');
            document.getElementById('parecer-outros-detalhe')?.focus();
            return;
          }
          if (!data.id) {
            const dup = findDuplicateRecord(data);
            if (dup) {
              openDuplicateConfirmModal(dup, data, null);
              return;
            }
          }
          saveOrUpdateRecord(data, null, data.id);
          return;
        }

        if (data.situacaoTaf === 'AUSENTE') {
          if (!data.id) {
            const dup = findDuplicateRecord(data);
            if (dup) {
              openDuplicateConfirmModal(dup, data, null);
              return;
            }
          }
          saveOrUpdateRecord(data, null, data.id);
          return;
        }

        // Caso AVALIADO
        if (data.idade === null || !Number.isFinite(data.idade) || data.idade < 15 || data.idade > 90) {
          showToast('Informe a Idade (anos) do(a) militar antes de lançar na Ata.', 'error');
          document.getElementById('militar-idade').focus();
          return;
        }

        const hasAnyResult =
          data.bracoValor !== null ||
          data.abdominal !== null ||
          data.corrida !== null;

        if (!hasAnyResult) {
          showToast('Informe os resultados das provas antes de lançar na Ata.', 'error');
          return;
        }

        const calc = calcularAvaliacaoTAF(data);

        if (!data.id) {
          const dup = findDuplicateRecord(data);
          if (dup) {
            openDuplicateConfirmModal(dup, data, calc);
            return;
          }
        }

        saveOrUpdateRecord(data, calc, data.id);
      } catch (err) {
        console.error('Erro ao salvar registro:', err);
        showToast('Ocorreu um erro ao salvar o registro na Ata.', 'error');
      }
    }

    function editRecord(id) {
      const rec = records.find(r => r.id === id);
      if (!rec) return;

      document.getElementById('edit-id').value = rec.id;
      document.getElementById('militar-posto').value = rec.posto || '';
      document.getElementById('militar-nome').value = rec.nome || '';
      document.getElementById('militar-re').value = rec.re || rec.mat || '';
      document.getElementById('militar-idade').value = rec.idade ?? '';
      document.getElementById('militar-obs').value = rec.obs || '';

      const situacao = ['NAO_AVALIADO', 'AUSENTE'].includes(rec.situacaoTaf) ? rec.situacaoTaf : 'AVALIADO';
      setSituacaoTafSelecionada(situacao);

      if (situacao === 'NAO_AVALIADO') {
        const selParecer = document.getElementById('parecer-nao-avaliado');
        if (selParecer) {
          const validOpts = ['Disp. Esforço Físico', 'LTIP', 'Férias', 'Outros'];
          selParecer.value = validOpts.includes(rec.parecerTipo) ? rec.parecerTipo : 'Disp. Esforço Físico';
        }
        const detEl = document.getElementById('parecer-outros-detalhe');
        if (detEl) detEl.value = rec.parecerDetalhe || '';
      }

      currentFaixaEtaria = rec.faixaEtaria || getAgeGroupFromAge(rec.idade);
      const badge = document.getElementById('faixa-auto-badge');
      if (badge) {
        badge.textContent = rec.idade ? `Faixa: ${currentFaixaEtaria}` : 'Faixa: autom.';
      }

      const radioSexo = document.querySelector(`input[name="sexo"][value="${rec.sexo || 'Masculino'}"]`);
      if (radioSexo) radioSexo.checked = true;

      onProtocolOrAgeChange();
      onSituacaoTafChange();

      const modVal = resolveModalidadeBraco(rec.sexo || 'Masculino', currentFaixaEtaria, rec.modalidadeBraco);
      const radioMod = document.querySelector(`input[name="modalidade-braco"][value="${modVal}"]`);
      if (radioMod && !radioMod.disabled) radioMod.checked = true;

      document.getElementById('prova-braco').value = rec.bracoValor ?? '';
      document.getElementById('prova-abdominal').value = rec.abdominal ?? '';
      document.getElementById('prova-corrida').value = rec.corrida ?? '';

      document.getElementById('form-title').textContent = 'Editar lançamento';
      document.getElementById('editing-badge').classList.remove('hidden');
      document.getElementById('btn-submit').textContent = 'Salvar alterações';

      switchView('lancar');
      if (situacao === 'AVALIADO') {
        onArmModalityChange();
      } else {
        recalculateLive();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(`Editando ${rec.posto ? rec.posto + ' ' : ''}${rec.nome}.`, 'info');
    }

    function deleteRecord(id) {
      const rec = records.find(r => r.id === id);
      if (!rec) return;
      records = records.filter(r => r.id !== id);
      if (document.getElementById('edit-id').value === id) {
        resetForm(false);
      }
      saveRecords();
      deleteRecordFromFirebase(id);
      renderAll();
      showToast(`Registro de "${rec.nome}" removido da Ata.`, 'info');
    }

    function requestClearAll() {
      if (records.length === 0) {
        showToast('A Ata já está vazia.', 'info');
        return;
      }
      if (!pendingClearAll) {
        pendingClearAll = true;
        showToast('Clique em "Limpar Ata" novamente em até 5 segundos para confirmar.', 'error');
        setTimeout(() => {
          pendingClearAll = false;
        }, 5000);
        return;
      }
      pendingClearAll = false;
      records = [];
      saveRecords();
      resetForm(false);
      renderAll();
      showToast('Todos os lançamentos da Ata foram removidos.', 'info');
    }

    function resetForm(notify = false) {
      document.getElementById('edit-id').value = '';
      document.getElementById('militar-posto').value = '';
      document.getElementById('militar-nome').value = '';
      document.getElementById('militar-re').value = '';
      document.getElementById('militar-idade').value = '';
      document.getElementById('prova-braco').value = '';
      document.getElementById('prova-abdominal').value = '';
      document.getElementById('prova-corrida').value = '';
      document.getElementById('militar-obs').value = '';

      setSituacaoTafSelecionada('AVALIADO');
      const selParecer = document.getElementById('parecer-nao-avaliado');
      if (selParecer) selParecer.value = 'Disp. Esforço Físico';
      const detEl = document.getElementById('parecer-outros-detalhe');
      if (detEl) detEl.value = '';
      document.getElementById('outros-especificar-wrap')?.classList.add('hidden');

      currentFaixaEtaria = 'Até 25';
      const badge = document.getElementById('faixa-auto-badge');
      if (badge) badge.textContent = 'Faixa: autom.';

      const dupBanner = document.getElementById('duplicate-live-warning');
      if (dupBanner) dupBanner.classList.add('hidden');

      document.getElementById('form-title').textContent = 'Novo lançamento';
      document.getElementById('editing-badge').classList.add('hidden');
      document.getElementById('btn-submit').textContent = 'Lançar na Ata';

      onProtocolOrAgeChange();
      onSituacaoTafChange();
      checkLiveDuplicateWarning();
      if (notify) showToast('Campos limpos.', 'info');
    }

    function getSelectedSemestre() {
      const el = document.querySelector('input[name="ata-semestre"]:checked');
      return el && el.value === '1º Semestre' ? '1º Semestre' : '2º Semestre';
    }

    function setSelectedSemestre(sem) {
      const val = sem === '1º Semestre' ? '1º Semestre' : '2º Semestre';
      const radio = document.querySelector(`input[name="ata-semestre"][value="${val}"]`);
      if (radio) radio.checked = true;
    }

    function buildAtaTitle(semestre) {
      return `ATA DE CONCLUSÃO DO TAF - ${semestre.toUpperCase()}`;
    }

    function saveAtaMeta() {
      try {
        const semestre = getSelectedSemestre();
        const meta = {
          om: document.getElementById('ata-om').value,
          semestre,
          numero: buildAtaTitle(semestre),
          data: document.getElementById('ata-data').value,
          comissao: document.getElementById('ata-comissao').value
        };
        localStorage.setItem(ATA_META_KEY, JSON.stringify(meta));
        updatePrintHeader();
      } catch (err) {
        console.error('Erro ao salvar cabeçalho da Ata:', err);
      }
    }

    function loadAtaMeta() {
      try {
        const raw = localStorage.getItem(ATA_META_KEY);
        const today = new Date().toISOString().slice(0, 10);
        if (!raw) {
          document.getElementById('ata-data').value = today;
          setSelectedSemestre('2º Semestre');
          return;
        }
        const meta = JSON.parse(raw);
        document.getElementById('ata-om').value = meta.om || '';
        let sem = meta.semestre;
        if (!sem && typeof meta.numero === 'string') {
          sem = meta.numero.includes('1º') ? '1º Semestre' : '2º Semestre';
        }
        setSelectedSemestre(sem || '2º Semestre');
        document.getElementById('ata-data').value = meta.data || today;
        document.getElementById('ata-comissao').value = meta.comissao || '';
      } catch (err) {
        console.error('Erro ao carregar cabeçalho da Ata:', err);
      }
    }

    function getAvaliadosRecords() {
      return records.filter(r => r.situacaoTaf !== 'NAO_AVALIADO' && r.situacaoTaf !== 'AUSENTE');
    }

    function updatePrintHeader() {
      const om = document.getElementById('ata-om').value.trim() || 'UNIDADE';
      const semestre = getSelectedSemestre();
      const tituloAta = buildAtaTitle(semestre);
      const dataRaw = document.getElementById('ata-data').value;
      const comissao = document.getElementById('ata-comissao').value.trim();

      let dataFmt = '';
      if (dataRaw) {
        const [y, m, d] = dataRaw.split('-');
        dataFmt = `${d}/${m}/${y}`;
      } else {
        dataFmt = new Date().toLocaleDateString('pt-BR');
      }

      document.getElementById('print-om').textContent = om.toUpperCase();
      document.getElementById('print-ata-titulo').textContent = tituloAta;
      document.getElementById('print-ata-sub').textContent =
        `Data do TAF: ${dataFmt}${comissao ? ` · Comissão Avaliadora: ${comissao}` : ''}`;

      const avaliados = getAvaliadosRecords();
      const aptos = avaliados.filter(r => r.isApto).length;
      const inaptos = avaliados.length - aptos;
      const naoAvaliados = records.filter(r => r.situacaoTaf === 'NAO_AVALIADO').length;
      const ausentes = records.filter(r => r.situacaoTaf === 'AUSENTE').length;

      document.getElementById('print-summary-bar').innerHTML = `
        <div class="k"><b>${avaliados.length}</b><span>Avaliados</span></div>
        <div class="k ok"><b>${aptos}</b><span>Aptos(as)</span></div>
        <div class="k no"><b>${inaptos}</b><span>Inaptos(as)</span></div>
        <div class="k wa"><b>${naoAvaliados}</b><span>Não avaliados</span></div>
        <div class="k mu"><b>${ausentes}</b><span>Ausentes</span></div>
      `;
      document.getElementById('print-footer-date').textContent = `Documento gerado eletronicamente em ${new Date().toLocaleString('pt-BR')}.`;
    }

    function prepareAndPrint() {
      updatePrintHeader();
      window.print();
    }

    function saveRecords() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      } catch (err) {
        console.error('Falha ao salvar no localStorage:', err);
        showToast('Aviso: não foi possível gravar no armazenamento local.', 'error');
      }
    }

    function normalizeLoadedItem(item) {
      const reVal = String(item.re || item.mat || item.MAT || '').trim();
      const situacaoTaf = ['NAO_AVALIADO', 'AUSENTE'].includes(item.situacaoTaf)
        ? item.situacaoTaf
        : 'AVALIADO';

      if (situacaoTaf !== 'AVALIADO') {
        const isAusente = situacaoTaf === 'AUSENTE';
        const parecerTipo = isAusente ? 'AUSENTE' : (item.parecerTipo || 'Disp. Esforço Físico');
        const parecerDetalhe = isAusente ? '' : (item.parecerDetalhe || '');
        const parecerTexto = isAusente
          ? 'AUSENTE'
          : (item.parecerTexto || formatParecerNaoAvaliado(parecerTipo, parecerDetalhe));

        return {
          ...item,
          re: reVal,
          mat: reVal,
          situacaoTaf,
          parecerTipo,
          parecerDetalhe,
          parecerTexto,
          idade: item.idade !== undefined && item.idade !== null && item.idade !== '' ? Number(item.idade) : null,
          sexo: item.sexo === 'Feminino' ? 'Feminino' : 'Masculino',
          faixaEtaria: '',
          modalidadeBraco: '',
          bracoValor: null,
          abdominal: null,
          corrida: null,
          somaNotas: 0,
          mediaFinal: 0,
          isApto: false,
          statusLabel: parecerTexto,
          pontuacoes: { braco: 0, abdominal: 0, corrida: 0 }
        };
      }

      const sexo = item.sexo === 'Feminino' ? 'Feminino' : 'Masculino';
      const idade = item.idade !== undefined && item.idade !== null && item.idade !== '' ? Number(item.idade) : null;
      const faixaEtaria = Number.isFinite(idade) && idade > 0
        ? getAgeGroupFromAge(idade)
        : (AGE_GROUPS.includes(item.faixaEtaria) ? item.faixaEtaria : 'Até 25');
      const modalidadeBraco = resolveModalidadeBraco(sexo, faixaEtaria, item.modalidadeBraco);
      const bracoValor = item.bracoValor !== undefined ? item.bracoValor : null;

      const calc = calcularAvaliacaoTAF({
        sexo,
        faixaEtaria,
        modalidadeBraco,
        bracoValor,
        abdominal: item.abdominal ?? null,
        corrida: item.corrida ?? null
      });

      return {
        ...item,
        re: reVal,
        mat: reVal,
        situacaoTaf: 'AVALIADO',
        parecerTipo: '',
        parecerDetalhe: '',
        parecerTexto: calc.statusLabel,
        idade: Number.isFinite(idade) ? idade : null,
        sexo,
        faixaEtaria,
        modalidadeBraco: calc.modalidadeBraco,
        bracoValor,
        somaNotas: calc.somaNotas,
        mediaFinal: calc.mediaFinal,
        isApto: calc.isApto,
        statusLabel: calc.statusLabel,
        pontuacoes: {
          braco: calc.detalhes.braco.pontos,
          abdominal: calc.detalhes.abdominal.pontos,
          corrida: calc.detalhes.corrida.pontos
        }
      };
    }

    function loadRecords() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          records = [];
          return;
        }
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
          records = [];
          return;
        }
        records = parsed.map(normalizeLoadedItem);
        sortRecordsBySeniority();
      } catch (err) {
        console.error('Erro ao ler localStorage:', err);
        records = [];
      }
    }

    const POSTO_SENIORITY_RANK = {
      'CEL PM': 1,
      'TC PM': 2,
      'MAJ PM': 3,
      'CAP PM': 4,
      '1TEN PM': 5,
      '2TEN PM': 6,
      'ASP OF PM': 7,
      'ST PM': 8,
      '1SGT PM': 9,
      '2SGT PM': 10,
      '3SGT PM': 11,
      'CB PM': 12,
      'SD PM': 13,
      'AL SD PM': 14
    };

    function getPostoRank(posto) {
      const normalized = String(posto || '').trim().toUpperCase();
      return POSTO_SENIORITY_RANK[normalized] ?? 999;
    }

    function compareRecordsBySeniority(a, b) {
      const rankA = getPostoRank(a.posto);
      const rankB = getPostoRank(b.posto);
      if (rankA !== rankB) return rankA - rankB;

      const dateA = a.createdAt ? Date.parse(a.createdAt) : 0;
      const dateB = b.createdAt ? Date.parse(b.createdAt) : 0;
      if (dateA !== dateB) return dateA - dateB;

      return String(a.nome || '').localeCompare(String(b.nome || ''), 'pt-BR');
    }

    function sortRecordsBySeniority() {
      records.sort(compareRecordsBySeniority);
    }

    function renderKPIs() {
      const avaliados = getAvaliadosRecords();
      const total = avaliados.length;
      const mascCount = avaliados.filter(r => r.sexo === 'Masculino').length;
      const femCount = total - mascCount;

      document.getElementById('kpi-total').textContent = String(total);
      document.getElementById('kpi-breakdown').textContent = `${mascCount} Masc · ${femCount} Fem`;

      const naoAvalCount = records.filter(r => r.situacaoTaf === 'NAO_AVALIADO').length;
      const ausentesCount = records.filter(r => r.situacaoTaf === 'AUSENTE').length;
      document.getElementById('kpi-avg-media').textContent = String(naoAvalCount + ausentesCount);
      document.getElementById('kpi-max-name').textContent =
        `${naoAvalCount} Não aval. · ${ausentesCount} ${ausentesCount === 1 ? 'Ausente' : 'Ausentes'}`;

      if (total === 0) {
        document.getElementById('kpi-aptos').textContent = '0';
        document.getElementById('kpi-aptos-pct').textContent = '0,0% de aprovação';
        document.getElementById('kpi-inaptos').textContent = '0';
        document.getElementById('kpi-inaptos-pct').textContent = '0,0% do efetivo';
        return;
      }

      const aptosCount = avaliados.filter(r => r.isApto).length;
      const inaptosCount = total - aptosCount;
      const sumMedia = avaliados.reduce((acc, r) => acc + (r.mediaFinal || 0), 0);

      let best = avaliados[0];
      for (const r of avaliados) {
        if ((r.mediaFinal || 0) > (best.mediaFinal || 0) ||
            ((r.mediaFinal || 0) === (best.mediaFinal || 0) && (r.somaNotas || 0) > (best.somaNotas || 0))) {
          best = r;
        }
      }

      const bestFullName = `${best.posto ? best.posto + ' ' : ''}${best.nome}`;

      document.getElementById('kpi-aptos').textContent = String(aptosCount);
      document.getElementById('kpi-aptos-pct').textContent = `${formatPt((aptosCount / total) * 100, 1)}% de aprovação`;
      document.getElementById('kpi-inaptos').textContent = String(inaptosCount);
      document.getElementById('kpi-inaptos-pct').textContent = `${formatPt((inaptosCount / total) * 100, 1)}% do efetivo`;
    }

    function renderRecordsTable() {
      const search = (document.getElementById('filter-search')?.value || '').trim().toLowerCase();
      const sexoFilter = document.getElementById('filter-sexo')?.value || 'ALL';
      const faixaFilter = document.getElementById('filter-faixa')?.value || 'ALL';
      const statusFilter = document.getElementById('filter-status')?.value || 'ALL';

      const avaliados = getAvaliadosRecords().slice().sort(compareRecordsBySeniority);
      const filtered = avaliados.filter(r => {
        if (sexoFilter !== 'ALL' && r.sexo !== sexoFilter) return false;
        if (faixaFilter !== 'ALL' && r.faixaEtaria !== faixaFilter) return false;
        if (statusFilter === 'APTO' && !r.isApto) return false;
        if (statusFilter === 'INAPTO' && r.isApto) return false;
        if (search) {
          const hay = normalizeText(`${r.posto || ''} ${r.nome || ''} ${getWarNameForRecord(r)} ${r.re || ''} ${r.idade || ''} ${r.obs || ''} ${r.sexo || ''} ${r.faixaEtaria || ''}`);
          if (!hay.includes(normalizeText(search))) return false;
        }
        return true;
      });

      const tbody = document.getElementById('records-tbody');
      const cards = document.getElementById('records-cards');
      const empty = document.getElementById('records-empty');
      document.getElementById('records-count').textContent = `${filtered.length} de ${avaliados.length}`;
      if (!filtered.length) {
        tbody.innerHTML = ''; cards.innerHTML = '';
        empty.classList.remove('hidden');
        document.getElementById('records-empty-text').textContent = avaliados.length
          ? 'Nenhum resultado para esses filtros.' : 'Nenhum militar avaliado lançado ainda.';
        return;
      }
      empty.classList.add('hidden');

      const cell = (val, pts, unit, pre = '') => val === null || val === undefined
        ? '<span class="mut">—</span>'
        : `<div class="tc">${pre ? `<small>${pre}</small>` : ''}<b class="num">${val}${unit}</b><em class="${pts >= 7 ? 'g' : ''}">Nota ${formatPt(pts, 1)}</em></div>`;

      const rows = [], list = [];
      filtered.forEach((r, i) => {
        const full = escapeHtml(`${r.posto ? r.posto + ' ' : ''}${r.nome}`);
        const mat = r.re || r.mat || '';
        const idade = r.idade !== null && r.idade !== undefined ? `${r.idade} anos` : '—';
        const st = r.isApto ? 'ok' : 'no';
        const mod = r.modalidadeBraco === 'barra' ? 'Barra fixa' : 'Apoio';
        const p = r.pontuacoes || {};
        const c1 = cell(r.bracoValor, p.braco ?? 0, ' rep.', mod), c2 = cell(r.abdominal, p.abdominal ?? 0, ' rep.'), c3 = cell(r.corrida, p.corrida ?? 0, 'm');
        const idx = String(i + 1).padStart(2, '0');
        const info = `${mat ? 'Mat. ' + escapeHtml(mat) : ''}${mat && r.obs ? ', ' : ''}${r.obs ? escapeHtml(r.obs) : ''}`;
        const acts = `<button type="button" class="btn sm" onclick="editRecord('${r.id}')">Editar</button>` +
          (pendingDeleteId === r.id
            ? `<button type="button" class="btn sm dsolid" onclick="requestDeleteRecord('${r.id}')">Confirmar exclusão</button>`
            : `<button type="button" class="btn sm danger" onclick="requestDeleteRecord('${r.id}')">Excluir</button>`);
        rows.push(`<tr><td class="num mut">${idx}</td><td><b>${full}</b><small class="blk">${info}</small></td>
          <td><span class="chip">${escapeHtml(r.sexo)}</span><small class="blk">${idade}, ${escapeHtml(r.faixaEtaria)}</small></td>
          <td>${c1}</td><td>${c2}</td><td>${c3}</td>
          <td class="num r">${formatPt(r.somaNotas, 1)}<small class="blk">de 30,0</small></td>
          <td class="num r ${st}t"><b>${formatPt(r.mediaFinal, 2)}</b></td>
          <td><span class="st ${st}">${r.statusLabel}</span></td>
          <td class="noprint r"><div class="acts">${acts}</div></td></tr>`);
        list.push(`<article class="rc ${st}"><header><span class="num mut">${idx}</span><div><b>${full}</b><small class="blk">${info}</small></div><span class="st ${st}">${r.statusLabel}</span></header>
          <div class="chips"><span class="chip">${escapeHtml(r.sexo)}</span><span class="chip">${idade}</span><span class="chip">${escapeHtml(r.faixaEtaria)}</span></div>
          <div class="tri">${c1}${c2}${c3}</div>
          <footer><div><small>Média final</small><b class="num ${st}t">${formatPt(r.mediaFinal, 2)}</b></div><div class="acts">${acts}</div></footer></article>`);
      });
      tbody.innerHTML = rows.join('');
      cards.innerHTML = list.join('');
    }

    /**
     * Renderiza as seções "2. Não avaliados" e "3. Ausentes" na Ata
     */
    function renderAusenciaSections() {
      const naoAvaliados = records.filter(r => r.situacaoTaf === 'NAO_AVALIADO').sort(compareRecordsBySeniority);
      const ausentes = records.filter(r => r.situacaoTaf === 'AUSENTE').sort(compareRecordsBySeniority);

      const renderGrupo = (lista, tbodyId, countId, emptyId, subtitleSuffix, badgeClass) => {
        const tbody = document.getElementById(tbodyId);
        const countEl = document.getElementById(countId);
        const emptyEl = document.getElementById(emptyId);
        if (!tbody) return;

        if (countEl) countEl.textContent = `${lista.length} registro(s) — ${subtitleSuffix}`;
        if (!lista.length) {
          tbody.innerHTML = '';
          if (emptyEl) emptyEl.classList.remove('hidden');
          return;
        }
        if (emptyEl) emptyEl.classList.add('hidden');

        tbody.innerHTML = lista.map((r, idx) => {
          const col1 = escapeHtml(`${r.posto ? r.posto + ' ' : ''}${r.nome || ''}`.trim());
          const col2 = escapeHtml((r.re || r.mat || '').trim() || '—');
          const parecerVal = r.situacaoTaf === 'AUSENTE'
            ? 'AUSENTE'
            : (r.parecerTexto || formatParecerNaoAvaliado(r.parecerTipo, r.parecerDetalhe));
          const col3 = escapeHtml(parecerVal);
          const obsLine = r.obs ? `<small class="blk">Obs.: ${escapeHtml(r.obs)}</small>` : '';

          const acts = `<button type="button" class="btn sm" onclick="editRecord('${r.id}')">Editar</button>` +
            (pendingDeleteId === r.id
              ? `<button type="button" class="btn sm dsolid" onclick="requestDeleteRecord('${r.id}')">Confirmar exclusão</button>`
              : `<button type="button" class="btn sm danger" onclick="requestDeleteRecord('${r.id}')">Excluir</button>`);

          return `<tr>
            <td class="num mut col-ord">${String(idx + 1).padStart(2, '0')}</td>
            <td class="col-nome"><b>${col1}</b>${obsLine}</td>
            <td class="num col-mat">${col2}</td>
            <td class="col-parecer"><span class="chip ${badgeClass}">${col3}</span></td>
            <td class="noprint r col-acoes"><div class="acts">${acts}</div></td>
          </tr>`;
        }).join('');
      };

      renderGrupo(
        naoAvaliados,
        'nao-avaliados-tbody',
        'nao-avaliados-count',
        'nao-avaliados-empty',
        'dispensa médica comprovada ou caso fortuito / força maior',
        'amber'
      );
      renderGrupo(
        ausentes,
        'ausentes-tbody',
        'ausentes-count',
        'ausentes-empty',
        'não compareceram ao TAF',
        'rose'
      );
    }

    function renderReferenceTable() {
      const isMasc = currentRefProtocol === 'Masculino';
      const rows = isMasc ? PROTOCOLO_MASCULINO : PROTOCOLO_FEMININO;
      const heads = isMasc ? ['Corrida (m)', 'Apoio (36 anos ou mais)', 'Barra fixa', 'Abdominal'] : ['Corrida (m)', 'Apoio', 'Abdominal'];
      const n = heads.length;
      document.getElementById('reference-table-wrapper').innerHTML = `<table class="rt"><thead><tr>
        ${heads.map(h => `<th>${h}</th>`).join('')}${AGE_GROUPS.map(a => `<th class="age">${a}</th>`).join('')}</tr></thead><tbody>
        ${rows.map(row => `<tr>${row.map((v, k) => k < n
          ? `<td class="key${k === n - 1 ? ' last' : ''}">${v}</td>`
          : `<td class="${v === 10 ? 'top' : v >= 7 ? 'pass' : v === 0 ? 'zero' : ''}">${formatPt(v, v % 1 === 0 ? 0 : 1)}</td>`).join('')}</tr>`).join('')}
        </tbody></table>`;
    }

    const VIEWS = ['lancar', 'ata', 'tabelas'];
    function switchView(name) {
      if (!VIEWS.includes(name)) name = 'lancar';
      VIEWS.forEach(v => {
        document.getElementById('view-' + v).classList.toggle('on', v === name);
        document.querySelectorAll(`[data-tab="${v}"]`).forEach(b => b.classList.toggle('on', v === name));
      });
      if (name === 'tabelas') renderReferenceTable();
      window.scrollTo({ top: 0 });
      updateTopoAtaButton();
    }

    function setReferenceProtocol(protocol) {
      currentRefProtocol = protocol;
      document.getElementById('btn-ref-masculino').classList.toggle('on', protocol === 'Masculino');
      document.getElementById('btn-ref-feminino').classList.toggle('on', protocol === 'Feminino');
      renderReferenceTable();
    }

    let pendingDeleteId = null, pendingDeleteTimer = null;
    function requestDeleteRecord(id) {
      clearTimeout(pendingDeleteTimer);
      if (pendingDeleteId === id) { pendingDeleteId = null; deleteRecord(id); return; }
      pendingDeleteId = id;
      pendingDeleteTimer = setTimeout(() => { pendingDeleteId = null; renderRecordsTable(); renderAusenciaSections(); }, 4000);
      renderRecordsTable();
      renderAusenciaSections();
    }

    function renderExtras() {
      const avaliados = getAvaliadosRecords();
      const t = avaliados.length, a = avaliados.filter(r => r.isApto).length;
      document.getElementById('kpi-bar').style.width = t ? `${(a / t) * 100}%` : '0%';
      const n = document.getElementById('nav-count');
      n.textContent = records.length;
      n.classList.toggle('hidden', !records.length);
    }

    /**
     * ============================================================================
     * EXPORTAÇÃO EXCEL (.XLSX)
     * - Aba 1 (ATA_TAF): Avaliados no modelo oficial sem títulos (13 colunas A..M)
     * - Aba 2 (NAO_AVALIADOS): Col A = Graduação + Nome, Col B = Matrícula, Col C = Parecer
     * - Aba 3 (AUSENTES): Col A = Graduação + Nome, Col B = Matrícula, Col C = AUSENTE
     * ============================================================================
     */
    function exportAtaExcel() {
      if (records.length === 0) {
        showToast('Não há registros na Ata para gerar a planilha Excel.', 'error');
        return;
      }

      if (typeof XLSX === 'undefined') {
        showToast('Biblioteca Excel não carregada. Verifique sua conexão com a internet.', 'error');
        return;
      }

      const orderedAll = records.slice().sort(compareRecordsBySeniority);
      const avaliados = orderedAll.filter(r => r.situacaoTaf !== 'NAO_AVALIADO' && r.situacaoTaf !== 'AUSENTE');
      const naoAvaliados = orderedAll.filter(r => r.situacaoTaf === 'NAO_AVALIADO');
      const ausentes = orderedAll.filter(r => r.situacaoTaf === 'AUSENTE');

      const wb = XLSX.utils.book_new();

      // 1. Aba ATA_TAF (Avaliados - modelo oficial sem cabeçalhos, 13 colunas)
      const avaliadosRows = avaliados.map(r => {
        const fullName = `${r.posto ? r.posto + ' ' : ''}${r.nome}`.trim().toUpperCase();
        const matricula = (r.re || r.mat || '').trim() || '-';
        const idade = r.idade !== null && r.idade !== undefined ? Number(r.idade) : '-';

        const isBarra = r.modalidadeBraco === 'barra';
        const hasBraco = r.bracoValor !== null && r.bracoValor !== undefined;

        const barraRep = isBarra && hasBraco ? Number(r.bracoValor) : '-';
        const barraPts = isBarra && hasBraco ? formatPt(r.pontuacoes?.braco ?? 0, 2) : '-';

        const apoioRep = !isBarra && hasBraco ? Number(r.bracoValor) : '-';
        const apoioPts = !isBarra && hasBraco ? formatPt(r.pontuacoes?.braco ?? 0, 2) : '-';

        const hasAbd = r.abdominal !== null && r.abdominal !== undefined;
        const abdRep = hasAbd ? Number(r.abdominal) : '-';
        const abdPts = hasAbd ? formatPt(r.pontuacoes?.abdominal ?? 0, 2) : '-';

        const hasCorrida = r.corrida !== null && r.corrida !== undefined;
        const corridaPercurso = hasCorrida ? Number(r.corrida) : '-';
        const corridaPts = hasCorrida ? formatPt(r.pontuacoes?.corrida ?? 0, 2) : '-';

        const totalPontos = formatPt(r.mediaFinal, 2);
        const parecer = r.statusLabel;

        return [
          fullName,
          matricula,
          idade,
          barraRep,
          barraPts,
          apoioRep,
          apoioPts,
          abdRep,
          abdPts,
          corridaPercurso,
          corridaPts,
          totalPontos,
          parecer
        ];
      });

      const wsAta = XLSX.utils.aoa_to_sheet(avaliadosRows.length ? avaliadosRows : [['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']]);
      wsAta['!cols'] = [
        { wch: 46 },
        { wch: 13 },
        { wch: 8 },
        { wch: 8 },
        { wch: 9 },
        { wch: 8 },
        { wch: 9 },
        { wch: 8 },
        { wch: 9 },
        { wch: 10 },
        { wch: 9 },
        { wch: 10 },
        { wch: 11 }
      ];
      XLSX.utils.book_append_sheet(wb, wsAta, 'ATA_TAF');

      // 2. Aba NAO_AVALIADOS (Col 1: Grad + Nome, Col 2: Matrícula, Col 3: Parecer)
      if (naoAvaliados.length > 0) {
        const naoAvaliadosRows = naoAvaliados.map(r => {
          const fullName = `${r.posto ? r.posto + ' ' : ''}${r.nome}`.trim().toUpperCase();
          const matricula = (r.re || r.mat || '').trim() || '-';
          const parecer = (r.parecerTexto || formatParecerNaoAvaliado(r.parecerTipo, r.parecerDetalhe)).toUpperCase();
          return [fullName, matricula, parecer];
        });
        const wsNaoAvaliados = XLSX.utils.aoa_to_sheet(naoAvaliadosRows);
        wsNaoAvaliados['!cols'] = [
          { wch: 46 },
          { wch: 15 },
          { wch: 36 }
        ];
        XLSX.utils.book_append_sheet(wb, wsNaoAvaliados, 'NAO_AVALIADOS');
      }

      // 3. Aba AUSENTES (Col 1: Grad + Nome, Col 2: Matrícula, Col 3: AUSENTE)
      if (ausentes.length > 0) {
        const ausentesRows = ausentes.map(r => {
          const fullName = `${r.posto ? r.posto + ' ' : ''}${r.nome}`.trim().toUpperCase();
          const matricula = (r.re || r.mat || '').trim() || '-';
          return [fullName, matricula, 'AUSENTE'];
        });
        const wsAusentes = XLSX.utils.aoa_to_sheet(ausentesRows);
        wsAusentes['!cols'] = [
          { wch: 46 },
          { wch: 15 },
          { wch: 16 }
        ];
        XLSX.utils.book_append_sheet(wb, wsAusentes, 'AUSENTES');
      }

      XLSX.writeFile(wb, `ATA_TAF_${new Date().toISOString().slice(0, 10)}.xlsx`);
      showToast('Planilha Excel gerada com abas separadas (ATA_TAF, Não Avaliados e Ausentes).');
    }

    function exportJSON() {
      if (records.length === 0) {
        showToast('Não há registros na Ata para exportar.', 'error');
        return;
      }
      const payload = {
        sistema: 'ATA_TAF_OFICIAL_V5',
        exportadoEm: new Date().toISOString(),
        cabecalhoAta: {
          om: document.getElementById('ata-om').value,
          semestre: getSelectedSemestre(),
          numero: buildAtaTitle(getSelectedSemestre()),
          data: document.getElementById('ata-data').value,
          comissao: document.getElementById('ata-comissao').value
        },
        registros: records
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      downloadBlob(blob, `ata-taf-backup-${new Date().toISOString().slice(0, 10)}.json`);
      showToast('Backup JSON exportado.');
    }

    function importJSON(event) {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(String(e.target?.result || ''));
          const incoming = Array.isArray(parsed)
            ? parsed
            : Array.isArray(parsed?.registros)
              ? parsed.registros
              : null;

          if (!incoming) {
            showToast('Formato JSON inválido para importação.', 'error');
            return;
          }

          if (parsed?.cabecalhoAta) {
            if (parsed.cabecalhoAta.om) document.getElementById('ata-om').value = parsed.cabecalhoAta.om;
            if (parsed.cabecalhoAta.semestre) {
              setSelectedSemestre(parsed.cabecalhoAta.semestre);
            } else if (typeof parsed.cabecalhoAta.numero === 'string') {
              setSelectedSemestre(parsed.cabecalhoAta.numero.includes('1º') ? '1º Semestre' : '2º Semestre');
            }
            if (parsed.cabecalhoAta.data) document.getElementById('ata-data').value = parsed.cabecalhoAta.data;
            if (parsed.cabecalhoAta.comissao) document.getElementById('ata-comissao').value = parsed.cabecalhoAta.comissao;
            saveAtaMeta();
          }

          let added = 0;
          for (const item of incoming) {
            const situacaoTaf = ['NAO_AVALIADO', 'AUSENTE'].includes(item.situacaoTaf)
              ? item.situacaoTaf
              : 'AVALIADO';
            const reVal = String(item.re || item.mat || item.MAT || '').trim();

            if (situacaoTaf !== 'AVALIADO') {
              const isAusente = situacaoTaf === 'AUSENTE';
              const parecerTipo = isAusente ? 'AUSENTE' : (item.parecerTipo || 'Disp. Esforço Físico');
              const parecerDetalhe = isAusente ? '' : String(item.parecerDetalhe || '').trim();
              const parecerTexto = isAusente
                ? 'AUSENTE'
                : (item.parecerTexto || formatParecerNaoAvaliado(parecerTipo, parecerDetalhe));

              records.push({
                id: `taf_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
                posto: String(item.posto || '').trim(),
                nome: String(item.nome || 'Militar não identificado').trim(),
                re: reVal,
                mat: reVal,
                situacaoTaf,
                parecerTipo,
                parecerDetalhe,
                parecerTexto,
                idade: null,
                sexo: item.sexo === 'Feminino' ? 'Feminino' : 'Masculino',
                faixaEtaria: '',
                modalidadeBraco: '',
                bracoValor: null,
                abdominal: null,
                corrida: null,
                obs: String(item.obs || '').trim(),
                somaNotas: 0,
                mediaFinal: 0,
                isApto: false,
                statusLabel: parecerTexto,
                pontuacoes: { braco: 0, abdominal: 0, corrida: 0 },
                createdAt: item.createdAt || new Date().toISOString(),
                updatedAt: new Date().toISOString()
              });
              added++;
              continue;
            }

            const sexo = item.sexo === 'Feminino' ? 'Feminino' : 'Masculino';
            const idadeRaw = item.idade === '' || item.idade === null || item.idade === undefined ? null : Number(item.idade);
            const idade = Number.isFinite(idadeRaw) ? idadeRaw : null;
            const faixaEtaria = Number.isFinite(idade) && idade > 0
              ? getAgeGroupFromAge(idade)
              : (AGE_GROUPS.includes(item.faixaEtaria) ? item.faixaEtaria : 'Até 25');
            const modalidadeBraco = resolveModalidadeBraco(sexo, faixaEtaria, item.modalidadeBraco);

            const rawBraco = item.bracoValor !== undefined ? item.bracoValor : (modalidadeBraco === 'barra' ? item.barra : item.apoio);
            const bracoValor = rawBraco === '' || rawBraco === null || rawBraco === undefined ? null : Number(rawBraco);
            const abdominal = item.abdominal === '' || item.abdominal === null || item.abdominal === undefined ? null : Number(item.abdominal);
            const corrida = item.corrida === '' || item.corrida === null || item.corrida === undefined ? null : Number(item.corrida);

            const calc = calcularAvaliacaoTAF({
              sexo,
              faixaEtaria,
              modalidadeBraco,
              bracoValor: Number.isFinite(bracoValor) ? bracoValor : null,
              abdominal: Number.isFinite(abdominal) ? abdominal : null,
              corrida: Number.isFinite(corrida) ? corrida : null
            });

            records.push({
              id: `taf_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
              posto: String(item.posto || '').trim(),
              nome: String(item.nome || 'Militar não identificado').trim(),
              re: reVal,
              mat: reVal,
              situacaoTaf: 'AVALIADO',
              parecerTipo: '',
              parecerDetalhe: '',
              parecerTexto: calc.statusLabel,
              idade,
              sexo,
              faixaEtaria,
              modalidadeBraco: calc.modalidadeBraco,
              bracoValor: Number.isFinite(bracoValor) ? bracoValor : null,
              abdominal: Number.isFinite(abdominal) ? abdominal : null,
              corrida: Number.isFinite(corrida) ? corrida : null,
              obs: String(item.obs || '').trim(),
              somaNotas: calc.somaNotas,
              mediaFinal: calc.mediaFinal,
              isApto: calc.isApto,
              statusLabel: calc.statusLabel,
              pontuacoes: {
                braco: calc.detalhes.braco.pontos,
                abdominal: calc.detalhes.abdominal.pontos,
                corrida: calc.detalhes.corrida.pontos
              },
              createdAt: item.createdAt || new Date().toISOString(),
              updatedAt: new Date().toISOString()
            });
            added++;
          }

          sortRecordsBySeniority();
          saveRecords();
          renderAll();
          showToast(`${added} registro(s) importado(s) para a Ata.`);
        } catch (err) {
          console.error('Erro ao importar JSON:', err);
          showToast('Não foi possível ler o arquivo JSON.', 'error');
        } finally {
          event.target.value = '';
        }
      };
      reader.readAsText(file, 'utf-8');
    }

    function downloadBlob(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function renderAll() {
      renderKPIs();
      renderExtras();
      renderRecordsTable();
      renderAusenciaSections();
      updatePrintHeader();
      checkLiveDuplicateWarning();
    }

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
    const DEFAULT_COLLECTION_PREFIX = 'taf_bpmrv';
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
      if (typeof firebase === 'undefined') return;
      try {
        const appName = 'taf_app_' + DEFAULT_COLLECTION_PREFIX;
        const existingApp = firebase.apps.find(a => a.name === appName);
        const app = existingApp || firebase.initializeApp(DEFAULT_FIREBASE_CONFIG, appName);
        dbFirestore = app.firestore();
        firebaseConnected = true;

        await loadEfetivoFromFirestore();
        await loadAtaFromFirestore();
      } catch (err) {
        console.warn('Erro ao inicializar Firebase em segundo plano:', err);
        firebaseConnected = false;
        dbFirestore = null;
      }
    }

    async function loadEfetivoFromFirestore() {
      if (!firebaseConnected || !dbFirestore) return;
      const snap = await dbFirestore.collection(`${DEFAULT_COLLECTION_PREFIX}_efetivo`).orderBy('id').get();
      if (!snap.empty) {
        efetivoList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        saveEfetivoCache();
      }
    }

    async function syncRecordToFirebase(rec) {
      if (!firebaseConnected || !dbFirestore || !rec?.id) return;
      try {
        await dbFirestore.collection(`${DEFAULT_COLLECTION_PREFIX}_ata_lancamentos`).doc(rec.id).set(rec);
      } catch (err) {
        console.warn('Falha ao salvar registro no Firestore:', err);
      }
    }

    async function deleteRecordFromFirebase(id) {
      if (!firebaseConnected || !dbFirestore || !id) return;
      try {
        await dbFirestore.collection(`${DEFAULT_COLLECTION_PREFIX}_ata_lancamentos`).doc(id).delete();
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
          batch.set(dbFirestore.collection(`${DEFAULT_COLLECTION_PREFIX}_ata_lancamentos`).doc(r.id), r);
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
        const snap = await dbFirestore.collection(`${DEFAULT_COLLECTION_PREFIX}_ata_lancamentos`).get();
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

    /**
     * ============================================================================
     * MODAL DE PESQUISA E PREENCHIMENTO AUTOMÁTICO DOS CAMPOS DO TAF
     * ============================================================================
     */
    function openEfetivoModal() {
      const modal = document.getElementById('efetivo-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const searchInput = document.getElementById('efetivo-search-input');
      if (searchInput) {
        searchInput.value = '';
        setTimeout(() => searchInput.focus(), 50);
      }
      renderEfetivoModalList();
    }

    function closeEfetivoModal() {
      const modal = document.getElementById('efetivo-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function handleModalBackdropClick(event) {
      if (event.target && event.target.id === 'efetivo-modal') {
        closeEfetivoModal();
      }
    }

    function normalizeText(str) {
      return String(str || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
    }

    function renderEfetivoModalList() {
      const q = normalizeText(document.getElementById('efetivo-search-input')?.value || '');
      const gradFilter = document.getElementById('efetivo-grad-filter')?.value || 'ALL';
      const box = document.getElementById('efetivo-modal-tbody');
      const countEl = document.getElementById('efetivo-result-count');
      const filtered = efetivoList.filter(p => {
        if (gradFilter !== 'ALL' && p.postoGraduacao !== gradFilter) return false;
        if (!q) return true;
        return normalizeText(`${p.postoGraduacao} ${p.graduacaoRaw} ${p.nome} ${p.nomeGuerra} ${p.matricula} ${p.idade}`).includes(q);
      });
      if (countEl) countEl.textContent = `${filtered.length} encontrado(s)`;
      if (!box) return;
      box.innerHTML = filtered.length ? filtered.map(p => `
        <button type="button" class="pol" onclick="selectPolicialFromModal('${p.id}')">
          <span class="num g">${escapeHtml(p.postoGraduacao)}</span>
          <span><b>${escapeHtml(p.nome)}</b><small class="blk">Nome de guerra: ${escapeHtml(p.nomeGuerra)}, matrícula ${escapeHtml(p.matricula)}</small></span>
          <span class="chip">${p.idade} anos, ${escapeHtml(p.sexo)}</span>
        </button>`).join('') : '<p class="empty">Nenhum policial encontrado com o filtro informado.</p>';
    }

    function selectPolicialFromModal(policialId) {
      const p = efetivoList.find(item => item.id === policialId);
      if (!p) return;

      const postoSelect = document.getElementById('militar-posto');
      if (postoSelect) {
        const matchedOpt = Array.from(postoSelect.options).find(o => o.value === p.postoGraduacao);
        postoSelect.value = matchedOpt ? p.postoGraduacao : '';
      }

      document.getElementById('militar-nome').value = p.nome || '';
      document.getElementById('militar-re').value = p.matricula || '';
      document.getElementById('militar-idade').value = p.idade ?? '';

      const radioSexo = document.querySelector(`input[name="sexo"][value="${p.sexo}"]`);
      if (radioSexo) radioSexo.checked = true;

      onIdadeInput();
      checkLiveDuplicateWarning();
      closeEfetivoModal();
      showToast(`Dados de ${p.postoGraduacao} ${p.nome} enviados para os campos do TAF.`);
    }

    const FORM_ENTER_ORDER = [
      'militar-posto',
      'militar-nome',
      'militar-re',
      'militar-idade',
      'prova-braco',
      'prova-abdominal',
      'prova-corrida',
      'militar-obs'
    ];

    function isFieldVisuallyAvailable(el) {
      if (!el || el.disabled) return false;
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') return false;
      return el.offsetParent !== null || style.position === 'fixed';
    }

    function setupEnterFieldNavigation() {
      const form = document.getElementById('taf-form');
      if (!form) return;

      form.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') return;
        if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return;

        const target = event.target;
        if (!target || !target.id) return;

        const idx = FORM_ENTER_ORDER.indexOf(target.id);
        if (idx === -1) return;

        if (idx === FORM_ENTER_ORDER.length - 1) {
          return;
        }

        event.preventDefault();

        for (let i = idx + 1; i < FORM_ENTER_ORDER.length; i++) {
          const nextEl = document.getElementById(FORM_ENTER_ORDER[i]);
          if (isFieldVisuallyAvailable(nextEl)) {
            nextEl.focus();
            if (typeof nextEl.select === 'function' && nextEl.tagName === 'INPUT' && nextEl.type !== 'number') {
              nextEl.select();
            }
            break;
          }
        }
      });
    }

    function scrollToTopoAta() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

    function updateTopoAtaButton() {
      const btn = document.getElementById('btn-topo-ata');
      const ataView = document.getElementById('view-ata');
      if (!btn || !ataView) return;

      const isAtaActive = ataView.classList.contains('on');
      const shouldShow = isAtaActive && window.scrollY > 320;
      btn.classList.toggle('visivel', shouldShow);
    }

    window.addEventListener('scroll', updateTopoAtaButton, { passive: true });

    window.addEventListener('DOMContentLoaded', () => {
      ['militar-posto', 'militar-nome', 'militar-re'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', checkLiveDuplicateWarning);
          el.addEventListener('change', checkLiveDuplicateWarning);
        }
      });
      setupEnterFieldNavigation();
      loadEfetivoCache();
      loadAtaMeta();
      loadRecords();
      onProtocolOrAgeChange();
      onSituacaoTafChange();
      renderAll();
      renderReferenceTable();
      initFirebaseBackground();
    });

// ============================================================================

/**
     * ============================================================================
     * CALCULADORA INTEGRADA DE DISTÂNCIA DA CORRIDA (400m / 425m + VOLTAS)
     * ============================================================================
     */
    let calcVoltasMarcadas = 0;

    function openCorridaCalcModal() {
      const modal = document.getElementById('corrida-calc-modal');
      if (!modal) return;
      renderCalcVoltasGrid();
      recalculateCorridaCalc();
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      setTimeout(() => {
        const incEl = document.getElementById('calc-volta-incompleta');
        if (incEl) incEl.focus();
      }, 50);
    }

    function closeCorridaCalcModal() {
      const modal = document.getElementById('corrida-calc-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function handleCorridaCalcBackdropClick(event) {
      if (event.target && event.target.id === 'corrida-calc-modal') {
        closeCorridaCalcModal();
      }
    }

    function renderCalcVoltasGrid() {
      const grid = document.getElementById('calc-grid-voltas');
      if (!grid) return;
      grid.innerHTML = '';
      for (let i = 1; i <= 8; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        const isActive = i === calcVoltasMarcadas;
        btn.className = 'vb' + (isActive ? ' on' : '');
        btn.textContent = String(i);
        btn.onclick = () => {
          calcVoltasMarcadas = calcVoltasMarcadas === i ? 0 : i;
          renderCalcVoltasGrid();
          recalculateCorridaCalc();
        };
        grid.appendChild(btn);
      }
    }

    function getSelectedPistaMeters() {
      const checked = document.querySelector('input[name="calc-pista"]:checked');
      const val = checked ? parseInt(checked.value, 10) : 425;
      return Number.isFinite(val) ? val : 425;
    }

    function recalculateCorridaCalc() {
      const pista = getSelectedPistaMeters();
      const rawInc = parseInt(document.getElementById('calc-volta-incompleta')?.value, 10);
      const incompleta = Number.isFinite(rawInc) && rawInc > 0 ? rawInc : 0;
      const total = (calcVoltasMarcadas * pista) + incompleta;

      const totalEl = document.getElementById('calc-distancia-total');
      const formulaEl = document.getElementById('calc-formula-resumo');
      if (totalEl) totalEl.textContent = String(total);
      if (formulaEl) {
        formulaEl.textContent = `${calcVoltasMarcadas} volta(s) × ${pista}m${incompleta > 0 ? ` + ${incompleta}m` : ''} = ${total}m`;
      }
    }

    function resetCorridaCalc() {
      calcVoltasMarcadas = 0;
      const incEl = document.getElementById('calc-volta-incompleta');
      if (incEl) incEl.value = '';
      const p425 = document.getElementById('calc-pista-425');
      if (p425) p425.checked = true;
      renderCalcVoltasGrid();
      recalculateCorridaCalc();
    }

    function sendDistanciaToTafAndCopy() {
      const totalStr = document.getElementById('calc-distancia-total')?.textContent || '0';
      const totalNum = parseInt(totalStr, 10);
      const finalMeters = Number.isFinite(totalNum) ? totalNum : 0;

      const corridaInput = document.getElementById('prova-corrida');
      if (corridaInput) {
        corridaInput.value = String(finalMeters);
        recalculateLive();
      }

      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(String(finalMeters)).catch(() => {});
      }

      closeCorridaCalcModal();
      showToast(`Distância de ${finalMeters}m enviada para o campo 3. Corrida (m) e copiada.`);
    }
    function scrollToNaoAvaliados() {
      const target = document.getElementById('section-nao-avaliados');
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
