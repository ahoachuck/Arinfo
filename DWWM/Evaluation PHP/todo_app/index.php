<?php
session_start();

$isLoggedIn = isset($_SESSION['username']) ? true : false;
if (!$isLoggedIn) {
    header('Location: /todo_app/login.php');
    exit();
}

// Get current tasks
$tasks = $_SESSION['tasks'] ?? [];
?>

<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <!-- Include base head -->
    <?php include_once "./components/head.php" ?>
</head>

<body>
    <!-- Include header -->
    <?php include_once "./components/header.php" ?>

    <main>
        <!-- Hello panel -->
        <div class="d-flex align-items-center justify-content-center m-5 p-5 border rounded-2">
            <h1>Bienvenue, <?php echo $_SESSION['username'] ?? 'undefined' ?>!</h1>
        </div>

        <!-- Actual form -->
        <div class="d-flex align-items-center justify-content-center m-5 p-5 border rounded-2">
            <form method="POST" action="api/insert.php" class="w-75">
                <!-- Todo title -->
                <div class="mb-3">
                    <label for="todoName" class="form-label">Nom de la tâche <span class="required">*</span></label>
                    <input type="text" class="form-control" id="todoName" name="todoName" placeholder="Tâche n°1..."
                        required>
                </div>

                <!-- Todo description -->
                <div class="mb-3">
                    <label for="todoDesc" class="form-label">Description de la tâche (facultatif)</label>
                    <textarea class="form-control" id="todoDesc" name="todoDesc" rows="3"
                        placeholder="Description..."></textarea>
                </div>

                <!-- Form submission -->
                <div class="mb-3">
                    <button class="btn btn-outline-danger" type="reset">Effacer les champs</button>
                    <button class="btn btn-primary" type="submit">Ajouter</button>
                </div>
            </form>
        </div>

        <!-- Table -->
        <div class="d-flex align-items-center justify-content-center m-5 p-2 border rounded-2">
            <table class="table table-hover text-center align-middle">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>


                <tbody class="table-group-divider">
                    <?php
                    foreach ($tasks as $task) {
                        // Properties
                        $id = $task['id'] ?? -1;
                        $read = ($task['read'] ?? null) ? true : false;
                        $readStatusClass = $read ? "class=\"text-success\"" : "class=\"text-danger\"";
                        $readTextClass = $read ? "class=\"text-secondary\"" : "";

                        // Begin table element
                        echo "<tr>";

                        // Show ID
                        echo sprintf("<th %s scope=\"row\">%s</th>", $readTextClass, $task['id']);

                        // Show name
                        echo sprintf("<td %s>%s</td>", $readTextClass, str_replace(' ', '-', $task['name']));

                        // Show description
                        echo sprintf("<td %s>%s</td>", $readTextClass, $task['desc']);

                        // Show date
                        echo sprintf("<td %s>%s</td>", $readTextClass, $task['date']->format('Y-m-d H:i:s'));

                        // Show completion
                        echo sprintf(
                            "<td %s>%s</td>",
                            $readStatusClass,
                            $read ? 'Terminée' : 'Non terminée'
                        );

                        // Render buttons
                        echo sprintf(<<<EOD
                                <td>                            
                                    <button class="btn btn-outline-danger" data-todo="%d" name="todoDelete" disabled>Supprimer</button>
                                    <button class="btn btn-primary" data-todo="%d" name="todoMark" disabled>Marquer comme terminée</button>
                                </td>
                            EOD, $id, $id);

                        // Finish table element
                        echo "</tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </main>

    <!-- Include footer -->
    <?php include_once "./components/footer.php" ?>

    <!-- Page script -->
    <script src="js/index.js" defer></script>
</body>

</html>