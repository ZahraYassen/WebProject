<?php

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign Up</title>
    <link rel="stylesheet" href="/Css/furniture.css" />
  </head>
  <body>
    <form
      class="signUpform"
      action=""
      autocomplete="off"
      method="post"
      onsubmit="return validateForm()"
    >
      <div class="left-side">
        <div class="logo"><a href="/index.html">Furniture</a></div>
        <img src="/Css/imgs/signUp.jpg" alt="" height="305px" />
      </div>
      <div class="right-side">
        <h2>Create Your Account</h2>
        <div class="box">
          <label for="username">User Name:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div class="box">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="box">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="Get Started" class="submitBtn" />
      </div>
    </form>

    <script src="/main.js"></script>
  </body>
</html>
