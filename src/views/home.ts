import { Header } from "../components/Header";
import { IdentificacaoCard } from "../components/cards/identificacao";
import { DetalhesProtocoloCard } from "../components/cards/detalhesProtocolo";
import { PncpCard } from "../components/cards/pncp";
import { FiltrosRapidos } from "../components/FiltrosRapidos";
import { Informacoes } from "../components/Informacoes";

export function HomeView(): HTMLElement {
  const div = document.createElement("div");
  div.className = "home-view";
  
  // Dados mockados atualizados com os novos campos
  const identificacaoData = {
    protocolo: "64202",
    dataProtocolo: "04/02/2025",
    numeroProcesso: "2103/2024",
    numeroLicitacao: "1234/2025",
    numeroContrato: "00746/2025",
    fornecedor: "12.345.678/0001-90 - Empresa de Tecnologia LTDA",
    objeto: "Contratação de serviços de tecnologia da informação para suporte ao SILIC 2.0"
  };
  
  const detalhesData = {
    valor: "R$ 2.460.000,00",
    situacao: "Contratada",
    modalidade: "Dispensa de Licitação",
    modalidadeSubgrupo: "Locação",
    classificacaoInformacao: "Pública",
    gestor: "7074 - CELOG",
    equipeRemota: "CECOT05 - Imóveis"
  };
  
  const pncpData = {
    idContratacaoPncp: "18260505000150-1-000114/2025",
    idAtaPncp: "45318995000171-1-000163/2025-000001",
    idContratoPncp: "46374500000194-2-011796/2025",
    dataDivulgacao: "02/07/2025",
    situacao: "Divulgada no PNCP"
  };
  
  // Header
  div.appendChild(Header());
  
  // Container principal
  const main = document.createElement("main");
  main.className = "shell";
  
  // Cards de informações
  const processHeader = document.createElement("section");
  processHeader.className = "process-header";
  
  processHeader.appendChild(IdentificacaoCard(identificacaoData));
  processHeader.appendChild(DetalhesProtocoloCard(detalhesData));
  processHeader.appendChild(PncpCard(pncpData));
  
  main.appendChild(processHeader);
  
  // Filtros rápidos
  main.appendChild(FiltrosRapidos());
  
  // Informações
  main.appendChild(Informacoes());
  
  div.appendChild(main);
  
  return div;
}