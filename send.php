<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];

$to = "novacakk@list.ru";
$date = date("d.m.y");
$time = date("h:i");
$from = $name;
$subject = "Заявка ЯХТЫ";

$msg = "       
        Телефон: $phone /n
        Имя: $name /n
        Текст: $text
    ";

mail($to, $subject, $msg, "From: $from")
?>
