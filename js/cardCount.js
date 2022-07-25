const cardCountWrapper = document.querySelector(".card__count");
cardCountWrapper.addEventListener("click", (e) => {
  const count = cardCountWrapper.querySelector(".card__count-input");
  const btnMinus = cardCountWrapper.querySelector(".card__count-minus");
  const btnPlus = cardCountWrapper.querySelector(".card__count-plus");
  if (e.target === btnMinus) {
    if (count.value > 1) {
      count.value--;
    }
  }
  if (e.target === btnPlus) {
    if (count.value < 99) {
      count.value++;
    }
  }
});
