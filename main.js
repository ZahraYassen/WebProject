// Start First HTML File Landing Section

// Start Header

// Start Nav Hidden List
document
  .getElementById("parent-hidden-list")
  .addEventListener("mouseover", showHiddenList);
document
  .getElementById("parent-hidden-list")
  .addEventListener("mouseout", hideHiddenList);

function showHiddenList() {
  var hiddenList = document.getElementById("hidden-list");
  hiddenList.style.display = "block";
}

function hideHiddenList() {
  var hiddenList = document.getElementById("hidden-list");
  hiddenList.style.display = "none";
}
// End Nav Hidden List

// Login Email Validation
function validateEmail(email) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!validRegex.test(email)) {
    alert("Please enter a valid email address!");
    return false;
  }
  else {
    alert("Welcome to Furniture store");
    return true;
  }
}
// End Header

// start Landing
document.getElementById("buy-now").addEventListener("click", myFunction);

function myFunction() {
  window.alert("Welcom To Our Store!");
}
// End Landing
// End First HTML File Landing Section

// Start index4.html 
      function validateForm() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        let errorMessage = ''; // Initialize an empty error message string
      
        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          errorMessage += 'Invalid email address. Please enter a valid email.\n';
        }
      
        // Password Validation (minimum length, complexity requirements)
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^\s]{8,}$/; // At least 8 characters with 1 digit, 1 lowercase, 1 uppercase
        if (!passwordRegex.test(password)) {
          errorMessage += 'Password must be at least 8 characters long and include a digit, a lowercase letter, and an uppercase letter.\n';
        }
      
        // Check if there are any errors
        if (errorMessage) {
          alert(errorMessage); // Display all errors in a single alert
          return false;
        }
      
        // If all validations pass, submit the form
        return true;
      }
// End index4.html