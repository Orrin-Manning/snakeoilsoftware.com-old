<?php
$title = 'Contact Us';
$author = 'Orrin Manning';
include_once '../header.php';
?>
<main>
  <h1 class="contact-header serif">Contact Us</h1>
  <section>
    <p class="contact-dialogue serif">
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
    <p class="contact-dialogue serif">
      You may also contact us via email and we will be happy to answer any questions you may have.
    </p>
    <p class="serif">
      Email:
      <a href="mailto:orrin.manning@protonmail.com">
        orrin.manning@protonmail.com
      </a>
    </p>
  </section>
</main>
<?php
require_once '../footer.php';
