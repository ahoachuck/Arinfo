<?php
session_start();

$isLoggedIn = isset($_SESSION['username']) ? true : false;
if ($isLoggedIn) {
    header('Location: /todo_app/index.php');
    exit();
}
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
        <!-- Actual form -->
        <div class="d-flex align-items-center justify-content-center m-5 p-5 border rounded-2">       
            <form method="POST" action="api/login.php" class="w-75">
                <!-- Todo title -->
                <div class="mb-3">
                    <label for="userName" class="form-label">Nom d'utilisateur <span class="required">*</span></label>
                    <input type="text" class="form-control" id="userName" name="userName"
                        placeholder="XxDarkTitouan86xX" required>
                </div>

                <!-- Form submission -->
                <div class="mb-3">
                    <button class="btn btn-outline-danger" type="reset">Effacer les champs</button>
                    <button class="btn btn-success" type="submit">Se connecter</button>
                </div>
            </form>
        </div>
    </main>

    <!-- Include footer -->
    <?php include_once "./components/footer.php" ?>

    <!-- Page script -->
    <!-- <script src="js/login.js" defer></script> -->
</body>

</html>