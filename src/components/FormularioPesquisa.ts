export function FormularioPesquisa(): HTMLElement {
  const form = document.createElement("div");
  form.className = "search-form-container";
  
  form.innerHTML = `
    <div class="search-form card">
      <div class="hd">Pesquise processo digital por:</div>
      <div class="bd">
        <form class="search-form-grid" id="search-form">
          <div class="form-group">
            <label for="numeroProcesso">Número do Processo</label>
            <input 
              type="text" 
              id="numeroProcesso" 
              name="numeroProcesso" 
              placeholder="Ex: 2103/2024"
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="numeroLicitacao">Número da Licitação</label>
            <input 
              type="text" 
              id="numeroLicitacao" 
              name="numeroLicitacao" 
              placeholder="Ex: 1234/2025"
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="numeroContrato">Número do Contrato</label>
            <input 
              type="text" 
              id="numeroContrato" 
              name="numeroContrato" 
              placeholder="Ex: 00746/2025"
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="nomeFornecedor">Nome do Fornecedor</label>
            <input 
              type="text" 
              id="nomeFornecedor" 
              name="nomeFornecedor" 
              placeholder="Ex: Empresa de Tecnologia LTDA"
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="cpfCnpjFornecedor">CPF/CNPJ do Fornecedor</label>
            <input 
              type="text" 
              id="cpfCnpjFornecedor" 
              name="cpfCnpjFornecedor" 
              placeholder="Ex: 12.345.678/0001-90"
              class="form-input"
            >
          </div>
          
          <div class="form-group form-group-wide">
            <label for="objeto">Objeto</label>
            <input 
              type="text" 
              id="objeto" 
              name="objeto" 
              placeholder="Ex: Contratação de serviços de tecnologia"
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="numeroProcessoDigital">Número do Processo Digital</label>
            <input 
              type="text" 
              id="numeroProcessoDigital" 
              name="numeroProcessoDigital" 
              placeholder="Ex: PD-2024-001234"
              class="form-input"
            >
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn btn-ghost" id="limpar-form">
              Limpar
            </button>
            <button type="submit" class="btn btn-primary" id="pesquisar-btn">
              🔍 Pesquisar
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
  
  // Event listeners
  setTimeout(() => {
    const searchForm = document.getElementById("search-form");
    const limparBtn = document.getElementById("limpar-form");
    
    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        realizarPesquisa();
      });
    }
    
    if (limparBtn) {
      limparBtn.addEventListener("click", () => {
        limparFormulario();
      });
    }
  }, 0);
  
  return form;
}

function realizarPesquisa() {
  // Coletar dados do formulário
  const formData = new FormData(document.getElementById("search-form") as HTMLFormElement);
  const searchParams: any = {};
  
  // Converter FormData para objeto
  for (const [key, value] of formData.entries()) {
    if (value && typeof value === 'string' && value.trim()) {
      searchParams[key] = value.trim();
    }
  }
  
  // Verificar se pelo menos um campo foi preenchido
  if (Object.keys(searchParams).length === 0) {
    alert("Por favor, preencha pelo menos um campo para pesquisar.");
    return;
  }
  
  console.log("Parâmetros de pesquisa:", searchParams);
  
  // Simular resultados de pesquisa
  mostrarResultados(searchParams);
}

function mostrarResultados(searchParams: any) {
  const resultsSection = document.getElementById("search-results-section");
  
  if (resultsSection) {
    // Importar TabelaResultados dinamicamente
    import("./TabelaResultados").then(({ TabelaResultados }) => {
      resultsSection.innerHTML = "";
      resultsSection.appendChild(TabelaResultados(searchParams));
      resultsSection.style.display = "block";
      
      // Scroll suave para os resultados
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function limparFormulario() {
  const form = document.getElementById("search-form") as HTMLFormElement;
  if (form) {
    form.reset();
  }
  
  // Ocultar resultados
  const resultsSection = document.getElementById("search-results-section");
  if (resultsSection) {
    resultsSection.style.display = "none";
  }
}