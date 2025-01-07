// Handle phone input validation and styling
document.getElementById('phone').addEventListener('input', function() {
    var phoneInput = this;
    var phoneValue = phoneInput.value;

    // Remove any non-numeric characters
    phoneValue = phoneValue.replace(/\D/g, '');

    // If 11 digits are entered, make the input green (valid)
    if (phoneValue.length === 11) {
        phoneInput.value = phoneValue;  // Update input with cleaned value
        phoneInput.classList.add('valid');
        phoneInput.classList.remove('invalid');
    } else {
        phoneInput.classList.remove('valid');
        phoneInput.classList.add('invalid');
    }
});
