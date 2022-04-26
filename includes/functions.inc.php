<?php
  function insertNavLink($linkName, $linkPath)
  {
    $currentPath = pathinfo($_SERVER['SCRIPT_NAME'], PATHINFO_DIRNAME);
?>
    <a
      class="nav-link<?= ($currentPath == $linkPath) ? ' active' : '' ?>"
      href="<?= $linkPath ?>"
      <?php if($currentPath == $linkPath) { ?>
        aria-current="page"
      <?php } ?>
    >
      <?= $linkName ?>
    </a>
<?php
  }
