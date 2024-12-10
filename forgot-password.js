// forgot-password.js

document.getElementById('forgot-password-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    // Simulate OTP generation and sending
    if (email) {
        // Show OTP input form after clicking Send OTP
        document.getElementById('otp-form').style.display = 'block';
        alert('OTP has been sent to your email. (Simulated)');
    }
});

document.getElementById('verify-otp').addEventListener('click', function () {
    const otp = document.getElementById('otp').value;

    // Simulate OTP verification
    if (otp === '123456') { // Simulate the correct OTP
        alert('OTP verified successfully! You can now reset your password.');
        
        // Redirect to the login page after OTP verification
        window.location.href = 'login.html'; // Assuming the login page is named "login.html"
    } else {
        alert('Invalid OTP. Please try again.');
    }
});
