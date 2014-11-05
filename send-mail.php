<?php
// ----------------------------конфигурация-------------------------- //

$adminemail="skeletart@gmail.com";  // e-mail админа
$date=date("d.m.y"); // число.месяц.год
$time=date("H:i"); // часы:минуты:секунды
$backurl="/";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //


// Принимаем данные с формы
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$msg = strip_tags($_POST['message']);
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: ". $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";


$msg="
<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
</head>
<body>
	<p><b>Имя:</b> $name</p>
	<p><b>E-mail:</b> $email</p>
	<p><b>Сообщение:</b> $msg</p>
</body>
</html>
";

// Отправляем письмо админу
mail("$adminemail", "$date $time Сообщение от $name", "$msg", $headers);

// Выводим сообщение пользователю
print "<script language='Javascript'><!--
	function reload() {location = \"$backurl\"};
	setTimeout(function(){
		alert('Ваше сообщение отправлено. Мы скоро ответим.');
		reload();
	}, 500);
//--></script>
";
exit;

?>