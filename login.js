// login.js

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Predefined credentials for manager and staff
    const managerCredentials = { username: 'manager', password: 'manager' };
    const staffCredentials = { username: 'staff', password: 'staff' };

    // Check if the entered credentials match the selected role
    if (role === 'manager' && username === managerCredentials.username && password === managerCredentials.password) {
        alert('Login successful! Redirecting to Manager Dashboard...');
        window.location.href = 'manager-dashboard.html'; // Redirect to Manager Dashboard
    } else if (role === 'staff' && username === staffCredentials.username && password === staffCredentials.password) {
        alert('Login successful! Redirecting to Staff Dashboard...');
        window.location.href = 'staff-dashboard.html'; // Redirect to Staff Dashboard
    } else {
        alert('Invalid username or password for the selected role. Please try again.');
    }
});
// Get references to the password input field and the eye icon
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

// Add event listener for the eye icon
togglePassword.addEventListener('click', function () {
    // Check if the input type is currently password
    const currentType = passwordInput.type;

    // Toggle the type between 'password' and 'text'
    if (currentType === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
