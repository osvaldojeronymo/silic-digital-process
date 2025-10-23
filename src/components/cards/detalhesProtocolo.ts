export function DetalhesProtocoloCard(data: any): HTMLElement {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="hd">Detalhes</div>
    <div class="bd">
      <div><strong>Valor:</strong> <span>${data?.valor || 'N/A'}</span></div>
      <div><strong>Situação do protocolo da contratação:</strong> <span>${data?.situacao || 'N/A'}</span></div>
      <div><strong>Modalidade:</strong> <span>${data?.modalidade || 'N/A'}</span></div>
      <div><strong>Subgrupo:</strong> <span>${data?.modalidadeSubgrupo || 'N/A'}</span></div>
      <div><strong>Gestor demandante:</strong> <span>${data?.gestor || 'N/A'}</span></div>
      <div><strong>Equipe remota:</strong> <span>${data?.equipeRemota || 'N/A'}</span></div>
    </div>
  `;
  return card;
}