const registrationForm = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const phoneNumberError = document.getElementById("phoneNumberError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

registrationForm.addEventListener("submit", function (e) {
    let isValid = true;

    // Validate Full Name
    if (fullName.value.length < 5) {
        fullNameError.textContent = "Full Name must be at least 5 characters.";
        isValid = false;
    } else {
        fullNameError.textContent = "";
    }

    // Validate Email
    if (!email.value.includes("@")) {
        emailError.textContent = "Enter a valid Email ID.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Phone Number
    const phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(phoneNumber.value) || phoneNumber.value === "123456789") {
        phoneNumberError.textContent = "Enter a valid 10-digit Phone Number.";
        isValid = false;
    } else {
        phoneNumberError.textContent = "";
    }

    // Validate Password
    if (password.value === "password" || password.value.length < 8 || password.value === fullName.value) {
        passwordError.textContent = "Password is not strong enough.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Validate Confirm Password
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});