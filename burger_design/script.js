// Toggle navigation menu
function toggleNav() {
    var nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
}

// Update cart dynamically
document.querySelectorAll('.burger').forEach(item => {
    item.addEventListener('click', event => {
        var itemName = item.querySelector('h3').textContent;
        var cartItems = document.querySelector('#cart-items');
        var p = document.createElement('p');
        p.textContent = itemName;
        cartItems.appendChild(p);
    });
});

// Cancel order
function cancelOrder() {
    var cartItems = document.querySelector('#cart-items');
    cartItems.innerHTML = '<p>Your cart is currently empty.</p>';
}