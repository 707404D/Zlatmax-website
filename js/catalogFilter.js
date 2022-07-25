// открытие/закрытие вкладок фильтра

const filterCategories = document.querySelectorAll(".catalog__filter-cat");
filterCategories.forEach((item) => {
  const itemBtn = item.querySelector(".catalog__filter-cat-btn");
  itemBtn.addEventListener("click", () => {
    item.classList.toggle("catalog__filter-cat-active");
  });
});

// функции

const catalogFilter = document.querySelector(".catalog__filter");
// инпуты для цены
const catalogFilterInputsPrice = catalogFilter
  .querySelector(".catalog__filter-price")
  .getElementsByTagName("input");
//   инпуты для "производство"
const catalogFilterInputsCreator = catalogFilter.querySelectorAll(
  "input[data-creator]"
);
// инпуты для "сталь"
const catalogFilterInputsSteel =
  catalogFilter.querySelectorAll("input[data-steel]");
// инпуты для "рукоять"
const catalogFilterInputsHand =
  catalogFilter.querySelectorAll("input[data-hand]");
// инпуты для "гарды"
const catalogFilterInputsGard =
  catalogFilter.querySelectorAll("input[data-gard]");
// инпуты для "золочения"
const catalogFilterInputsGolden =
  catalogFilter.querySelectorAll("input[data-golden]");
// инпуты для общей длинны
const catalogFilterInputsLenght =
  catalogFilter.querySelectorAll("input[data-lenght]");
//   инпуты для длинны клинка
const catalogFilterInputsBladeLenght = catalogFilter.querySelectorAll(
  "input[data-bladelenght]"
);
//   инпуты для ширины клинка
const catalogFilterInputsBladeWidth = catalogFilter.querySelectorAll(
  "input[data-bladewidth]"
);
//   инпуты для рейтинга
const catalogFilterInputsRating =
  catalogFilter.querySelectorAll("input[data-rating]");

