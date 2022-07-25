// функционал для catalog select

const catalogSelect = document.querySelector(".catalog__select");
const catalogSelectDefault = catalogSelect.querySelector(
  ".catalog__select-default"
);
const catalogSelectLabels = catalogSelect.querySelectorAll(
  ".catalog__select-lable"
);

// Toggle menu
catalogSelectDefault.addEventListener("click", () => {
  if ("active" === catalogSelect.getAttribute("data-state")) {
    catalogSelect.setAttribute("data-state", "");
  } else {
    catalogSelect.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < catalogSelectLabels.length; i++) {
  catalogSelectLabels[i].addEventListener("click", (evt) => {
    catalogSelectDefault.textContent = evt.target.textContent;
    catalogSelect.setAttribute("data-state", "");

    const catalogItemAll = document.querySelectorAll(".block__cart");
    // фильтр по популярности
    if (
      evt.target ===
      catalogSelect.querySelector(".catalog__select-lable-popular")
    ) {
      catalogItemAll.forEach((item) => {
        item.style.display = "none";
        const reviews = +item.querySelector(".block__cart-reviews-count")
          .innerText;

        if (reviews >= 30) {
          item.style.display = "flex";
        }
      });
    }
    //   фильтр 'сначала дорогие'
    if (
      evt.target ===
      catalogSelect.querySelector(".catalog__select-lable-expensive")
    ) {
      catalogItemAll.forEach((item) => {
        item.style.display = "none";
        const price = +item.querySelector(".block__cart-price > span")
          .innerText;

        if (price > 5000) {
          item.style.display = "flex";
        }
      });
    }

    //  фильтр "сначала дешевые"

    if (
      evt.target === catalogSelect.querySelector(".catalog__select-lable-cheap")
    ) {
      catalogItemAll.forEach((item) => {
        item.style.display = "none";
        const price = +item.querySelector(".block__cart-price > span")
          .innerText;

        if (price < 2000) {
          item.style.display = "flex";
        }
      });
    }

    //  фильтр "с отзывами"

    if (
      evt.target ===
      catalogSelect.querySelector(".catalog__select-lable-reviews")
    ) {
      catalogItemAll.forEach((item) => {
        item.style.display = "none";
        const reviews = +item.querySelector(".block__cart-reviews > span")
          .innerText;

        if (reviews >= 1) {
          item.style.display = "flex";
        }
      });
    }
  });
}
