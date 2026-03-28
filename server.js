import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Porta padrão do Hostinger costuma ser passada via variável de ambiente, senão usa a 3000
const PORT = process.env.PORT || 3000;

// Permite que o express entenda JSON no corpo das requisições
app.use(express.json());

// Serve os arquivos estáticos da pasta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Rota para o formulário de contato
app.post('/api/contato', async (req, res) => {
  const { name, email, phone, subject } = req.body;

  // Configuração do transportador do e-mail (SMTP)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true para porta 465, false para outras
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Remetente é o sistema, com o nome do usuário
      to: "contato@cmarketingegestao.com.br", // Destinatário fixo
      replyTo: email, // Resposta direta para o e-mail do lead
      subject: subject || "Novo Lead: Diagnóstico CM Marketing",
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nSolicitação de Diagnóstico via Website.`,
      html: `
        <div style="font-family: sans-serif; color: #1a202c; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #2d3748; border-bottom: 2px solid #edf2f7; padding-bottom: 10px;">Novo Lead Capturado</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <hr style="border: none; border-top: 1px solid #edf2f7; margin: 20px 0;">
          <small style="color: #a0aec0;">Enviado automaticamente pelo formulário do site.</small>
        </div>
      `,
    });

    console.log("Mensagem enviada: %s", info.messageId);
    res.status(200).json({ success: true, message: "E-mail enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ success: false, message: "Erro interno ao enviar e-mail" });
  }
});

// Lida com roteamento do React (SPA) - redireciona qualquer rota para o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

