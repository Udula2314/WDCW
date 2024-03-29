let slideIndex = 0;

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function showSlide(n) {
    const slides = document.querySelector('.container-food');
    const slideWidth = document.querySelector('.item').offsetWidth;
    if (n > slides.children.length - 1) { slideIndex = 0; } // Reset index to start
    if (n < 0) { slideIndex = slides.children.length - 1; } // Reset index to end
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`; // Move slides
}
