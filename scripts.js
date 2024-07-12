function validateForm() {
    var phone = document.getElementById('phone').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var errorMessage = document.getElementById('errorMessage');
    
    if (phone.trim() === '' || password1.trim() === '' || password2.trim() === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }
    if (password1 !== password2) {
        errorMessage.textContent = 'Passwords do not match';
    } else {
        errorMessage.textContent = '';
        var alertMessage = document.createElement('div');
        alertMessage.className = 'alert-message';
        alertMessage.textContent = 'Account verified!';
        document.body.appendChild(alertMessage);

        alertMessage.style.position = 'fixed';
        alertMessage.style.top = '50%';
        alertMessage.style.left = '50%';
        alertMessage.style.transform = 'translate(-50%, -50%)';
        alertMessage.style.backgroundColor = '#4CAF50';
        alertMessage.style.color = 'white';
        alertMessage.style.padding = '20px';
        alertMessage.style.borderRadius = '5px';
        alertMessage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        alertMessage.style.zIndex = '9999';

        setTimeout(function() {
            alertMessage.style.display = 'none';
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }, 2000);
    }
}
