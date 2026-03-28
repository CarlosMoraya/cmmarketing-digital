import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Porta padrão do Hostinger costuma ser passada via variável de ambiente, senão usa a 3000
const PORT = process.env.PORT || 3000;

// Serve os arquivos estáticos da pasta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Lida com roteamento do React (SPA) - redireciona qualquer rota para o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
