// Initialize the cart with an empty array if it doesn't already exist in localstorage
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Add an item to the cart
function addToCart(item) {
  // Get the current cart from localstorage
  let cart = JSON.parse(localStorage.getItem('cart'));

  // Add the new item to the cart
  cart.push(item);

  // Save the updated cart back to localstorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Remove an item from the cart
function removeFromCart(item) {
  // Get the current cart from localstorage
  let cart = JSON.parse(localStorage.getItem('cart'));

  // Find the index of the item to remove
  const index = cart.findIndex((cartItem) => cartItem.id === item.id);

  // Remove the item from the cart
  cart.splice(index, 1);

  // Save the updated cart back to localstorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Get the current cart
function getCart() {
  // Get the current cart from localstorage
  return JSON.parse(localStorage.getItem('cart'));
}

// Clear the cart
function clearCart() {
  // Remove the cart from localstorage
  localStorage.removeItem('cart');
}
