// табы для превью

const previeSmallItems = document.querySelectorAll(".card__preview-small-item");
const PreviewBigItems = document.querySelectorAll(".card__preview-big-item");

previeSmallItems.forEach(cardPreviewFn);

function cardPreviewFn(item) {
  item.addEventListener("click", function (e) {
    let tabId = item.getAttribute("data-href");
    let currentTab = document.querySelector(tabId);

    if (!item.classList.contains("card__preview-small-item-active")) {
      // Убираем у каждой кнопки класс Active при клике на кнопку
      previeSmallItems.forEach(function (item) {
        item.classList.remove("card__preview-small-item-active");
      });
      // а затем присваиваем класс Active кнопке на которую нажали
      item.classList.add("card__preview-small-item-active");
      //  Тоже самое и с табами и их контентом
      PreviewBigItems.forEach(function (bigitem) {
        bigitem.classList.remove("card__preview-big-item-active");
      });
      currentTab.classList.add("card__preview-big-item-active");
    }
  });
}

// имитация клика по табу после загрузки страницы
document.querySelector(".card__preview-small-item").click();

// табы для описания товара
const cardItemBtns = document.querySelectorAll(".card__tab");
const cardItemContent = document.querySelectorAll(".card__content");

cardItemBtns.forEach(cardTabsFn);

function cardTabsFn(item) {
  item.addEventListener("click", function (e) {
    let tabId = item.getAttribute("data-href");
    let currentTab = document.querySelector(tabId);

    if (!item.classList.contains("card__tab-active")) {
      // Убираем у каждой кнопки класс Active при клике на кнопку
      cardItemBtns.forEach(function (item) {
        item.classList.remove("card__tab-active");
      });
      // а затем присваиваем класс Active кнопке на которую нажали
      item.classList.add("card__tab-active");

      //  Тоже самое и с табами и их контентом
      cardItemContent.forEach(function (tabCont) {
        tabCont.classList.remove("card__content-active");
      });
      currentTab.classList.add("card__content-active");
    }
  });
}

// имитация клика по табу после загрузки страницы
document.querySelector(".card__tab").click();

// табы для мобилок

cardMobileTabs = document.querySelectorAll(".card__tab-mobile");
cardMobileTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabParent = tab.parentNode;
    if (!tabParent.classList.contains("card-tab-mobile-active")) {
      tabParent.classList.add("card-tab-mobile-active");
    } else {
      tabParent.classList.remove("card-tab-mobile-active");
    }
  });
});
