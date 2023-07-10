// script_products.js
document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i];
      button.addEventListener('click', addToCartClicked);
    }
  });

  function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = parseFloat(shopItem.getElementsByClassName('shop-item-price')[0].innerText.replace('$', ''));
    var imageSrc = shopItem.querySelector('.imgBx img').src;
    addItemToCart(title, price, imageSrc);
  }
  
  
  
  function addItemToCart(title, price, imageSrc) {
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText === title) {
        alert('This item is already added to the cart');
        return;
      }
    }
  
    var cartItemContainer = document.createElement('div');
    cartItemContainer.classList.add('cart-item-container');
  
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
  
    var cartItemImage = document.createElement('img');
    cartItemImage.classList.add('cart-item-image');
    cartItemImage.src = imageSrc;
    cartItemImage.width = 100;
    cartItemImage.height = 100;
    cartItem.appendChild(cartItemImage);
  
    var cartItemTitle = document.createElement('span');
    cartItemTitle.classList.add('cart-item-title');
    cartItemTitle.innerText = title;
    cartItem.appendChild(cartItemTitle);
  
    var cartItemPrice = document.createElement('span');
    cartItemPrice.classList.add('cart-item-price');
    cartItemPrice.innerText = '$' + price.toFixed(2);
    cartItem.appendChild(cartItemPrice);
  
    var cartItemQuantity = document.createElement('input');
    cartItemQuantity.classList.add('cart-item-quantity');
    cartItemQuantity.type = 'number';
    cartItemQuantity.value = 1;
    cartItemQuantity.min = 1;
    cartItem.appendChild(cartItemQuantity);
  
    var cartItemRemoveButton = document.createElement('button');
    cartItemRemoveButton.classList.add('cart-item-remove');
    cartItemRemoveButton.innerText = 'Remove';
    cartItem.appendChild(cartItemRemoveButton);
  
    cartItemContainer.appendChild(cartItem);
    cartItems.appendChild(cartItemContainer);
  
    updateCartTotal();
  
    cartItemRemoveButton.addEventListener('click', removeCartItem);
    cartItemQuantity.addEventListener('change', quantityChanged);
  }
  
  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  }
  
  function quantityChanged(event) {
    var input = event.target;
    if (input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal();
  }
  
  function updateCartTotal() {
    var cartItemContainers = document.getElementsByClassName('cart-item-container');
    var total = 0;
  
    for (var i = 0; i < cartItemContainers.length; i++) {
      var cartItemContainer = cartItemContainers[i];
      var priceElement = cartItemContainer.querySelector('.cart-item-price');
      var quantityElement = cartItemContainer.querySelector('.cart-item-quantity');
  
      var price = parseFloat(priceElement.innerText.replace('$', ''));
      var quantity = parseInt(quantityElement.value);
  
      total += price * quantity;
    }
  
    document.querySelector('.cart-total-price').innerText = '$' + total.toFixed(2);
  }
  