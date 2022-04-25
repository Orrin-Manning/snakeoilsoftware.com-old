<?php
  require_once $_SERVER['DOCUMENT_ROOT'].'/includes/functions.inc.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title><?php echo $title ?></title>
  <meta name="author" content="<?php echo $author ?>">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  >
  <link rel="stylesheet" href="/stylesheets/styles.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rye">
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NXQXPK9159"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-NXQXPK9159');
  </script>
</head>
<body class="bg-dark">

  <nav class="navbar navbar-expand-md navbar-dark px-3">
    <a href="/" class="navbar-brand">Snake Oil Software</a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="offcanvas offcanvas-end text-light bg-dark"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <?php insertNavLink('Home', '/') ?>
          </li>
          <li class="nav-item">
            <?php insertNavLink('Contact', '/contact') ?>
          </li>
          <li class="nav-item">
            <?php insertNavLink('About', '/about') ?>
          </li>
        </ul>
      </div>
    </div>

  </nav>
