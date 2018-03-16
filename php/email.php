<?php


$first_name = isset($_POST['first-name']) ? $_POST['first-name'] : '';
$last_name = isset($_POST['last-name']) ? $_POST['last-name'] : '';
$email = isset($_POST['email-address']) ? $_POST['email-address'] : '';
$phone = isset($_POST['phone-number']) ? $_POST['phone-number'] : '';
$comment = isset($_POST['comments']) ? $_POST['comments'] : '';

$email_from = 'billyk142@gmail.com';
$email_subject = "Message from $email ";
$email_body = "Name: $first_name. $last_name. \n".
    "Phone: $phone. \n".
    "Comment: \n $comment".

    $to = "billyk142@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n";
mail($to, $email_subject, $email_body, $headers);


if(@mail($emailRecipient, $subject, $message, $headers))
{
    echo "Mail Sent Successfully";
}else{
    echo "Mail Not Sent";
}


?>