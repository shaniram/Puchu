document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Account Details:", { username, email, password });

    // Use Firebase, API, or any back-end service to handle registration
    alert('Account creation is simulated here.');
});