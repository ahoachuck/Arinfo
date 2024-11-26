<?php
session_start();

$isLoggedIn = isset($_SESSION['username']) ? true : false;
if (!$isLoggedIn) {
    header('Location: /todo_app/login.php');
    exit();
}

// Define tasks
$tasks = $_SESSION['tasks'] ?? [];

// Get the highest task id inside tasks
function tasks_highest_id()
{
    global $tasks;

    $lastId = 0;
    foreach ($tasks as $task) {
        $id = $task['id'];
        if ($id > $lastId)
            $lastId = $id;
    }

    return $lastId;
}

// Save? & redirect to index
function leave($save = bool)
{
    global $tasks;

    if ($save) {
        // Save new tasks into session
        $_SESSION['tasks'] = $tasks;
    }

    header('Location: /todo_app/index.php');
    exit();
}

/* Main code */
// Make sure we got a request
if ($_SERVER['REQUEST_METHOD'] !== 'POST')
    leave(false);

// Get the new todo element properties
$todoName = htmlspecialchars($_POST['todoName'] ?? 'Undefined');
$todoDesc = htmlspecialchars($_POST['todoDesc'] ?? 'Undefined');

// Add it to our tasks
array_push($tasks, [
    "id" => tasks_highest_id() + 1,
    "read" => tasks_highest_id() % 2 == 1 ? false : true, // Pour monter le fonctionnement, malgré l'absence des deux boutons
    "name" => $todoName,
    "desc" => $todoDesc,
    "date" => date_create()
]);

// We're done
leave(true);
?>