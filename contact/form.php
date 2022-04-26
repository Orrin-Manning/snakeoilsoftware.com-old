<form action="includes/form.inc.php" method="post" class="contact-form text-dark" id="contact-form">
  <div class="form-floating mb-3">
    <input class="form-control" id="name" type="text" name="name" placeholder="John Doe" form="contact-form">
    <label class="form-label" for="name">Name</label>
  </div>
  <div class="form-floating mb-3">
    <input class="form-control" id="email" type="email" name="email" placeholder="name@example.com" form="contact-form">
    <label class="form-label" for="email">Email</label>
  </div>
  <div class="form-floating mb-3">
    <input class="form-control" id="organization" type="text" name="organization" placeholder="Company" form="contact-form">
    <label class="form-label" for="organization">Organization</label>
  </div>
  <div class="form-floating mb-3">
    <input class="form-control" id="role" type="text" name="role" placeholder="Technical Director" form="contact-form">
    <label class="form-label" for="role">Role</label>
  </div>
  <div class="form-floating mb-3">
    <textarea class="form-control" id="description" type="text" name="description" placeholder="Describe your needs here" style="height: 150px;" form="contact-form"></textarea>
    <label class="form-label" for="description">Description</label>
  </div>
  <button class="contact-submit-btn" type="submit" name="submit" value="submit" form="contact-form">Submit</button>
</form>
