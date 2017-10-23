<?php
require_once('email_config.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->SMTPDebug = 3;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication

//Form
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = $visitor_email;  // sender's email address (shows in "From" field)
$mail->FromName = $name;   // sender's name (shows in "From" field)
$mail->addAddress('vbaghdas@gmail.com', 'First Recipient');  // Add a recipient
$mail->addReplyTo($visitor_email);                          // Add a reply-to address

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Re: Portfolio Contact Form';
$mail->Body    = $message;
$mail->AltBody = $message;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>