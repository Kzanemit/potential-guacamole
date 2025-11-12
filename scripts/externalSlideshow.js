/* External JavaScript: externalSlideshow.js
   Source: adapted from DynamicDrive.com */
const slides = [
  "Welcome to my portfolio site!",
  "Explore my creative projects.",
  "JavaScript makes pages interactive!"
];

let slideIndex = 0;
const slideshow = document.getElementById("slideshow");

function showSlide() {
  slideshow.innerHTML = `<h4>${slides[slideIndex]}</h4>`;
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlide, 2000);
showSlide();

