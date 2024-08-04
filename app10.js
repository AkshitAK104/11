function authenticate() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const correctUsername = 'ak';
    const correctPassword = '123';

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        // Add hidden class to body for fade-out effect
        document.body.classList.add('hidden');

        // Redirect after the transition effect
        setTimeout(() => {
            window.location.href = 'ak.html'; 
        }, 500); // Duration should match the CSS transition duration
    } else {
        // Indicate failure
        document.body.style.backgroundColor = 'red';

        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Incorrect username or password';
        messageElement.style.color = 'red'; 
    }
}
