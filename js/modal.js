const burger = document.querySelector(".nav__link-mobile-burger");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelectorAll(".modal__close");
const modalLinkCatalog = document.querySelector(".modal__link--catalog");
const modalSubMenu = document.querySelector(".modal__links-submenu");
const subMenuLinks = document.querySelectorAll(".modal__links-sub-link");
const subMenuItems = document.querySelectorAll(".modal__links-submenu-item");
// бургер
burger.addEventListener("click", () => {
  modal.classList.add("modal__active");
});

// кнопка закрытия модалки
modalCloseBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("modal__active");
    modalSubMenu.classList.remove("modal__submenu-active");
    subMenuItems.forEach((submenu) => {
      submenu.classList.remove("modal__submenu-item-active");
    });
  });
});

modalLinkCatalog.addEventListener("click", () => {
  modalSubMenu.classList.add("modal__submenu-active");
});

subMenuLinks.forEach(subMenuFn);

function subMenuFn(link) {
  link.addEventListener("click", function (e) {
    let currentLink = link;
    let tabId = currentLink.getAttribute("href");
    let currentCont = document.querySelector(tabId);

    //  Тоже самое и с табами и их контентом
    subMenuItems.forEach(function (item) {
      item.classList.remove("modal__submenu-item-active");
    });
    currentCont.classList.add("modal__submenu-item-active");
  });
}

// кнопка назад
const modalBtnBack = document.querySelectorAll(".modal__links-submenu-back");
modalBtnBack.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentNode.parentNode;
    if (parent.classList.contains("modal__submenu-active")) {
      parent.classList.remove("modal__submenu-active");
    }
    if (parent.classList.contains("modal__submenu-item-active")) {
      parent.classList.remove("modal__submenu-item-active");
    }
  });
});
