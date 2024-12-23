// menu.js
function addToCart(itemName, price) {
    let quantity = 1;
    cart.push({ name: itemName, quantity, price });
    alert(`"${itemName}" has been added to the cart!`);
    // Store the cart in local storage for persistence (optional)
    localStorage.setItem('cart', JSON.stringify(cart));
    // Navigate to the cart page
    window.location.href = "Cart.html";
}
