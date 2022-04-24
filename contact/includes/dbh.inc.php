<?php
  include 'dbAccess.inc.php';
  
  // Create connection
  $conn = new mysqli($serverName, $username, $password, $dbName);
  
  // Check Connection
  if ($conn->connect_error)
  {
    die('Connection failed: ' . $conn->connect_error);
  }
