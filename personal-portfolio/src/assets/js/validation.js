// Utility function to validate phone number
function validatePhoneNumber(phone) {
  const phoneRegex = /^[0-9]{10}$/; // Matches exactly 10 digits
  return phoneRegex.test(phone);
}

// Utility function to validate email address
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
  return emailRegex.test(email);
}

// Add event listener to the Submit button
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", () => {
    const phoneInput = document.getElementById("phone").value.trim();
    const emailInput = document.getElementById("email").value.trim();

    let isValid = true;

    // Validate phone number
    if (!validatePhoneNumber(phoneInput)) {
      alert("Please enter a valid 10-digit phone number.");
      isValid = false;
    }

    // Validate email address
    if (!validateEmail(emailInput)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    // If both fields are valid
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
});