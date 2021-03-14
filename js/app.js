/* Скрипт для блока "Сервис" - табы */

const tabsBtn = document.querySelectorAll(".services__btn");
const tabsItems = document.querySelectorAll(".services__btn-desc-item");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");

      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");

      });
    }

    currentBtn.classList.add("active");
    currentTab.classList.add("active");
  });

});

document.querySelector(".services__btn").click();
