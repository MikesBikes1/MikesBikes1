document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const lastname = urlParams.get('last_name');
    const email = urlParams.get('email');
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    const confirmationMessage = `Thank you for confirming, ${name} ${lastname}.`;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;
});
