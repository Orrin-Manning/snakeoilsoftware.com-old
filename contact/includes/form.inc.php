<?php
// Get connection to the database
include 'dbh.inc.php';

// Guard against missing form submission
if (!isset($_POST['submit']))
{
  header('location: /contact/');
  exit();
}


