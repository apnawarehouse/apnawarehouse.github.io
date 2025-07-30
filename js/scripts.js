// scripts.js for hero slider fade effect

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slider .slide');
  let current = 0;
  const interval = 4000; // 4 seconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  setInterval(nextSlide, interval);
  showSlide(current);
});
