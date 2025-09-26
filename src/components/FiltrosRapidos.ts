export function FiltrosRapidos(): HTMLElement {
  const section = document.createElement("section");
  section.className = "filtros-rapidos";
  
  section.innerHTML = `
    <h3>Filtros rápidos</h3>
    <div class="filtros-form">
      <div class="filtros-row">
        <div class="campo-grupo">
          <label>Data do protocolo</label>
          <div class="data-range">
            <input type="date" id="data-inicio" placeholder="dd/mm/aaaa">
            <span class="ate">até</span>
            <input type="date" id="data-fim" placeholder="dd/mm/aaaa">
          </div>
        </div>
        
        <div class="campo-grupo">
          <label>Ação</label>
          <select id="acao-select">
            <option value="todos">Todos</option>
            <option value="inclusao">Inclusão</option>
            <option value="alteracao">Alteração</option>
            <option value="alteracao-status">Alteração de status</option>
            <option value="exclusao">Exclusão</option>
          </select>
        </div>
        
        <div class="campo-grupo">
          <label>Classificação</label>
          <select id="classificacao-select">
            <option value="todos">Todos</option>
            <option value="publico">Público</option>
            <option value="externo-confidencial">Externo.Confidencial</option>
            <option value="interno-todos">Interno.Todos</option>
            <option value="interno-caixa">Interno.Caixa</option>
            <option value="interno-confidencial">Interno.Confidencial</option>
            <option value="externo-restrito">Externo.Restrito</option>
          </select>
        </div>
      </div>
      
      <div class="filtros-row">
        <div class="campo-grupo campo-largo">
          <label>Descrição do Objeto</label>
          <input type="text" id="descricao-objeto" placeholder="Buscar por palavras do objeto">
        </div>
      </div>
      
      <div class="filtros-acoes">
        <button type="button" class="btn btn-secondary" id="limpar-btn">Limpar</button>
        <button type="button" class="btn btn-primary" id="consultar-btn">Consultar</button>
        <button type="button" class="btn btn-warning" id="filtros-avancados-btn">Filtros avançados</button>
      </div>
    </div>
  `;
  
  return section;
}