<?php
/* Main code */
session_start();

// Redirect to index if logged in
$isLoggedIn = isset($_SESSION['username']) ? true : false;
if ($isLoggedIn) {
    header('Location: /todo_app/index.php');
    exit();
}

// Make sure we got a request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /todo_app/login.php');
    exit();
}

// Set up session variables
$userName = htmlspecialchars($_POST['userName'] ?? 'No Username');

$_SESSION['username'] = $userName;
$_SESSION['tasks'] = [];

// Redirect to index
header('Location: /todo_app/index.php');
exit();
?>