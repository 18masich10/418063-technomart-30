/* Скрипт для блока "Ассортимент товара" - слайдер */

let slideIndex = 1;

showSlides(slideIndex);
function nextSlider() {
  showSlides(slideIndex += 1);
}

function previousSlider() {
  showSlides(slideIndex -= 1);
}

function currentSlider(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let slides = document.getElementsByClassName("slider__content-item");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
