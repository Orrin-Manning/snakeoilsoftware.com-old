<?php
// Guard against missing form submission
if (!isset($_POST['submit']))
{
  header('location: /contact/');
  exit();
}

// Read variables from post request
$name = $_POST['name'];
$email = $_POST['email'];
$organization = $_POST['organization'];
$role = $_POST['role'];
$description = $_POST['description'];

// Get connection to the database
include 'dbh.inc.php';
