<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));
    
    if (empty($data->name) || empty($data->email) || empty($data->phone)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Dados insuficientes"]);
        exit;
    }

    $to = "contato@cmarketingegestao.com.br";
    $subject = isset($data->subject) ? $data->subject : "Novo Lead: Diagnóstico CM Marketing";
    
    // Montagem do corpo do e-mail de forma limpa
    $message = "Novo Lead Capturado pelo Site\n";
    $message .= "=============================\n\n";
    $message .= "Nome: " . $data->name . "\n";
    $message .= "E-mail do Lead: " . $data->email . "\n";
    $message .= "Telefone: " . $data->phone . "\n\n";
    $message .= "=============================\n";
    $message .= "Enviado via Website CM Marketing.";
    
    // IMPORTANTE: O remetente (From) DEVE ser o e-mail do próprio domínio para a Hostinger entregar.
    $from = "contato@cmarketingegestao.com.br";
    
    $headers = "From: CM Marketing <" . $from . ">\r\n";
    $headers .= "Reply-To: " . $data->email . "\r\n"; // Permite que você clique em responder e vá para o cliente
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "E-mail enviado com sucesso"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Erro ao processar envio pelo servidor."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Metodo nao permitido"]);
}
?>
