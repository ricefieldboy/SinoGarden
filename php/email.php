<?php
$first_name = $_POST['first-name'];
$last_name = $_POST['last-name'];
$email = $POST['email-address'];
$phone = $POST['phone-number'];
$comment = $_POST['comments'];

$email_from = 'billyk142@gmail.com';
$email_subject = "Message from $email ";
$email_body = "Name: $first_name. $last_name. \n".
    "Phone: $phone. \n".
    "Comment: \n $comment".;


$to = "billyk142@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($to, $email_subject, $email_body, $headers);

?>