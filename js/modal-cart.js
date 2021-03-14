/* Скрипт для модального окна "Товар добавлен в корзину" */

const cartLink = document.querySelectorAll(".add-item-cart");
const cartPopup = document.querySelector(".modal__cart");
const cartClose = cartPopup.querySelector(".modal__close-cart");

cartLink.forEach((evt) => {
  evt.onclick = () => {
    cartPopup.classList.add("modal-show");
  }
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
