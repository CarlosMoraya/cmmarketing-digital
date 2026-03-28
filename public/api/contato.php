<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Carrega o PHPMailer instalado via Composer
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));
    
    if (empty($data->name) || empty($data->email) || empty($data->phone)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Dados insuficientes"]);
        exit;
    }

    $leadName  = htmlspecialchars($data->name);
    $leadEmail = htmlspecialchars($data->email);
    $leadPhone = htmlspecialchars($data->phone);

    // Template HTML do e-mail
    $htmlBody = "
    <html><head><style>
      body { font-family: sans-serif; color: #333; }
      .box { border: 1px solid #ddd; border-radius: 6px; max-width: 580px; overflow: hidden; }
      .header { background: #1a1a1a; color: #fff; padding: 16px 20px; }
      .header h2 { margin: 0; font-size: 18px; }
      .content { padding: 24px 20px; background: #fafafa; }
      .field { margin-bottom: 12px; }
      .label { font-weight: bold; color: #555; display: block; font-size: 12px; text-transform: uppercase; }
      .value { font-size: 16px; color: #111; }
      .footer { font-size: 11px; color: #999; padding: 12px 20px; border-top: 1px solid #eee; }
    </style></head><body>
      <div class='box'>
        <div class='header'><h2>Novo Lead — CM Marketing</h2></div>
        <div class='content'>
          <div class='field'><span class='label'>Nome</span><span class='value'>{$leadName}</span></div>
          <div class='field'><span class='label'>E-mail</span><span class='value'>{$leadEmail}</span></div>
          <div class='field'><span class='label'>Telefone</span><span class='value'>{$leadPhone}</span></div>
        </div>
        <div class='footer'>Enviado automaticamente pelo site cmarketingegestao.com.br</div>
      </div>
    </body></html>";

    $mail = new PHPMailer(true);
    try {
        // Configuração SMTP — idêntica ao servidor Node.js
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contato@cmarketingegestao.com.br';
        $mail->Password   = '2j&f06~PSNI';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL na porta 465
        $mail->Port       = 465;
        $mail->CharSet    = 'UTF-8';

        // Remetente institucional
        $mail->setFrom('contato@cmarketingegestao.com.br', 'CM Marketing');
        
        // Destinatário (você)
        $mail->addAddress('contato@cmarketingegestao.com.br');
        
        // Reply-To aponta para o lead — clicar em "Responder" vai direto para ele
        $mail->addReplyTo($leadEmail, $leadName);

        // Assunto exibe o nome do lead (igual ao comportamento do Node.js local)
        $mail->Subject = "Novo Lead: {$leadName}";
        $mail->isHTML(true);
        $mail->Body    = $htmlBody;
        $mail->AltBody = "Nome: {$leadName}\nE-mail: {$leadEmail}\nTelefone: {$leadPhone}";

        $mail->send();
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "E-mail enviado com sucesso"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Erro no envio: " . $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Metodo nao permitido"]);
}
?>
