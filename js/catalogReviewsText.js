async function reviewTextUpdate(result) {
  //   await ratingUpdate();
  await result;
  const catalogItemsAll = document.querySelectorAll(".block__cart");
  catalogItemsAll.forEach((item) => {
    let itemReviewsCount = item.querySelector(".block__cart-reviews-count");
    let itemReviewsText = item.querySelector(".block__cart-reviews-text");
    if (0 === +itemReviewsCount.innerText) {
      itemReviewsCount.innerText = " ";
      itemReviewsText.innerText = " Отзывов нет";
    }
    if (1 === +itemReviewsCount.innerText) {
      itemReviewsText.innerText = " отзыв";
    }
    if (+itemReviewsCount.innerText > 4) {
      itemReviewsText.innerText = " отзывов";
    }
  });
}
