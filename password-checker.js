// Function to check password strength
function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthIndicator = document.getElementById("strength-indicator");
  const strengthMessage = document.getElementById("strength-message");

  // Regex patterns for password validation
  const weakPattern = /[a-z]/; // At least one lowercase letter
  const mediumPattern = /(?=.*[a-z])(?=.*[0-9])/; // Letters and numbers
  const strongPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/; // Letters, numbers, special characters

  // Determine password strength
  if (strongPattern.test(password)) {
      strengthIndicator.style.backgroundColor = "green";
      strengthMessage.textContent = "Strong Password";
  } else if (mediumPattern.test(password)) {
      strengthIndicator.style.backgroundColor = "orange";
      strengthMessage.textContent = "Medium Strength Password";
  } else if (weakPattern.test(password)) {
      strengthIndicator.style.backgroundColor = "red";
      strengthMessage.textContent = "Weak Password";
  } else {
      strengthIndicator.style.backgroundColor = "gray";
      strengthMessage.textContent = "Enter a Password";
  }
}
