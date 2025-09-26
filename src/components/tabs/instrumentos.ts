export function InstrumentosTab(): HTMLElement {
  const tab = document.createElement("div");
  tab.className = "tab-content instrumentos-tab";
  tab.innerHTML = `
    <h3>Instrumentos Contratuais</h3>
    <div class="instruments-list">
      <div class="instrument-item">
        <span class="instrument-type">Contrato</span>
        <span class="instrument-number">Nº 001/2025</span>
        <span class="instrument-date">20/09/2025</span>
        <button class="btn btn-sm">Visualizar</button>
      </div>
      <div class="instrument-item">
        <span class="instrument-type">Termo Aditivo</span>
        <span class="instrument-number">Nº 001/2025 - 1º Aditivo</span>
        <span class="instrument-date">22/09/2025</span>
        <button class="btn btn-sm">Visualizar</button>
      </div>
    </div>
  `;
  return tab;
}