var pagesource = document.body.innerHTML;
var login = pagesource.match(/http:\/\/ruconnected.ru.ac.za\/login\/index.php/)[0];
if (login == "http://ruconnected.ru.ac.za/login/index.php")
{
	location.href = "http://ruconnected.ru.ac.za/login/index.php";
}