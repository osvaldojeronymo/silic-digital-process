export function DocumentosTab(): HTMLElement {
  const tab = document.createElement("div");
  tab.className = "tab-content documentos-tab";
  tab.innerHTML = `
    <h3>Documentos</h3>
    <div class="documents-list">
      <div class="document-item">
        <span class="document-name">Termo de Referência</span>
        <span class="document-date">25/09/2025</span>
        <button class="btn btn-sm">Download</button>
      </div>
      <div class="document-item">
        <span class="document-name">Edital</span>
        <span class="document-date">24/09/2025</span>
        <button class="btn btn-sm">Download</button>
      </div>
    </div>
  `;
  return tab;
}