// cart.js
window.onload = function () {
    // Retrieve the cart from local storage (optional)
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        displayCart();
    }
};

function removeFromCart(index) {
    cart.splice(index, 1);
    calculateTotal();
    displayCart();
    // Update local storage after removing an item
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addMoreToCart(index) {
    cart[index].quantity += 1;
    calculateTotal();
    displayCart();
    // Update local storage after adding more
    localStorage.setItem('cart', JSON.stringify(cart));
}

function calculateTotal() {
    total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function displayCart() {
    let cartTable = document.getElementById("cart-table");
    cartTable.innerHTML = "";

    cart.forEach((item, index) => {
        let row = cartTable.insertRow();
        row.insertCell().innerText = item.name;
        row.insertCell().innerText = item.quantity;
        row.insertCell().innerText = item.price;

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.onclick = function () {
            removeFromCart(index);
        };
        row.insertCell().appendChild(removeButton);

        let addMoreButton = document.createElement("button");
        addMoreButton.innerText = "Add More";
        addMoreButton.onclick = function () {
            addMoreToCart(index);
        };
        row.insertCell().appendChild(addMoreButton);
    });

    document.getElementById("total").innerText = total.toFixed(2);
}
