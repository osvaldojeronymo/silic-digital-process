// Dados mock para simular resultados de pesquisa
const processosMock = [
  {
    id: "1",
    protocolo: "64202",
    numeroProcesso: "2103/2024",
    numeroLicitacao: "1234/2025",
    numeroContrato: "00746/2025",
    fornecedor: "Empresa de Tecnologia LTDA",
    cpfCnpj: "12.345.678/0001-90",
    objeto: "Contratação de serviços de tecnologia da informação para suporte ao SILIC 2.0",
    numeroProcessoDigital: "PD-2024-001234",
    situacao: "Contratada",
    valor: "R$ 2.460.000,00"
  },
  {
    id: "2",
    protocolo: "64203",
    numeroProcesso: "2104/2024",
    numeroLicitacao: "1235/2025",
    numeroContrato: "00747/2025",
    fornecedor: "Soluções Digitais S.A.",
    cpfCnpj: "98.765.432/0001-10",
    objeto: "Manutenção e suporte de sistemas de gestão",
    numeroProcessoDigital: "PD-2024-001235",
    situacao: "Em andamento",
    valor: "R$ 850.000,00"
  },
  {
    id: "3",
    protocolo: "64204",
    numeroProcesso: "2105/2024", 
    numeroLicitacao: "1236/2025",
    numeroContrato: "00748/2025",
    fornecedor: "Inovação Tech LTDA",
    cpfCnpj: "11.222.333/0001-44",
    objeto: "Desenvolvimento de aplicativo mobile",
    numeroProcessoDigital: "PD-2024-001236",
    situacao: "Licitação",
    valor: "R$ 1.200.000,00"
  },
  {
    id: "4",
    protocolo: "64205",
    numeroProcesso: "2106/2024",
    numeroLicitacao: "1237/2025", 
    numeroContrato: "00749/2025",
    fornecedor: "Consultoria Especializada ME",
    cpfCnpj: "55.666.777/0001-88",
    objeto: "Consultoria em transformação digital",
    numeroProcessoDigital: "PD-2024-001237",
    situacao: "Finalizada",
    valor: "R$ 750.000,00"
  }
];

export function TabelaResultados(searchParams: any): HTMLElement {
  const container = document.createElement("div");
  container.className = "results-container";
  
  // Filtrar resultados baseado nos parâmetros de pesquisa
  const resultados = filtrarProcessos(searchParams);
  
  container.innerHTML = `
    <div class="results-header">
      <h2>Resultados da Pesquisa</h2>
      <p>Encontrados <strong>${resultados.length}</strong> processo(s)</p>
    </div>
    
    <div class="results-table-container">
      <table class="results-table">
        <thead>
          <tr>
            <th>Protocolo</th>
            <th>Nº Processo</th>
            <th>Fornecedor</th>
            <th>Objeto</th>
            <th>Situação</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          ${resultados.map(processo => `
            <tr>
              <td><strong>${processo.protocolo}</strong></td>
              <td>${processo.numeroProcesso}</td>
              <td>
                <div class="fornecedor-info">
                  <div class="fornecedor-nome">${processo.fornecedor}</div>
                  <div class="fornecedor-cnpj">${processo.cpfCnpj}</div>
                </div>
              </td>
              <td>
                <div class="objeto-info" title="${processo.objeto}">
                  ${truncateText(processo.objeto, 60)}
                </div>
              </td>
              <td>
                <span class="situacao-badge ${getSituacaoClass(processo.situacao)}">
                  ${processo.situacao}
                </span>
              </td>
              <td class="valor-info">${processo.valor}</td>
              <td>
                <button 
                  class="btn btn-primary btn-sm"
                  onclick="navegarParaDetalhes('${processo.id}')"
                >
                  Ver Detalhes
                </button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    
    ${resultados.length === 0 ? `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>Nenhum processo encontrado</h3>
        <p>Tente ajustar os critérios de pesquisa.</p>
      </div>
    ` : ""}
  `;
  
  return container;
}

function filtrarProcessos(searchParams: any): any[] {
  if (!searchParams || Object.keys(searchParams).length === 0) {
    return processosMock; // Retorna todos se não há filtros
  }
  
  return processosMock.filter(processo => {
    return Object.entries(searchParams).some(([key, value]: [string, any]) => {
      const searchValue = value.toLowerCase();
      
      switch (key) {
        case "numeroProcesso":
          return processo.numeroProcesso.toLowerCase().includes(searchValue);
        case "numeroLicitacao":
          return processo.numeroLicitacao.toLowerCase().includes(searchValue);
        case "numeroContrato":
          return processo.numeroContrato.toLowerCase().includes(searchValue);
        case "nomeFornecedor":
          return processo.fornecedor.toLowerCase().includes(searchValue);
        case "cpfCnpjFornecedor":
          return processo.cpfCnpj.toLowerCase().includes(searchValue);
        case "objeto":
          return processo.objeto.toLowerCase().includes(searchValue);
        case "numeroProcessoDigital":
          return processo.numeroProcessoDigital.toLowerCase().includes(searchValue);
        default:
          return false;
      }
    });
  });
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

function getSituacaoClass(situacao: string): string {
  switch (situacao.toLowerCase()) {
    case "contratada":
    case "finalizada":
      return "situacao-success";
    case "em andamento":
      return "situacao-warning";
    case "licitação":
      return "situacao-info";
    default:
      return "situacao-neutral";
  }
}

// Função global para navegação (será acessada pelo onclick)
declare global {
  interface Window {
    navegarParaDetalhes: (processoId: string) => void;
  }
}

window.navegarParaDetalhes = function(processoId: string) {
  console.log("Navegando para detalhes do processo:", processoId);
  // Mudar hash para home (tela de detalhes)
  window.location.hash = "#home";
};