<?php

$recepient = "peter@trihart.media";
$sitename = "trihart";

$name      = trim($_POST["name"]);
$company   = trim($_POST["company"]);
$email     = trim($_POST["email"]);
$text      = trim($_POST["text"]);
$subject   = $_POST["subject"];
$message = "Name: $name \nCompany: $company \nEmail: $email \nSubject: $subject \nProduct Description: $text";

$pagetitle = "New from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");