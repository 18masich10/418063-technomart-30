/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlider() {
  showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlider() {
  showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlider(n) {
  showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
  /* Обращаемся к элементам слайдера, то есть к картинкам: */
  let slides = document.getElementsByClassName("slider__content-item");

  /* Проверяем количество слайдов: */
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  /* Проходим по каждому слайду в цикле for: */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  /* Делаем элемент блочным: */
  slides[slideIndex - 1].style.display = "block";
}
