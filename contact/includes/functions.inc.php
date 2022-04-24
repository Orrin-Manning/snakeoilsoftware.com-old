<?php
  function emptyForm($name, $email, $organization, $role, $description)
  {
    if (empty($name) || empty($email) || empty($organization) || empty($role) || empty($description))
    {
      return true;
    }
    return false;
  }
  
  function invalidEmail($email)
  {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
      return true;
    }
    return false;
  }
