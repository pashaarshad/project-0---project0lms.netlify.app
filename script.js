document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'arshad' && password === 'arshad') {
        window.location.href = 'arshad_login.html'; 
    } else {
        errorMessage.style.display = 'block'; // Show error message
    }
});


