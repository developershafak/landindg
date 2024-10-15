// Toggle between Login and Sign-up forms
function toggleForms() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");
}

// Login form validation
function validateLogin() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    let isValid = true;

    // Clear error messages
    document.querySelectorAll("#loginForm .error-message").forEach((msg) => (msg.textContent = ""));

    // Email validation
    if (email === "") {
        showError("loginEmail", "Email is required");
        isValid = false;
    } else if (!validateEmail(email)) {
        showError("loginEmail", "Enter a valid email");
        isValid = false;
    }

    // Password validation
    if (password === "") {
        showError("loginPassword", "Password is required");
        isValid = false;
    }

    return isValid;
}

// Sign-up form validation
function validateSignup() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    let isValid = true;

    // Clear error messages
    document.querySelectorAll("#signupForm .error-message").forEach((msg) => (msg.textContent = ""));

    // Username validation
    if (username === "") {
        showError("username", "Username is required");
        isValid = false;
    } else if (username.length < 3) {
        showError("username", "Username must be at least 3 characters");
        isValid = false;
    }

    // Email validation
    if (email === "") {
        showError("signupEmail", "Email is required");
        isValid = false;
    } else if (!validateEmail(email)) {
        showError("signupEmail", "Enter a valid email");
        isValid = false;
    }

    // Password validation
    if (password === "") {
        showError("signupPassword", "Password is required");
        isValid = false;
    } else if (password.length < 6) {
        showError("signupPassword", "Password must be at least 6 characters");
        isValid = false;
    }

    return isValid;
}

// Helper to show error message
function showError(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorMessage = inputField.nextElementSibling;
    errorMessage.textContent = message;
}

// Email validation regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