const catalogFilterFn = () => {
  //   фильтр для основной цены
  for (input of catalogFilterInputsPrice) {
    const filtFn = () => {
      const priceValueMin = document.getElementById("price-min").value;
      const priceValueMax = document.getElementById("price-max").value;
      const catalogItemsFilter = document.querySelectorAll(".block__cart");

      catalogItemsFilter.forEach((item) => {
        item.style.display = "none";
        const itemPrice = item.querySelector(
          ".block__cart-price > span"
        ).innerText;
        if (+itemPrice <= priceValueMax && +itemPrice >= priceValueMin) {
          item.style.display = "flex";
        }
      });
    };
    input.addEventListener("input", () => {
      filtFn();
    });

    const slidersBtn = document
      .querySelector(".catalog__filter-price-slider")
      .querySelectorAll("div[data-handle]");
    slidersBtn.forEach((btn) => {
      btn.addEventListener("mouseup", () => {
        setTimeout(() => {
          filtFn();
        }, 500);
      });
    });
  }

  // фильтр для производства
  for (input of catalogFilterInputsCreator) {
    const inputData = input.dataset.creator.toLowerCase();

    input.addEventListener("click", (e) => {
      if (e.target.checked) {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "none";
          const itemBrand = item.getAttribute("data-creator").toLowerCase();
          if (inputData === itemBrand) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      } else {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "flex";
        });
      }
    });
  }
  // фильтр для стали
  for (input of catalogFilterInputsSteel) {
    const inputData = input.dataset.steel.toLowerCase();

    input.addEventListener("click", (e) => {
      if (e.target.checked) {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "none";
          const itemBrand = item.getAttribute("data-steel").toLowerCase();
          if (inputData === itemBrand) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      } else {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "flex";
        });
      }
    });
  }

  // фильтр для рукояти
  for (input of catalogFilterInputsHand) {
    const inputData = input.dataset.hand.toLowerCase();

    input.addEventListener("click", (e) => {
      if (e.target.checked) {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "none";
          const itemBrand = item.getAttribute("data-hand").toLowerCase();
          if (inputData === itemBrand) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      } else {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "flex";
        });
      }
    });
  }

  // фильтр для гарда и натыльник
  for (input of catalogFilterInputsGard) {
    const inputData = input.dataset.gard.toLowerCase();

    input.addEventListener("click", (e) => {
      if (e.target.checked) {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "none";
          const itemBrand = item.getAttribute("data-gard").toLowerCase();
          if (inputData === itemBrand) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      } else {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "flex";
        });
      }
    });
  }
  // фильтр для золочения
  for (input of catalogFilterInputsGolden) {
    const inputData = input.dataset.golden.toLowerCase();

    input.addEventListener("click", (e) => {
      if (e.target.checked) {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "none";
          const itemBrand = item.getAttribute("data-golden").toLowerCase();
          if (inputData === itemBrand) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      } else {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "flex";
        });
      }
    });
  }

  // фильтр для общей длинны
  //
  for (input of catalogFilterInputsLenght) {
    const filtFn = () => {
      const LenghtValueMin = document.getElementById("inputLenghtMin").value;
      const LenghtValueMax = document.getElementById("inputLenghtMax").value;
      const catalogItemsFilter = document.querySelectorAll(".block__cart");

      catalogItemsFilter.forEach((item) => {
        item.style.display = "none";
        const itemLenght = +item.getAttribute("data-lenght");
        if (itemLenght <= LenghtValueMax && itemLenght >= LenghtValueMin) {
          item.style.display = "flex";
        }
      });
    };
    input.addEventListener("input", () => {
      filtFn();
    });

    const slidersBtn = document
      .querySelector(".catalog__filter-range-lenght")
      .querySelectorAll("div[data-handle]");
    slidersBtn.forEach((btn) => {
      btn.addEventListener("mouseup", () => {
        setTimeout(() => {
          filtFn();
        }, 500);
      });
    });
  }
  //    фильтр для длинны клинка
  for (input of catalogFilterInputsBladeLenght) {
    const filtFn = () => {
      const BladeLenghtValueMin = document.getElementById(
        "inputBladeLenghtMin"
      ).value;
      const BladeLenghtValueMax = document.getElementById(
        "inputBladeLenghtMax"
      ).value;
      const catalogItemsFilter = document.querySelectorAll(".block__cart");

      catalogItemsFilter.forEach((item) => {
        item.style.display = "none";
        const itemBladeLenght = +item.getAttribute("data-blade");
        if (
          itemBladeLenght <= BladeLenghtValueMax &&
          itemBladeLenght >= BladeLenghtValueMin
        ) {
          item.style.display = "flex";
        }
      });
    };
    input.addEventListener("input", () => {
      filtFn();
    });

    const slidersBtn = document
      .querySelector(".catalog__filter-range-bladelenght")
      .querySelectorAll("div[data-handle]");
    slidersBtn.forEach((btn) => {
      btn.addEventListener("mouseup", () => {
        setTimeout(() => {
          filtFn();
        }, 500);
      });
    });
  }
  //    фильтр для ширины клинка
  for (input of catalogFilterInputsBladeWidth) {
    const filtFn = () => {
      const BladeWidthtValueMin =
        document.getElementById("inputBladeWidthMin").value;
      const BladeWidthtValueMax =
        document.getElementById("inputBladeWidthMax").value;
      const catalogItemsFilter = document.querySelectorAll(".block__cart");

      catalogItemsFilter.forEach((item) => {
        item.style.display = "none";
        const itemBladeWidth = +item.getAttribute("data-bladewidth");
        if (
          itemBladeWidth <= BladeWidthtValueMax &&
          itemBladeWidth >= BladeWidthtValueMin
        ) {
          item.style.display = "flex";
        }
      });
    };
    input.addEventListener("input", () => {
      filtFn();
    });

    const slidersBtn = document
      .querySelector(".catalog__filter-range-bladewidth")
      .querySelectorAll("div[data-handle]");
    slidersBtn.forEach((btn) => {
      btn.addEventListener("mouseup", () => {
        setTimeout(() => {
          filtFn();
        }, 500);
      });
    });
  }
  // фильтр для рейтинга

  for (input of catalogFilterInputsRating) {
    const inputData = input.dataset.rating;

    input.addEventListener("click", (e) => {
      if (e.target.checked) {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "none";
          const itemRating = item
            .querySelector(".block__cart-rating")
            .getAttribute("data-rating");
          if (inputData === itemRating) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      } else {
        const catalogItemsFilter = document.querySelectorAll(".block__cart");
        catalogItemsFilter.forEach((item) => {
          item.style.display = "flex";
        });
      }
    });
  }
};
catalogFilterFn();




