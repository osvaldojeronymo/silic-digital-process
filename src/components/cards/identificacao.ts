export function IdentificacaoCard(data: any): HTMLElement {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="hd">Identificação</div>
    <div class="bd">
      <div><strong>Protocolo:</strong> <span>${data?.protocolo || 'N/A'}</span></div>
      <div><strong>Data do protocolo:</strong> <span>${data?.dataProtocolo || 'N/A'}</span></div>
      <div><strong>Nº do processo:</strong> <span>${data?.numeroProcesso || 'N/A'}</span></div>
      <div><strong>Nº da licitação:</strong> <span>${data?.numeroLicitacao || 'N/A'}</span></div>
      <div><strong>Nº do contrato:</strong> <span>${data?.numeroContrato || 'N/A'}</span></div>
      <div><strong>CPF/CNPJ - Nome do fornecedor:</strong> <span>${data?.fornecedor || 'N/A'}</span></div>
      <div><strong>Objeto:</strong> <span>${data?.objeto || 'N/A'}</span></div>
    </div>
  `;
  return card;
}