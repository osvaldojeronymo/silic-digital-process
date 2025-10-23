export function Informacoes(): HTMLElement {
  const section = document.createElement("section");
  section.className = "informacoes";
  
  // Simular quantidades (em um cenário real, viriam da API)
  const quantidades = {
    documentos: 1247,
    instrumentos: 15,
    fornecedores: 3
  };
  
  section.innerHTML = `
    <h3>Informações</h3>
    
    <!-- Seção de KPIs/Quantidades -->
    <div class="info-kpis">
      <div class="kpi-card">
        <div class="kpi-number">${quantidades.documentos.toLocaleString()}</div>
        <div class="kpi-label">Documentos</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-number">${quantidades.instrumentos}</div>
        <div class="kpi-label">Instrumentos</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-number">${quantidades.fornecedores}</div>
        <div class="kpi-label">Fornecedores</div>
      </div>
    </div>
    
    <div class="informacoes-container">
      <div class="tabs-header">
        <button class="tab active" data-tab="documentos">Documentos (${quantidades.documentos.toLocaleString()})</button>
        <button class="tab" data-tab="instrumentos">Instrumentos (${quantidades.instrumentos})</button>
      </div>
      
      <div class="tabs-content">
        <div class="tab-panel active" id="documentos">
          <div class="table-controls">
            <div class="search-bar">
              <input type="text" placeholder="Pesquisar por nome, descrição, módulo ou tipo" class="search-input">
            </div>
            <div class="table-actions">
              <select id="linhas-select">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          
          <div class="table-container">
            <table class="informacoes-table">
              <thead>
                <tr>
                  <th>Data/Hora</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                  <th>Módulo</th>
                  <th>Protocolo</th>
                  <th>Rótulo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody id="documentos-tbody">
                <!-- Dados serão inseridos dinamicamente -->
              </tbody>
            </table>
          </div>
          
          <div class="pagination">
            <button class="btn btn-secondary" id="pagina-anterior">Anterior</button>
            <span class="pagination-info">Página 1</span>
            <button class="btn btn-secondary" id="proxima-pagina">Próxima</button>
            <span class="pagination-total">1 Topo</span>
          </div>
        </div>
        
        <div class="tab-panel" id="instrumentos">
          <div class="table-controls">
            <div class="search-bar">
              <input type="text" placeholder="Pesquisar instrumentos contratuais" class="search-input">
            </div>
            <div class="table-actions">
              <select id="linhas-instrumentos-select">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          
          <div class="table-container">
            <table class="informacoes-table">
              <thead>
                <tr>
                  <th>Nº Instr. Contratual</th>
                  <th>Fornecedor</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody id="instrumentos-tbody">
                <!-- Dados serão inseridos dinamicamente -->
              </tbody>
            </table>
          </div>
          
          <div class="pagination">
            <button class="btn btn-secondary" id="pagina-anterior-instr">Anterior</button>
            <span class="pagination-info">Página 1</span>
            <button class="btn btn-secondary" id="proxima-pagina-instr">Próxima</button>
            <span class="pagination-total">1 Topo</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Adicionar funcionalidade das tabs
  setTimeout(() => {
    const tabs = section.querySelectorAll('.tab');
    const tabPanels = section.querySelectorAll('.tab-panel');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and panels
        tabs.forEach(t => t.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        const targetPanel = section.querySelector(`#${targetTab}`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
    
    // Carregar dados mockados para as tabelas
    carregarDadosDocumentos();
    carregarDadosInstrumentos();
  }, 0);
  
  function carregarDadosDocumentos() {
    const tbody = section.querySelector('#documentos-tbody');
    if (!tbody) return;
    
    const dadosMock = [
      {
        dataHora: '26/09/2025 12:30',
        tipo: 'Documento',
        descricao: 'Termo de Referência - Versão Final',
        modulo: 'Contratação',
        protocolo: '64202',
        rotulo: 'Público'
      },
      {
        dataHora: '25/09/2025 14:15',
        tipo: 'Contrato',
        descricao: 'Contrato de Prestação de Serviços',
        modulo: 'Gestão Formal',
        protocolo: '64215',
        rotulo: 'Interno.Confidencial'
      },
      {
        dataHora: '24/09/2025 09:45',
        tipo: 'Edital',
        descricao: 'Edital de Licitação - Processo 2103/2024',
        modulo: 'Contratação',
        protocolo: '64202',
        rotulo: 'Público'
      },
      {
        dataHora: '23/09/2025 16:20',
        tipo: 'Ata',
        descricao: 'Ata de Reunião - Definições Técnicas',
        modulo: 'Gestão Formal',
        protocolo: '64220',
        rotulo: 'Interno.Todos'
      },
      {
        dataHora: '22/09/2025 11:35',
        tipo: 'Relatório',
        descricao: 'Relatório de Análise Financeira',
        modulo: 'Contratação',
        protocolo: '64202',
        rotulo: 'Interno.Caixa'
      },
      {
        dataHora: '21/09/2025 08:10',
        tipo: 'Parecer',
        descricao: 'Parecer Jurídico - Cláusulas Contratuais',
        modulo: 'Gestão Formal',
        protocolo: '64225',
        rotulo: 'Externo.Confidencial'
      }
    ];
    
    tbody.innerHTML = dadosMock.map(item => {
      const downloadButton = `<button class="btn btn-sm btn-link">Download</button>`;
      
      return `
        <tr>
          <td>${item.dataHora}</td>
          <td>${item.tipo}</td>
          <td>${item.descricao}</td>
          <td>${item.modulo}</td>
          <td>${item.protocolo}</td>
          <td>${item.rotulo}</td>
          <td>${downloadButton}</td>
        </tr>
      `;
    }).join('');
  }
  
  function carregarDadosInstrumentos() {
    const tbody = section.querySelector('#instrumentos-tbody');
    if (!tbody) return;
    
    const dadosMock = [
      {
        numero: '0001/2025',
        fornecedor: 'Empresa de Tecnologia LTDA',
        tipo: 'Contrato',
        vigencia: '01/01/2025 a 31/12/2025',
        situacao: 'Vigente',
        descricaoObjeto: 'Serviços de tecnologia da informação para suporte ao SILIC 2.0',
        valorOriginal: 'R$ 2.460.000,00'
      },
      {
        numero: '0002/2025',
        fornecedor: 'Consultoria Especializada S/A',
        tipo: 'Aditivo',
        vigencia: '15/02/2025 a 14/02/2026',
        situacao: 'Em análise',
        descricaoObjeto: 'Fornecimento de equipamentos de informática',
        valorOriginal: 'R$ 150.000,00'
      },
      {
        numero: '0158/2024',
        fornecedor: 'Serviços Gerais EIRELI',
        tipo: 'Contrato',
        vigencia: '10/12/2024 a 09/12/2025',
        situacao: 'Vigente',
        descricaoObjeto: 'Serviços de limpeza e conservação predial',
        valorOriginal: 'R$ 85.000,00'
      },
      {
        numero: '0003/2025',
        fornecedor: 'Imobiliária Central LTDA',
        tipo: 'Contrato',
        vigencia: '01/03/2025 a 28/02/2026',
        situacao: 'Vigente',
        descricaoObjeto: 'Locação de imóveis para agências bancárias',
        valorOriginal: 'R$ 1.200.000,00'
      },
      {
        numero: '0045/2024',
        fornecedor: 'Manutenção Predial S/A',
        tipo: 'Aditivo',
        vigencia: '15/06/2024 a 14/06/2025',
        situacao: 'Encerrado',
        descricaoObjeto: 'Manutenção de sistemas de ar condicionado',
        valorOriginal: 'R$ 75.000,00'
      }
    ];
    
    tbody.innerHTML = dadosMock.map(item => `
      <tr>
        <td><a href="#" class="btn-link" onclick="event.preventDefault(); alert('Ficha do Instrumento contratual');">${item.numero}</a></td>
        <td>${item.fornecedor}</td>
        <td>${item.tipo}</td>
      </tr>
    `).join('');
  }
  
  return section;
}