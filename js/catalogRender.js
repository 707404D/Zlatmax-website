// рендерим карточки из урла
const url = "./json/catalogProducts.json";
const moreProducts = showProducts(url);
// обновляем рейтинг
const moreProductsRatingUp = ratingUpdate(moreProducts);

const reviewTextFn = reviewTextUpdate(moreProductsRatingUp);
async function CatalogItems(func) {
  // обновляем текст в карточках
  await func;
  // добавляем интерактивные кнопки
  const incartBtns = document.querySelectorAll(".block__cart-btn");
  incartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("incart")) {
        btn.classList.add("incart");
        btn.querySelector("span").innerText = "В корзине";
      } else {
        btn.classList.remove("incart");
        btn.querySelector("span").innerText = "В корзину";
      }
    });
  });
}
CatalogItems(reviewTextFn);
