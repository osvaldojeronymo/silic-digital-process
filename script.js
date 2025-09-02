function voltarAoPortal() {
  window.location.href = "https://osvaldojeronymo.github.io/silic-portal-imoveis/";
}

// Mock de dados para Instrumentos Contratuais
const contratosData = [
  {
    numero: 'IC-2025-001',
    fornecedor: 'Fornecedor A',
    tipo: 'Contrato',
    filial: 'Filial 1',
    responsavelFormal: 'João Silva',
    gestorOperacional: 'Maria Souza',
    vigencia: '01/01/2025 a 31/12/2025',
    situacao: 'Vigente',
    descricaoObjeto: 'Serviços de manutenção predial',
    valorGlobal: 'R$ 100.000,00'
  },
  {
    numero: 'IC-2025-002',
    fornecedor: 'Fornecedor B',
    tipo: 'Aditivo',
    filial: 'Filial 2',
    responsavelFormal: 'Carlos Lima',
    gestorOperacional: 'Ana Costa',
    vigencia: '15/02/2025 a 14/02/2026',
    situacao: 'Em análise',
    descricaoObjeto: 'Fornecimento de equipamentos',
    valorGlobal: 'R$ 250.000,00'
  }
];

// Função para renderizar tabela de Instrumentos Contratuais
function renderContratosTable() {
  const tbody = document.getElementById('contratos');
  if (!tbody) return;
  tbody.innerHTML = '';
  contratosData.forEach(contrato => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${contrato.numero}</td>
      <td>${contrato.fornecedor}</td>
      <td>${contrato.tipo}</td>
      <td>${contrato.filial}</td>
      <td>${contrato.responsavelFormal}</td>
      <td>${contrato.gestorOperacional}</td>
      <td>${contrato.vigencia}</td>
      <td>${contrato.situacao}</td>
      <td>${contrato.descricaoObjeto}</td>
      <td>${contrato.valorGlobal}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Chamar função ao carregar página
window.addEventListener('DOMContentLoaded', () => {
  renderContratosTable();
});
