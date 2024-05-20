let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

setInterval(nextSlide, 5000);

showSlide(slideIndex);

document.querySelector('.details').classList.add('animate-slide-in');

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeButton = document.querySelector('.close-btn');

    
    hamburger.addEventListener('click', function() {
        menuOverlay.classList.toggle('active');
    });

    closeButton.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
    });
});
