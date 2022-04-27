<?php
  // include 'dbAccess.inc.php';
  $credentials = parse_ini_file('.database.ini', true)['db_credentials'];

  $serverName = $credentials['server_name'];
  $username = $credentials['username'];
  $password = $credentials['password'];
  $dbName = $credentials['db_name'];
  
  unset($ini);

  // Create connection
  $conn = new mysqli($serverName, $username, $password, $dbName);
  
  // Check Connection
  if ($conn->connect_error)
  {
    die('Connection failed: ' . $conn->connect_error);
  }
