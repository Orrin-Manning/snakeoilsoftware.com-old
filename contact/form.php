<form action="includes/form.inc.php" method="post" class="contact-form" id="contact-form">
  <div class="mb-3">
    <label class="form-label" for="name">Name:</label>
    <input class="form-control" id="name" type="text" name="name" form="contact-form">
  </div>
  <div class="mb-3">
    <label class="form-label" for="email">Email Address:</label>
    <input class="form-control" id="email" type="email" name="email" form="contact-form">
  </div>
  <div class="mb-3">
    <label class="form-label" for="organization">Organization:</label>
    <input class="form-control" id="organization" type="text" name="organization" form="contact-form">
  </div>
  <div class="mb-3">
    <label class="form-label" for="role">Role:</label>
    <input class="form-control" id="role" type="text" name="role" form="contact-form">
  </div>
  <div class="mb-3">
    <label class="form-label" for="description">Description:</label>
    <textarea class="form-control" id="description" type="text" name="description" rows="5" form="contact-form"></textarea>
  </div>
  <button class="contact-submit-btn" type="submit" name="submit" value="submit" form="contact-form">Submit</button>
</form>
