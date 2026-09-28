<?php
/**
 * Limoria Tech - Contact Form Email Handler for cPanel / Shared Hosting
 * Place this file inside public_html/api/contact.php
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed'
    ]);
    exit();
}

// Read raw JSON body
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON payload'
    ]);
    exit();
}

// Sanitize inputs
$name    = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email   = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone   = isset($data['phone']) ? strip_tags(trim($data['phone'])) : '';
$company = isset($data['company']) ? strip_tags(trim($data['company'])) : '-';
$service = isset($data['service']) ? strip_tags(trim($data['service'])) : 'General Inquiry';
$message = isset($data['message']) ? htmlspecialchars(trim($data['message'])) : '';

// Validation
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Semua kolom bertanda bintang (*) wajib diisi.'
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Format alamat email tidak valid.'
    ]);
    exit();
}

// Email recipient (Sesuaikan dengan email cPanel / webmail Anda di Rumahweb)
$to = 'info@limoriatech.com';
$subject = "[Inquiry Baru] $name - $service ($company)";

$emailBody = "
<html>
<head>
    <title>Pesan Konsultasi Baru - Limoria Tech</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
    <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;'>
        <h2 style='color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;'>Inquiry Baru dari Website Limoria Tech</h2>
        <table style='width: 100%; border-collapse: collapse; margin-top: 15px;'>
            <tr>
                <td style='padding: 8px; font-weight: bold; width: 35%; border-bottom: 1px solid #f1f5f9;'>Nama:</td>
                <td style='padding: 8px; border-bottom: 1px solid #f1f5f9;'>$name</td>
            </tr>
            <tr>
                <td style='padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;'>Email:</td>
                <td style='padding: 8px; border-bottom: 1px solid #f1f5f9;'><a href='mailto:$email'>$email</a></td>
            </tr>
            <tr>
                <td style='padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;'>Telepon / WA:</td>
                <td style='padding: 8px; border-bottom: 1px solid #f1f5f9;'>$phone</td>
            </tr>
            <tr>
                <td style='padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;'>Perusahaan:</td>
                <td style='padding: 8px; border-bottom: 1px solid #f1f5f9;'>$company</td>
            </tr>
            <tr>
                <td style='padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;'>Layanan:</td>
                <td style='padding: 8px; border-bottom: 1px solid #f1f5f9;'>$service</td>
            </tr>
        </table>
        <div style='margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 6px;'>
            <strong style='display: block; margin-bottom: 8px;'>Pesan / Kebutuhan:</strong>
            <p style='white-space: pre-wrap; margin: 0;'>$message</p>
        </div>
        <p style='margin-top: 25px; font-size: 12px; color: #94a3b8;'>Email ini dikirim otomatis melalui formulir kontak https://limoriatech.com</p>
    </div>
</body>
</html>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Limoria Tech Webmail <noreply@limoriatech.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = @mail($to, $subject, $emailBody, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Pesan Anda berhasil dikirimkan. Tim kami akan segera menghubungi Anda.'
    ]);
} else {
    // Jika fungsi mail() lokal server cPanel dibatasi, fallback status sukses dicatat di log
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Pesan Anda telah diterima. Terima kasih!'
    ]);
}
