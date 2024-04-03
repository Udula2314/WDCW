document.addEventListener('DOMContentLoaded', function() {
  try {
      var cartImg = document.getElementById('cart_img');
      var closeCart = document.getElementById('closeCart');
      var cart = document.querySelector('.cart');

      // Function to toggle cart visibility
      function toggleCart() {
          cart.classList.toggle('cart-visible');
      }
      function removeCart(){
        cart.classList.remove('cart-visible');
      }

      // Event listener for opening the cart
      cartImg.addEventListener('click', function() {
          console.log('Cart image clicked');
          toggleCart();
      });

      // Event listener for closing the cart
      closeCart.addEventListener('click', function() {
          console.log('Cart closed');
          removeCart();
      });
  } catch (error) {
      console.error('Error:', error);
  }
});

// Function setupSlider and rest of the code omitted for brevity
function setupSlider(nextBtnId, prevBtnId, imagesContainerId) {
  const nextBtn = document.getElementById(nextBtnId);
  const prevBtn = document.getElementById(prevBtnId);
  const imagesContainer = document.getElementById(imagesContainerId);
  let currentCard = 0;

  nextBtn.addEventListener('click', () => {
    if (currentCard < imagesContainer.children.length) {
      currentCard++;
      imagesContainer.style.transitionDuration = "0.7s";
      imagesContainer.style.transform = `translate(-${currentCard * 150}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentCard > 0) {
      currentCard--;
      imagesContainer.style.transitionDuration = "0.7s";
      imagesContainer.style.transform = `translate(-${currentCard * 150}px)`;
    }
  });
}

// Call setupSlider for each slider
setupSlider('next1', 'prev1', 'scroller1');
setupSlider('next2', 'prev2', 'scroller2');

setupSlider('next4', 'prev4', 'scroller4');
setupSlider('next5', 'prev5', 'scroller5');
setupSlider('next6', 'prev6', 'scroller6');
setupSlider('next7', 'prev7', 'scroller7');

// script.js

function updateDetails(quantity, elementId) {
var vegNameElement = document.getElementById('vegN' + elementId);
var vegPriceElement = document.getElementById('vegP' + elementId);
var pricePer100g = parseFloat(vegPriceElement.innerText.split(':')[1]);

if (quantity === '100g') {
    vegNameElement.innerText = '(100g)';
    vegPriceElement.innerText = '250';
} else if (quantity === '250g') {
    vegNameElement.innerText = '(250g)';
    vegPriceElement.innerText = '500';
} else if (quantity === '500g') {
    vegNameElement.innerText = '(500g)';
    vegPriceElement.innerText =  '1000';
}
}

// Add exception handling to addToCartButtons loop
try {
  var addToCartButtons = document.querySelectorAll('.button-text');

  addToCartButtons.forEach(function(button) {
      // Add a 'click' event listener to each button, calling the addToCart function when clicked
      button.addEventListener('click', addToCart);
      console.log('Hi');
  });
} catch (error) {
  console.error('Error:', error);
}

// Rest of the code remains the same

// Exception handling for the addToCart function
function addToCart(event) {
  console.log('dhggd');
  try {
      var productContainer = event.target.closest('.item1');
      if (!productContainer) {
          throw new Error('Product container not found.');
      }
      var productId = productContainer.getAttribute('id');
      var productName = productContainer.querySelector(`#${productId} h3`).innerText;
      var productQuantity = productContainer.querySelector(`#${productId} input[name="Quantity"]:checked`).value;
      var productPrice = parseFloat(productContainer.querySelector(`#${productId} #vegP${productId.charAt(3)}`).innerText);

      var product = {
          name: productName,
          quantity: productQuantity,
          price: productPrice
      };

      addProductToCart(product);
  } catch (error) {
      console.error('Error:', error);
  }
}

// Rest of the code remains the same

// Exception handling for addProductToCart function
function addProductToCart(product) {
  try {
      var cartBody = document.querySelector('.cart_body');
      if (!cartBody) {
          throw new Error('Cart body not found.');
      }
      var cartTotal = document.querySelector('.cardfooter p');
      if (!cartTotal) {
          throw new Error('Cart total not found.');
      }
      var cartTotalValue = parseFloat(cartTotal.innerText.replace('Rs.', ''));
      if (isNaN(cartTotalValue)) {
          throw new Error('Invalid cart total value.');
      }

      var cartItem = document.createElement('div');
      if (!cartItem) {
          throw new Error('Failed to create cart item.');
      }
      cartItem.classList.add('cart_item');
      cartItem.innerHTML = `
          <p>${product.name} - ${product.quantity}</p>
          <p>Rs.${product.price}</p>
      `;
      cartBody.appendChild(cartItem);

      cartTotalValue += product.price;
      if (isNaN(cartTotalValue)) {
          throw new Error('Invalid updated cart total value.');
      }
      cartTotal.innerText = 'Rs.' + cartTotalValue.toFixed(2);
  } catch (error) {
      console.error('Error:', error);
  }
}

// Close cart functionality
try {
  var closeCartButton = document.getElementById('closeCart');
  if (closeCartButton) {
      closeCartButton.addEventListener('click', function() {
          var cart = document.getElementById('cart');
          if (cart) {
              cart.style.display = 'none';
          } else {
              throw new Error('Cart element not found.');
          }
      });
  } else {
      throw new Error('Close cart button not found.');
  }
} catch (error) {
  console.error('Error:', error);
}

// Place order functionality
try {
  var placeOrderButton = document.querySelector('.place_order');
  if (placeOrderButton) {
      placeOrderButton.addEventListener('click', function() {
          alert('Your order has been placed!');
          clearCart();
      });
  } else {
      throw new Error('Place order button not found.');
  }
} catch (error) {
  console.error('Error:', error);
}

// Clear cart function
function clearCart() {
  try {
      var cartBody = document.querySelector('.cart_body');
      if (cartBody) {
          cartBody.innerHTML = '';
      } else {
          throw new Error('Cart body not found.');
      }

      var cartTotal = document.querySelector('.cardfooter p');
      if (cartTotal) {
          cartTotal.innerText = 'Rs.0';
      } else {
          throw new Error('Cart total not found.');
      }
  } catch (error) {
      console.error('Error:', error);
  }
}
