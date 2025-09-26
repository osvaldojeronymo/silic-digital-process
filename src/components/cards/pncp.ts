export function PncpCard(data: any): HTMLElement {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="hd">PNCP</div>
    <div class="bd">
      <div><strong>Id contratação PNCP:</strong> <span class="pncp-id">${data?.idContratacaoPncp || 'N/A'}</span></div>
      <div><strong>Id ata PNCP:</strong> <span class="pncp-id">${data?.idAtaPncp || 'N/A'}</span></div>
      <div><strong>Id contrato PNCP:</strong> <span class="pncp-id">${data?.idContratoPncp || 'N/A'}</span></div>
      <div><strong>Data de divulgação no PNCP:</strong> <span>${data?.dataDivulgacao || '02/07/2025'}</span></div>
      <div><strong>Situação:</strong> <span>${data?.situacao || 'Divulgada no PNCP'}</span></div>
    </div>
  `;
  return card;
}