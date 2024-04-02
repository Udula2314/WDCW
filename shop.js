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
      if (currentCard < imagesContainer.children.length ) {
        currentCard++;
        imagesContainer.style.transitionDuration = "0.5s";
        imagesContainer.style.transform = `translate(-${currentCard * 200}px)`;
      }
    });
  
    prevBtn.addEventListener('click', () => {
      if (currentCard > 0) {
        currentCard--;
        imagesContainer.style.transitionDuration = "0.5s";
        imagesContainer.style.transform = `translate(-${currentCard * 100}px)`;
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
      vegPriceElement.innerText = 'LKR:' + '250';
  } else if (quantity === '250g') {
      vegNameElement.innerText = '(250g)';
      vegPriceElement.innerText = 'LKR:' + '500';
  } else if (quantity === '500g') {
      vegNameElement.innerText = '(500g)';
      vegPriceElement.innerText = 'LKR:' + '1000';
  }
}

  

  