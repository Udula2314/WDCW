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


  const next1=document.getElementById('next1');
  const prev1=document.getElementById('prev1');
  const images1=document.getElementById('scroller1');
  let current_card1=0;

  next1.addEventListener('click', ()=>{
    if(current_card1<images.children.length-0.5){

    current_card1++;
    images1.style.transitionDuration="0.5s";
    images1.style.transform = `translate(-${current_card1 * 100}px)`;
    }
    else{
        return
    }
    

  }); 
  prev1.addEventListener('click', ()=>{
    if(current_card1>0){

    current_card1--;
    images1.style.transitionDuration="0.5s";
    images1.style.transform = `translate(-${current_card1 * 100}px)`;
    }
    else{
        return
    }
    

  });
  const next2=document.getElementById('next2');
  const prev2=document.getElementById('prev2');
  const images2=document.getElementById('scroller2');
  let current_card2=0;

  next2.addEventListener('click', ()=>{
    if(current_card2<images2.children.length-0.5){

    current_card2++;
    images2.style.transitionDuration="0.5s";
    images2.style.transform = `translate(-${current_card2 * 100}px)`;
    }
    else{
        return
    }
    

  }); 
  prev2.addEventListener('click', ()=>{
    if(current_card2>0){

    current_card2--;
    images2.style.transitionDuration="0.5s";
    images2.style.transform = `translate(-${current_card2 * 100}px)`;
    }
    else{
        return
    }
    

  });
  const next3=document.getElementById('next3');
  const prev3=document.getElementById('prev3');
  const images3=document.getElementById('scroller3');
  let current_card3=0;

  next3.addEventListener('click', ()=>{
    if(current_card3<images3.children.length-0.5){

    current_card3++;
    images3.style.transitionDuration="0.5s";
    images3.style.transform = `translate(-${current_card3 * 100}px)`;
    }
    else{
        return
    }
    

  }); 
  prev3.addEventListener('click', ()=>{
    if(current_card3>0){

    current_card3--;
    images3.style.transitionDuration="0.5s";
    images3.style.transform = `translate(-${current_card3 * 100}px)`;
    }
    else{
        return
    }
    

  });
  const next4=document.getElementById('next4');
  const prev4=document.getElementById('prev4');
  const images4=document.getElementById('scroller4');
  let current_card4=0;

  next4.addEventListener('click', ()=>{
    if(current_card4<images4.children.length-0.5){

    current_card4++;
    images4.style.transitionDuration="0.5s";
    images4.style.transform = `translate(-${current_card4 * 100}px)`;
    }
    else{
        return
    }
    

  }); 
  prev4.addEventListener('click', ()=>{
    if(current_card4>0){

    current_card4--;
    images4.style.transitionDuration="0.5s";
    images4.style.transform = `translate(-${current_card4 * 100}px)`;
    }
    else{
        return
    }
    

  });

  