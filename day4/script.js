
let cart = [];


function addToCart(productName) {
    
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            quantity: 1
        });
    }

    console.log(cart);
    alert(productName + " added to cart!");
}