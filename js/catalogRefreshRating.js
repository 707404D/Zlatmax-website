async function ratingUpdate(products) {
  await products;
  //   await showProducts(urlMore);
  const catalogItemsAll = document.querySelectorAll(".block__cart");
  catalogItemsAll.forEach((item) => {
    const rating = item.querySelector(".block__cart-rating").dataset.rating;
    let itemRating = item.querySelector(".block__cart-rating-stars-active");
    itemRating.style.width = `${+rating}%`;
  });
}
