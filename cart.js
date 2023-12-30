const cartBody = document.getElementById('cart-container');
var totalPay = 0;
function displayCart() {
  var products = loadCart();
  var cartTotal = 0;
  for (var i = 0; i < products.length; i++) {
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    var cartItemImage = document.createElement('img');
    cartItemImage.src = products[i].img;

    var cartItemInfo = document.createElement('div');
    cartItemInfo.classList.add('cart-item-info');

    var cartItemTitle = document.createElement('div');
    cartItemTitle.classList.add('cart-item-title');
    cartItemTitle.textContent = products[i].productName;

    var cartItemPrice = document.createElement('div');
    cartItemPrice.classList.add('cart-item-price');
    cartItemPrice.textContent = '$' + products[i].productPrice;
    let itemPrice = products[i].productPrice;
    var deleteItem = document.createElement('button');
    deleteItem.innerHTML = 'Delete';
    deleteItem.classList = 'delet-from-cart';
    deleteItem.value = products[i].id;
    cartItem.id = `cartItem${products[i].id}`;
    cartItemInfo.append(cartItemTitle, cartItemPrice);
    cartItem.append(cartItemImage, cartItemInfo, deleteItem);
    deleteItem.addEventListener('click', function (e) {
      deletCartItem(e.target.value, itemPrice);
    });

    cartBody.appendChild(cartItem);

    // Calculate total
    cartTotal += parseInt(products[i].productPrice);
  }
  var cartItem = document.createElement('div');
  cartItem.classList.add('cart-total');
  var cartTotalPrice = document.createElement('div');
  cartTotalPrice.classList.add('cart-item-price');
  cartTotalPrice.textContent = '$' + cartTotal;
  cartItem.append(cartTotalPrice);
  cartBody.append(cartItem);
  totalPay = cartTotal;
}
function deletCartItem(id, price) {
  totalPay -= price;
  document.getElementsByClassName('cart-total')[0].firstChild.innerHTML =
    '$' + totalPay;

  let cartProducts = loadCart();
  const item = document.getElementById(`cartItem${id}`);
  cartProducts = cartProducts.filter((x) => x.id != id);

  item.remove();

  localStorage.setItem('cart', JSON.stringify(cartProducts));
}

displayCart();
