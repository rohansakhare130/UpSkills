document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('password-strength');
    const form = document.getElementById('register-form');
    const message = document.getElementById('message');
    const notification = document.getElementById('notification');

    passwordInput.addEventListener('input', function() {
        const strength = checkPasswordStrength(passwordInput.value);
        updatePasswordStrength(strength);
    });

    function checkPasswordStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[\W]/)) strength++;
        return strength;
    }

    function updatePasswordStrength(strength) {
        passwordStrength.style.width = `${(strength / 5) * 75}%`;
        if (strength < 3) {
            passwordStrength.style.background = 'red';
            message.textContent = 'Password is too short';
            message.style.color = 'red';
        } else if (strength <= 4) {
            passwordStrength.style.background = 'yellow';
            message.textContent = 'Password is too weak';
            message.style.color = 'yellow';
        } else {
            passwordStrength.style.background = 'green';
            message.textContent = 'Password is now perfect';
            message.style.color = 'green';
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (checkPasswordStrength(passwordInput.value) >= 4) {
            showNotification('Registration Successful!', 'success');
            form.reset();
            resetProgressBarAndMessage();
        } else {
            showNotification('Password must be at least 8 characters long and meet the strength requirements.', 'error');
        }
    });

    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = '';
        notification.classList.add(type === 'success' ? 'notification-success' : 'notification-error');
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }
    function resetProgressBarAndMessage() {
        passwordStrength.style.width = '0%';
        passwordStrength.style.background = 'red';
        message.textContent = '';
    }
});
