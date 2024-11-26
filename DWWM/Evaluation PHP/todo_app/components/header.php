<?php $isLoggedIn = isset($_SESSION['username']) ? true : false; ?>

<header class="p-3 text-bg-dark border-bottom">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 text-secondary">Liste</a></li>
            </ul>

            <div class="text-end">
                <form method="POST" action=<?php echo $isLoggedIn ? '"./api/logout.php/"' : '""' ?>>
                    <button type="submit" class="btn btn-outline-light me-2">
                        <?php echo $isLoggedIn ? 'Se déconnecter' : 'Se connecter' ?>
                    </button>
                </form>
            </div>
        </div>
    </div>
</header>