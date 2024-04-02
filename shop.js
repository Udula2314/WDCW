2


document.addEventListener('DOMContentLoaded', function() {
    var cartImg = document.getElementById('cart_img');
    var closeCart = document.getElementById('closeCart');
    var cart = document.querySelector('.cart');

    // Function to toggle cart visibility
    function toggleCart() {
        cart.classList.toggle('cart-visible');
    }

    // Event listener for opening the cart
    cartImg.addEventListener('click', function() {
        console.log('Cart image clicked');
        toggleCart();
    });

    // Event listener for closing the cart
    closeCart.addEventListener('click', function() {
        console.log('Cart closed');
        toggleCart();
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      document.body.classList.add('scrolling');
    } else {
      document.body.classList.remove('scrolling');
    }
  });


  function setupSlider(nextBtnId, prevBtnId, imagesContainerId) {
    const nextBtn = document.getElementById(nextBtnId);
    const prevBtn = document.getElementById(prevBtnId);
    const imagesContainer = document.getElementById(imagesContainerId);
    let currentCard = 0;
  
    nextBtn.addEventListener('click', () => {
      if (currentCard < imagesContainer.children.length) {
        currentCard++;
        imagesContainer.style.transitionDuration = "0.7s";
        imagesContainer.style.transform = `translate(-${currentCard * 200}px)`;
      }
    });
  
    prevBtn.addEventListener('click', () => {
      if (currentCard > 0) {
        currentCard--;
        imagesContainer.style.transitionDuration = "0.7s";
        imagesContainer.style.transform = `translate(-${currentCard * 200}px)`;
      }
    });
  }
  
  // Call setupSlider for each slider
  setupSlider('next1', 'prev1', 'scroller1');
  setupSlider('next2', 'prev2', 'scroller2');
  setupSlider('next3', 'prev3', 'scroller3');
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
      vegPriceElement.innerText =  '250';
  } else if (quantity === '250g') {
      vegNameElement.innerText = '(250g)';
      vegPriceElement.innerText = '500';
  } else if (quantity === '500g') {
      vegNameElement.innerText = '(500g)';
      vegPriceElement.innerText =  '1000';
      
  }
}

// Add event listeners to all "Add to Cart" buttons

  // Select all elements with the class 'button-text'
  var addToCartButtons = document.querySelectorAll('.button-text');

  
  addToCartButtons.forEach(function(button) {
    console.log('Hi')
      // Add a 'click' event listener to each button, calling the addToCart function when clicked
      button.addEventListener('click', addToCart,);
  });
  


// Function to add product to the cart
function addToCart(event) {
  var productContainer = event.target.closest('.item1');
  var productId = productContainer.getAttribute('id');
  var productName = productContainer.querySelector(`#${productId} h3`).innerText;
  // Corrected the id used in the selector for the radio button
  var productQuantity = productContainer.querySelector(`#${productId} input[name="Quantity"]:checked`).value;
  var productPrice = parseFloat(productContainer.querySelector(`#${productId} #vegP${productId.charAt(3)}`).innerText);
  

  var product = {
      name: productName,
      quantity: productQuantity,
      price: productPrice
  };

  // Call function to add product to the cart
  addProductToCart(product);
  
}

// Function to add product to the cart
function addProductToCart(product) {
    var cartBody = document.querySelector('.cart_body');
    var cartTotal = document.querySelector('.cardfooter p');
    var cartTotalValue = parseFloat(cartTotal.innerText.replace('Rs.', '')); // Remove 'Rs.' and convert to float

    // Create new cart item element
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');
    cartItem.innerHTML = `
        <p>${product.name} - ${product.quantity}</p>
        <p>Rs.${product.price }</p>
    `;
    cartBody.appendChild(cartItem);

    // Update total
    cartTotalValue += (product.price );
    cartTotal.innerText = 'Rs.' + cartTotalValue.toFixed(2);
}

// Close cart functionality
var closeCartButton = document.getElementById('closeCart');
closeCartButton.addEventListener('click', function() {
    var cart = document.getElementById('cart');
    cart.style.display = 'none';
});

// Place order functionality
var placeOrderButton = document.querySelector('.place_order');
placeOrderButton.addEventListener('click', function() {
    // Implement order placement logic here
    // You can send the cart items to a server or display a confirmation message, etc.
    alert('Your order has been placed!');
    clearCart();
});
function clearCart() {
  var cartBody = document.querySelector('.cart_body');
  var cartTotal = document.querySelector('.cardfooter p');

  // Remove all cart items
  cartBody.innerHTML = '';

  // Reset total to 0
  cartTotal.innerText = 'Rs.0';
}