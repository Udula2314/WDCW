document.addEventListener("DOMContentLoaded", function() {
    // Get cart elements
    var cart = document.getElementById("cart");
    var cartImage = document.getElementById("cart_img");
    var closeCartt = document.getElementById("closeCart");

    // Function to show the cart
    function showCart() {
        
        cart.classList.add("cart-visible");
        console.log('plmplm');
    }

    // Function to hide the cart
    function hideCart() {

        cart.classList.remove("cart-visible");
    }

    // Toggle cart visibility when clicking on cart image
    cartImage.addEventListener("click", function() {
        if (cart.classList.contains("cart-visible")) {
            hideCart();
        } else {
            showCart();
        }
    });

    // Hide cart when clicking on close button
    closeCartt.addEventListener("click", function() {
        hideCart();
    });

    // Hide cart when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!cart.contains(event.target) && event.target !== cartImage) {
            hideCart();
        }
    });

    // Prevent cart from hiding when clicking inside it
    cart.addEventListener("click", function(event) {
        event.stopPropagation();
    });
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
  
 
  
  // script.js
  
  function updateDetails(quantity, elementId) {
  var vegNameElement = document.getElementById('vegN' + elementId);
  var vegPriceElement = document.getElementById('vegP' + elementId);
  
  
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
  function updateDetails1(quantity, elementId) {
    var medNameElement = document.getElementById('medN' + elementId);
    var medPriceElement = document.getElementById('medP' + elementId);
    

    if (quantity === '25 capsules') {
        medNameElement.innerText = '(25 capsules)';
        medPriceElement.innerText = '250.00';
    } else if (quantity === '50 capsules') {
        medNameElement.innerText = '(50 capsules)';
        medPriceElement.innerText = '500.00';
    } else if (quantity === '100 capsules') {
        medNameElement.innerText = '(100 capsules)';
        medPriceElement.innerText = '1000.00';
    } else if (quantity === '100g') {
        medNameElement.innerText = '(100g)';
        medPriceElement.innerText = '250.00';
    } else if (quantity === '250g') {
        medNameElement.innerText = '(250g)';
        medPriceElement.innerText = '500.00';
    } else if (quantity === '500g') {
        medNameElement.innerText = '(500g)';
        medPriceElement.innerText = '1000.00';
    }
}
function updateDetails2(quantity, elementId) {
    var exNameElement = document.getElementById('exN' + elementId);
    var exPriceElement = document.getElementById('exP' + elementId);
    

    if (quantity === '1.5M') {
        exNameElement.innerText = '1.5M';
        exPriceElement.innerText = '500.00';
    } else if (quantity === '3M') {
        exNameElement.innerText = '3M';
        exPriceElement.innerText = '1000.00';
    } else if (quantity === '1') {
        exNameElement.innerText = '1';
        exPriceElement.innerText = '750.00';
    } else if (quantity === '3Kg') {
        exNameElement.innerText = '3Kg';
        exPriceElement.innerText = '1500.00';
    } else if (quantity === '5Kg') {
        exNameElement.innerText = '5Kg';
        exPriceElement.innerText = '2000.00';
    } else if (quantity === '6Kg') {
        exNameElement.innerText = '6Kg';
        exPriceElement.innerText = '2500.00';
    } else if (quantity === '3') {
        exNameElement.innerText = '3';
        exPriceElement.innerText = '250.00';
    }
}
function updateDetails3(quantity, elementId) {
    var hyNameElement = document.getElementById('HyN' + elementId);
    var hyPriceElement = document.getElementById('HyP' + elementId);
    

    if (quantity === '100') {
        hyNameElement.innerText = '(100)';
        hyPriceElement.innerText = '250.00';
    } else if (quantity === '250') {
        hyNameElement.innerText = '(250)';
        hyPriceElement.innerText = '500.00';
    } else if (quantity === '500') {
        hyNameElement.innerText = '(500)';
        hyPriceElement.innerText = '1000.00';
    } else if (quantity === '100g') {
        hyNameElement.innerText = '(100g)';
        hyPriceElement.innerText = '250.00';
    } else if (quantity === '100ml') {
        hyNameElement.innerText = '(100ml)';
        hyPriceElement.innerText = '500.00';
    } else if (quantity === '1') {
        hyNameElement.innerText = '(1)';
        hyPriceElement.innerText = '250.00';
    }
}
function updateDetails4(quantity, elementId) {
    var bkNameElement = document.getElementById('bkN' + elementId);
    var bkPriceElement = document.getElementById('bkP' + elementId);
   

    if (quantity === '1') {
        bkNameElement.innerText = '1';
        bkPriceElement.innerText = '250.00'; // Assuming default price is 250.00
    }
}




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
  function addToCart1(event, priceIdPrefix) {
    console.log('dhggd');
    try {
        var productContainer = event.target.closest('.item1');
        if (!productContainer) {
            throw new Error('Product container not found.');
        }
        var productId = productContainer.getAttribute('id');
        var productName = productContainer.querySelector(`#${productId} h3`).innerText;
        var productQuantity = productContainer.querySelector(`#${productId} input[name="Quantity"]:checked`).value;
        var productPrice = parseFloat(productContainer.querySelector(`#${productId} #${priceIdPrefix}${productId.charAt(3)}`).innerText);
  
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
function addToCart2(event, priceIdPrefix) {
    console.log('dhggd');
    try {
        var productContainer = event.target.closest('.item2');
        if (!productContainer) {
            throw new Error('Product container not found.');
        }
        var productId = productContainer.getAttribute('id');
        var productName = productContainer.querySelector(`#${productId} h3`).innerText;
        var productQuantity = productContainer.querySelector(`#${productId} input[name="Quantity"]:checked`).value;
        var productPrice = parseFloat(productContainer.querySelector(`#${productId} #${priceIdPrefix}${productId.charAt(3)}`).innerText);
  
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
function addToCart3(event, priceIdPrefix) {
    console.log('dhggd');
    try {
        var productContainer = event.target.closest('.item3');
        if (!productContainer) {
            throw new Error('Product container not found.');
        }
        var productId = productContainer.getAttribute('id');
        var productName = productContainer.querySelector(`#${productId} h3`).innerText;
        var productQuantity = productContainer.querySelector(`#${productId} input[name="Quantity"]:checked`).value;
        var productPrice = parseFloat(productContainer.querySelector(`#${productId} #${priceIdPrefix}${productId.charAt(2)}`).innerText);
  
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
function addToCart4(event, priceIdPrefix) {
    console.log('dhggd');
    try {
        var productContainer = event.target.closest('.item4');
        if (!productContainer) {
            throw new Error('Product container not found.');
        }
        var productId = productContainer.getAttribute('id');
        var productName = productContainer.querySelector(`#${productId} h3`).innerText;
        var productQuantity = productContainer.querySelector(`#${productId} input[name="Quantity"]:checked`).value;
        var productPrice = parseFloat(productContainer.querySelector(`#${productId} #${priceIdPrefix}${productId.charAt(2)}`).innerText);
  
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
function addToCart5(event, priceIdPrefix) {
    console.log('dhggd');
    try {
        var productContainer = event.target.closest('.item5');
        if (!productContainer) {
            throw new Error('Product container not found.');
        }
        var productId = productContainer.getAttribute('id');
        var productName = productContainer.querySelector(`#${productId} h3`).innerText;
        var productQuantity = productContainer.querySelector(`#${productId} input[name="Quantity"]:checked`).value;
        var productPrice = parseFloat(productContainer.querySelector(`#${productId} #${priceIdPrefix}${productId.charAt(2)}`).innerText);
  
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
  
  // Exception handling for the addToCart function
  
  
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
  