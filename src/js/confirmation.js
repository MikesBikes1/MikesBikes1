document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const lastname = urlParams.get('last_name'); // Corrected to match the input field's name attribute
    const email = urlParams.get('email');
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    const confirmationMessage = `Thank you for confirming, ${name} ${lastname}.`; // Updated to handle first and last name properly
    document.getElementById('confirmationMessage').innerText = confirmationMessage;
});
