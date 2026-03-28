# CM Marketing & Gestão - Contexto do Projeto

Este arquivo serve como base de conhecimento para agentes de IA que trabalham neste projeto.

## 📌 Visão Geral
O projeto é uma **landing page premium** para a agência **CM Marketing & Gestão**. A agência é focada em consultoria estratégica, design sofisticado e performance digital.

## 🚀 Tecnologias Utilizadas (Tech Stack)
- **Framework:** React 19 + Vite.
- **Estilização:** Tailwind CSS 4 (com plugin `@tailwindcss/vite`).
- **Animações:** Framer Motion (`motion/react`).
- **Ícones:** Lucide React.
- **IA:** Integração com Google Generative AI (`@google/genai`).
- **Infra (Hostinger):** Servidor Express (`server.js`) para servir a SPA e `.htaccess` para Apache.

## 🎨 Design & Estética
- **Estilo:** Minimalista, sofisticado e premium.
- **Paleta de Cores:**
  - `beige`: Tons claros (50 a 100) para fundos e realces (800-900).
  - `ink`: Tons escuros (900) para tipografia principal e botões.
- **Tipografia:** Uso de fontes serifadas para títulos e sans-serif para corpo de texto, garantindo legibilidade e elegância.

## 🏗️ Estrutura da Página
1.  **Navbar:** Menu fixo com efeito de transparência no scroll.
2.  **Hero:** Seção de impacto com CTA para diagnóstico estratégico.
3.  **Sobre:** Apresentação da agência e diferenciais.
4.  **Serviços:** Grid com os 7 pilares de atuação (Social Media, SEO, Tráfego, etc.).
5.  **Processo:** Metodologia de trabalho em 4 passos.
6.  **Resultados:** Seção de prova social com métricas.
7.  **Contato (CTA):** Formulário de captura de leads.
8.  **Footer:** Informações institucionais e links sociais.

## 📁 Estrutura de Arquivos Principal
- `/src/App.tsx`: Contém todo o layout e componentes da página principal.
- `/src/index.css`: Definições globais de estilos (Tailwind).
- `/vite.config.ts`: Configuração do ambiente, incluindo aliases e plugins.

## 🛠️ Guia de Desenvolvimento
- O servidor de desenvolvimento roda na porta `3000`.
- Use componentes funcionais do React.
- Priorize a estética "WOW" conforme as instruções do sistema.

## 📅 Estado Atual (28/03/2026)
- **Atividade Principal:** Ajuste de proporção da logo (Redução para 80%).
- **Status:** Logo ajustada para escala harmoniosa (`h-16` em desktop) e código finalizado.

## 📋 Histórico de Atividades
- [28/03/26] Entendimento da estrutura de arquivos e stack tecnológica.
- [28/03/26] Criação da documentação inicial e unificação no `agent.md`. Exclusão do `Gemini.md`.
- [28/03/26] Substituição inicial da logo para o uso de imagem local (`logo.png`).
- [28/03/26] Reestruturamento completo do componente de Logo em `App.tsx` para um SVG fiel à identidade visual (com os traços unidos do ícone CM) acompanhado do texto "MARKETING E GESTÃO" empilhado perfeitamente à direita, sem o fundo branco problemático da imagem original de anexo.
- [28/03/26] Ajuste refinado das proporções da logo SVG e da tipografia para 80% do tamanho anterior para maior elegância no layout.
- [28/03/26] Inicialização do repositório Git e primeiro commit/push para GitHub.
- [28/03/26] Preparo para Hostinger: Geração de build estático (`npm run build`), criação de `.htaccess` para suporte de SPAs em Apache, implementação de `server.js` (Express) e configuração do script `start` no `package.json` para compatibilidade total com o ambiente Node.js da Hostinger.
- [28/03/26] Correção de sintaxe no `package.json` para evitar erros de deployment.
