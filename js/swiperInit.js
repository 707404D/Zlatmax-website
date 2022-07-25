const main = document.querySelector(".main");

if (main.classList.contains("main-index")) {
  // слайдер для превью
  new Swiper(".preview__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //   кастомные буллеты
      renderBullet: function (index, className) {
        return (
          '<span  class="preview__slider-bullet ' +
          className +
          '" ' +
          'data-index="' +
          (index + 1) +
          '"' +
          ">" +
          "</span>"
          
        );
      },
    },
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,
    loop: true,
    effect: "slide"
  });

  //  подсчет слайдов (вторая цифровая пагинация)
  // при клике
  const CountUpdate = () => {
    const TotalSlidesCountData = document.querySelectorAll(
      ".preview__slider-bullet"
    );
    const totalSlidesCountHTML = document.querySelector(
      ".preview__slider-count-total"
    );

    totalSlidesCountHTML.innerText = TotalSlidesCountData.length;

    TotalSlidesCountData.forEach((item) => {
      const itemIndexData = item.getAttribute("data-index");
      const currentSlideHTML = document.querySelector(
        ".preview__slider-current"
      );

      item.addEventListener("click", (e) => {
        currentSlideHTML.innerText = "0" + itemIndexData;
      });
    });
  };

  const previewSlider = document.querySelector(".preview");
  previewSlider.addEventListener("mousemove", () => {
    const TotalSlidesCountData = document.querySelectorAll(
      ".preview__slider-bullet"
    );
    TotalSlidesCountData.forEach((item) => {
      if (item.classList.contains("swiper-pagination-bullet-active")) {
        item.click();
      }
    });
  });

  CountUpdate();

  // другие слайдеры
  // слайдеры для категорий (хиты, акции)
  new Swiper(".block__carts-slider", {
    
    pagination: {
      el: ".block__carts-slider-bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span  class="preview__slider-bullet ' +
          className +
          '" ' +
          'data-index="' +
          (index + 1) +
          '"' +
          ">" +
          "</span>"
        );
      },
    },
     effect: "slide", 
    
    // адаптивность
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
      575: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      875: {
        spaceBetween: 15,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
    },
  });
  // слайдеры для новинок
  new Swiper(".block__carts-slider-news", {
    
    pagination: {
      el: ".block__carts-slider-bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span  class="preview__slider-bullet ' +
          className +
          '" ' +
          'data-index="' +
          (index + 1) +
          '"' +
          ">" +
          "</span>"
        );
      },
    },
    effect: "slide", 
    
    // адаптивность
    breakpoints: {
      300: {
        slidesPerView: 1,
        //   slidesPerGroup: 3,
        slidesPerColumn: 3,
        spaceBetween: 25,
        grid: {
          rows: 3,
        },
      },
      575: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 25,
      },
      875: {
        spaceBetween: 10,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });
}
if (main.classList.contains("main-card")) {
  new Swiper(".block__carts-slider", {
    
    pagination: {
      el: ".block__carts-slider-bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span  class="preview__slider-bullet ' +
          className +
          '" ' +
          'data-index="' +
          (index + 1) +
          '"' +
          ">" +
          "</span>"
        );
      },
    },

    
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
      575: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      875: {
        spaceBetween: 15,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
    },
    effect: "slide", 
  });

  // слайдер для превью картинок(только для мобилок)
  new Swiper(".card__preview-mobile", {
    effect: "slide", //дефолт
    
    breakpoints: {
      285: {
        spaceBetween: 15,
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        grabCursor: true,
      },
      767: {},
    },
  });
}
