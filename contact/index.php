<?php
  $title = 'Contact Us';
  $author = 'Orrin Manning';
  require_once $_SERVER['DOCUMENT_ROOT'].'/header.php';
?>
<main>
  <h1>Contact Us</h1>
  <section>
    <p>
      Due to the varied technological needs of our clients, service will be
      evaluated on a case-by-case basis. Please complete this questionnaire,
      and we will reach out to you to create a personalized plan of action for
      your business needs.
    </p>
    <?php
      include_once 'form.php';
    ?>
  </section>

  <section>
    <p>
      You may also contact us via email and we will be happy to answer any questions you may have.
    </p>
    <p>
      Email:
      <a href="mailto:orrin.manning@protonmail.com">
        orrin.manning@protonmail.com
      </a>
    </p>
  </section>
</main>
<?php
  require_once $_SERVER['DOCUMENT_ROOT'].'/footer.php';
