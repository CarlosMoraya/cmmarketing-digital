<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# CM Marketing & Gestão

Este é o site oficial da agência CM Marketing & Gestão, construído com React, Vite e Tailwind CSS.

## 🚀 Como hospedar na Hostinger

1. **Gere os arquivos de produção:**
   Execute o comando `npm run build`. Isso criará uma pasta chamada `dist`.

2. **Suba para o servidor:**
   Você pode subir os arquivos de duas formas:
   - **Via Gerenciador de Arquivos:** Compacte o conteúdo da pasta `dist` em um arquivo `.zip` e faça o upload para a pasta `public_html` no painel da Hostinger. Descompacte lá dentro.
   - **GitHub Integration:** No painel da Hostinger, selecione o repositório git. Note que a Hostinger buscará pelos arquivos estáticos. Se não houver compilação automática no servidor, você precisará subir a pasta `dist` (descomente `/dist` do seu `.gitignore` se optar por este caminho).

3. **Configurações Adicionais:**
   O arquivo `.htaccess` na pasta `public` já foi preparado para garantir que todos os redirecionamentos de página funcionem corretamente no servidor Apache da Hostinger.

View your app in AI Studio: https://ai.studio/apps/3bf178fc-75cf-4937-9c05-6d8ed6544c7c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
