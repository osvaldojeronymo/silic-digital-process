import { Header } from "../components/Header";
import { FormularioPesquisa } from "../components/FormularioPesquisa";

export function SearchView(): HTMLElement {
  const div = document.createElement("div");
  div.className = "search-view";
  
  // Header
  div.appendChild(Header());
  
  // Container principal
  const main = document.createElement("main");
  main.className = "search-container";
  
  // Título principal
  const titleSection = document.createElement("section");
  titleSection.className = "search-title";
  titleSection.innerHTML = `
    <h1>SILIC 2.0 - Processos Digitais</h1>
    <p>Gerenciamento ágil, seguro e transparente de atos e documentos</p>
  `;
  
  main.appendChild(titleSection);
  
  // Formulário de pesquisa
  main.appendChild(FormularioPesquisa());
  
  // Área de resultados (inicialmente vazia)
  const resultsSection = document.createElement("section");
  resultsSection.className = "search-results-section";
  resultsSection.id = "search-results-section";
  resultsSection.style.display = "none"; // Oculto inicialmente
  
  main.appendChild(resultsSection);
  
  div.appendChild(main);
  
  return div;
}