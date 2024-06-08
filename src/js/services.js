// src/js/services.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const service = button.getAttribute('data-service');
            const price = button.getAttribute('data-price');

            cart.push({ service, price });
            cartCount.textContent = cart.length;

            alert(`${service} added to cart!`);
        });
    });
});
