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
    <form class="contact-form" id="contact-form">
      <ul class="contact-form-fields">
        <li class="contact-form-item">
          <label class="serif" for="first-name">First Name:</label>
          <input class="contact-form-input" id="first-name" type="text" name="first-name" form="contact-form">
        </li>
        <li class="contact-form-item">
          <label class="serif" for="last-name">Last Name:</label>
          <input class="contact-form-input" id="last-name" type="text" name="last-name" form="contact-form">
        </li>
        <li class="contact-form-item">
          <label class="serif" for="email">Email Address:</label>
          <input class="contact-form-input" id="email" type="email" name="email" form="contact-form">
        </li>
        <li class="contact-form-item">
          <label class="serif" for="organization">Organization:</label>
          <input class="contact-form-input" id="organization" type="text" name="organization" form="contact-form">
        </li>
        <li class="contact-form-item">
          <label class="serif" for="role">Role:</label>
          <input class="contact-form-input" id="role" type="text" name="role" form="contact-form">
        </li>
        <li class="contact-form-item">
          <label class="serif" for="description">
            Please provide a brief description of the development needs for your organization:
          </label>
          <textarea class="contact-form-input big-input" id="description" type="text" name="description" form="contact-form"></textarea>
        </li>
      </ul>
      <button class="contact-submit-btn" type="submit">Submit</button>
    </form>
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
</body>
</html>
