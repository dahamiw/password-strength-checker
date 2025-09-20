
document.getElementById('show-password').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';  // Show password
    } else {
        passwordField.type = 'password';  // Hide password
    }
});

function checkPassword() {
    const password = document.getElementById('password').value;
    const strengthMsg = document.getElementById('strength-msg');
    
    // Password strength criteria
    const lengthCriteria = password.length >= 12;
    const upperCaseCriteria = /[A-Z]/.test(password);
    const lowerCaseCriteria = /[a-z]/.test(password);
    const digitCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    // Missing criteria
    let missingCriteria = [];

    if (!lengthCriteria) missingCriteria.push("at least 12 characters");
    if (!upperCaseCriteria) missingCriteria.push("at least one uppercase letter");
    if (!lowerCaseCriteria) missingCriteria.push("at least one lowercase letter");
    if (!digitCriteria) missingCriteria.push("at least one digit");
    if (!specialCharCriteria) missingCriteria.push("at least one special character");

    // Checking all criteria
    let strength = 0;
    if (lengthCriteria) strength++;
    if (upperCaseCriteria) strength++;
    if (lowerCaseCriteria) strength++;
    if (digitCriteria) strength++;
    if (specialCharCriteria) strength++;

    // Set password strength message based on score
    if (strength === 5) {
        strengthMsg.innerHTML = "Password Strength: Very Strong";
        strengthMsg.style.color = "green";
    } else if (strength === 4) {
        strengthMsg.innerHTML = "Password Strength: Strong";
        strengthMsg.style.color = "blue";
    } else if (strength === 3) {
        strengthMsg.innerHTML = "Password Strength: Moderate";
        strengthMsg.style.color = "orange";
    } else if (strength === 2) {
        strengthMsg.innerHTML = "Password Strength: Weak";
        strengthMsg.style.color = "red";
    } else {
        strengthMsg.innerHTML = "Password Strength: Very Weak";
        strengthMsg.style.color = "darkred";
    }

    // Display what is missing
    if (missingCriteria.length > 0) {
        strengthMsg.innerHTML += "<br><strong>Missing: </strong>" + missingCriteria.join(", ");
    }
}


