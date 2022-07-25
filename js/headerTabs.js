const headerTabs = document.querySelectorAll(".header__tab");
const headerTabsContent = document.querySelectorAll(".header__content");

headerTabs.forEach(headerTabsFn);

function headerTabsFn(item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-href");
    let currentTab = document.querySelector(tabId);

    // Проверка: если у кнопки нет класс Active, то он выдается
    if (!currentBtn.classList.contains("headeractivetab")) {
      // Убираем у каждой кнопки класс Active при клике на кнопку
      headerTabs.forEach(function (item) {
        item.classList.remove("headeractivetab");
      });
      // а затем присваиваем класс Active кнопке на которую нажали
      currentBtn.classList.add("headeractivetab");

      //  Тоже самое и с табами и их контентом
      headerTabsContent.forEach(function (item) {
        item.classList.remove("headeractivecontent");
      });
      currentTab.classList.add("headeractivecontent");
    } else {
      currentBtn.classList.remove("headeractivetab");
      currentTab.classList.remove("headeractivecontent");
    }
  });
}
// скрываем блоки, если нажали вне табов и инфы табов

document.addEventListener("click", function (e) {
  if (
    !e.target.closest(".header__tab") &&
    !e.target.closest(".header__content")
  ) {
    headerTabs.forEach(function (item) {
      item.classList.remove("headeractivetab");
    });
    headerTabsContent.forEach(function (item) {
      item.classList.remove("headeractivecontent");
    });
  }
});
