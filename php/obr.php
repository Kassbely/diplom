<?php
header('Content-Type: text/html; charset=utf-8');

$host = "localhost";
$db = "fyadmbmr_mysite";
$user = "fyadmbmr_mysite";
$password = "Sudeki17";

$mysqli = mysqli_connect($host, $user, $password, $db);

if ($mysqli == false) {
     print("error");
} else {
     print("Соединение установлено успешно");
     $name = $_POST["name"];
     $email = trim(mb_strtolower($_POST["email"]));
     $comment = htmlspecialchars($_POST["comment"]);

     $result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email'");

     if ($result->num_rows != 0) {
          infotext.innerText = 'Вы уже отправляла отзыв с данным email!';
     
     } else {
          $mysqli->query("INSERT INTO `users`(`name`, `email`, `comment`) VALUES ('$name', '$email', '$comment')");
          print("ok");
     }
}