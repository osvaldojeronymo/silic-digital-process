import "./styles/style.css";
import { HomeView } from "./views/home";
import { SearchView } from "./views/search";

const routes: Record<string, () => HTMLElement> = {
  "": SearchView,           // SearchView como rota padrão
  "#search": SearchView,    // Também acessível via #search  
  "#home": HomeView,        // HomeView agora é a tela de detalhes
};

function mount() {
  const app = document.getElementById("app")!;
  const key = location.hash as keyof typeof routes;
  const view = routes[key] ?? SearchView; // Fallback para SearchView
  app.innerHTML = "";
  app.appendChild(view());
}

window.addEventListener("hashchange", mount);
window.addEventListener("DOMContentLoaded", mount);
