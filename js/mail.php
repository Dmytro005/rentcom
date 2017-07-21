<?php

$recepient = "harazdovskiy@gmail.com";
$sitename = "Rentcom";

$Email = trim($_POST['Email']);
$NameSurname = trim($_POST['NameSurname']);
$Text = trim($_POST['Text']);

$message = " $NameSurname \n $Text ";


$pagetitle = "Нова заявка з сайту \"$sitename\" ";
mail($recepient,$pagetitle,$messsage,"Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>