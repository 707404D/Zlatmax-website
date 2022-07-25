//  находим контейнер для айтемов
const catalogProductsContainer = document.querySelector(
  ".catalog__items-wrapper"
);

// по клику на кнопку "Показать еще" рендерим товары
const showMoreBtn = document.querySelector(".catalog__main-btn");
showMoreBtn.addEventListener("click", () => {
  //   reviewTextUpdate();

  const urlMore = "./json/catalogMoreProducts.json";
  const moreMoreProductsRatingUpdate = showProducts(urlMore);
  const moreProductsRatingUp = ratingUpdate(moreMoreProductsRatingUpdate);
  const moreProductsReviewTextUpdate = reviewTextUpdate(moreProductsRatingUp);
  CatalogItems(moreProductsReviewTextUpdate);
});

// рендерим карточки

async function showProducts(url) {
  // получаем данные из catalogProducts.json
  const responseProducts = await fetch(url);

  // парсим данные из json формата в js
  const catalogProductsArray = await responseProducts.json();

  // запускаем функцию рендера(отображения товаров)
  catalogRenderProducts(catalogProductsArray);
}

// функция рендера

function catalogRenderProducts(catalogProductsArray) {
  catalogProductsArray.forEach(function (item) {
    // создаем шаблон карточки, копируем из html и заполняем данными с помощью шаблонных строк, ${item.id} -  данные из json

    const catalogProductHTML = `<div class="block__cart" data-bladewidth="${item.bladewidth}" data-blade="${item.bladelenght}" data-lenght="${item.lenght}" data-golden="${item.golden}" data-gard="${item.gard}" data-hand="${item.hand}" data-steel="${item.materialData}"  data-creator="${item.creator}" data-popular="${item.popularCount}">
                  <a href="cart.html" class="block__cart-img">
                    <img src="./img/block__items/${item.img}" alt="" />
                  </a>
                  <span class="block__cart-title">${item.title}</span>
                  <div class="block__cart-text">
                    <span class="block__cart-size">${item.size}</span>
                    <span class="block__cart-material"  data-material="${item.materialData}">${item.material}</span>
                  </div>
                  <div class="block__cart-rating" data-rating="${item.rating}">
                    <div class="block__cart-rating-stars">
                      <div class="block__cart-rating-stars-active"></div>
                    </div>

                    <div class="block__cart-reviews">
                      <span class="block__cart-reviews-count"
                        >${item.reviewsCount}</span
                      >
                      <span class="block__cart-reviews-text">отзывов</span>
                    </div>
                  </div>
                  <div class="block__cart-prices">
                    <div class="block__cart-price">
                      <span>${item.price}</span> р.
                    </div>
                    <div class="block__cart-icon">
                      <a href="" class="block__cart-weigh">
                        <svg
                          viewBox="0 0 26 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.9558 12.5275L25.9337 12.5386L22.2036 3.25484H23.9056C24.2108 3.25484 24.4582 3.00741 24.4582 2.70223C24.4582 2.39706 24.2108 2.14963 23.9056 2.14963H13.5056V0.552604C13.5056 0.247428 13.2582 0 12.953 0C12.6479 0 12.4004 0.247428 12.4004 0.552604V2.1441H2.00595C1.70078 2.1441 1.45335 2.39153 1.45335 2.69671C1.45335 3.00188 1.70078 3.24931 2.00595 3.24931H3.77981L0.0442083 12.5275C0.0165781 12.5922 0.00158874 12.6617 0 12.732C0 15.2697 2.0572 17.3269 4.5949 17.3269C7.13259 17.3269 9.1898 15.2697 9.1898 12.732C9.18821 12.6617 9.17322 12.5922 9.14559 12.5275L5.41552 3.24378H12.4004V20.3303C9.76451 20.5292 7.70329 22.1318 7.70329 24.0714C7.70329 24.3766 7.95072 24.624 8.2559 24.624H17.6502C17.9553 24.624 18.2028 24.3766 18.2028 24.0714C18.2028 22.1318 16.1416 20.5292 13.5056 20.3303V3.24378H20.5624L16.8544 12.5275C16.8268 12.5922 16.8118 12.6617 16.8102 12.732C16.8102 15.2697 18.8674 17.3269 21.4051 17.3269C23.9428 17.3269 26 15.2697 26 12.732C25.9984 12.6617 25.9834 12.5922 25.9558 12.5275ZM4.59214 16.23C2.88058 16.2276 1.42295 14.9852 1.14942 13.2956H8.01275C7.74059 14.977 6.29533 16.2168 4.59214 16.23ZM7.81382 12.1904H1.38151L4.60319 4.17216L7.81382 12.1904ZM16.9981 23.5188H8.90244C9.31137 22.3307 10.9968 21.4134 12.9475 21.4134C14.8982 21.4134 16.5892 22.3307 16.9981 23.5188ZM21.3802 4.17768L24.5909 12.1904H18.1586L21.3802 4.17768ZM21.3802 16.23V16.2355C19.6752 16.2219 18.2294 14.9792 17.9596 13.2956H24.823C24.5494 14.9852 23.0918 16.2276 21.3802 16.23Z"
                          />
                        </svg>
                      </a>
                      <a href="" class="block__cart-wish">
                        <svg
                          viewBox="0 0 28 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.1004 0C17.7169 0 15.4856 1.00889 14 2.69927C12.5144 1.00883 10.2832 0 7.89957 0C3.54375 0 0 3.31281 0 7.3849C0 10.5735 2.03385 14.2616 6.04492 18.3468C9.13175 21.4906 12.4897 23.9248 13.4454 24.596L13.9998 24.9854L14.5543 24.5961C15.5099 23.9249 18.868 21.4907 21.9549 18.347C25.9661 14.2618 28 10.5736 28 7.3849C28 3.31281 24.4562 0 20.1004 0ZM20.5948 17.1798C18.0558 19.7656 15.3242 21.8559 13.9998 22.8193C12.6755 21.8559 9.944 19.7656 7.40498 17.1797C3.76837 13.476 1.84615 10.0889 1.84615 7.3849C1.84615 4.26452 4.56172 1.72587 7.89957 1.72587C10.0961 1.72587 12.1243 2.84504 13.1927 4.64668L14 6.00817L14.8073 4.64668C15.8756 2.8451 17.9038 1.72587 20.1004 1.72587C23.4383 1.72587 26.1538 4.26446 26.1538 7.3849C26.1538 10.0891 24.2316 13.4761 20.5948 17.1798Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                   <button type="button" class="block__cart-btn">
                  <span>В корзину</span>
                </button>
                </div>`;

    // добавляем в html карточки
    catalogProductsContainer.insertAdjacentHTML(
      "beforeend",
      catalogProductHTML
    );
  });
}
