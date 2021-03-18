/* Скрипт для модального окна "Обратная связь" */

const messageLink = document.querySelector(".company__details-address");
const messagePopup = document.querySelector(".modal__message");
const messageClose = messagePopup.querySelector(".modal__close-message");
const messageForm = messagePopup.querySelector(".modal__message-form");
const messageUserName = messagePopup.querySelector("[name=name]");
const messageUserEmail = messagePopup.querySelector("[name=email]");
const messageUserText = messagePopup.querySelector("[name=message]");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

messageLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");

  if (storage) {
    messageUserName.value = storage;
    messageUserEmail.focus();
  } else {
    messageUserName.focus();
  }
});

messageClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
  messagePopup.classList.remove("modal-error");
});

messageForm.addEventListener("submit", function(evt) {

  if (!messageUserName.value || !messageUserEmail.value || !messageUserText.value) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-error");
    messagePopup.offsetWidth = messagePopup.offsetWidth;
    messagePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", messageUserName.value);
    }
  }
});

messageUserName.required = false;
messageUserEmail.required = false;

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (messagePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
      messagePopup.classList.remove("modal-error");
    }
  }
});
