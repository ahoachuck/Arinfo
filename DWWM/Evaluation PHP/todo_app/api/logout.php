<?php
unset($_SESSION['username']);
unset($_SESSION['tasks']);
session_unset();
session_destroy();
setcookie('PHPSESSID', '', time() - 86400, '/');

header('Location: /todo_app/login.php');
exit();
?>