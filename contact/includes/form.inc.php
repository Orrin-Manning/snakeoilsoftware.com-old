<?php
// Get connection to the database
include 'dbh.inc.php';

// Verify that this page was reached appropriately
if (!isset($_POST['submit']))
{
  header('location: /contact/');
}
