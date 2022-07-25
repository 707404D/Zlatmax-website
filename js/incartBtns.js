const incartBtn = document.querySelector(".card__btn-incart");
incartBtn.addEventListener("click", () => {
  if (!incartBtn.classList.contains("incart-active")) {
    incartBtn.classList.add("incart-active");
    incartBtn.querySelector("span").innerText = "В корзине";
  } else {
    incartBtn.classList.remove("incart-active");
    incartBtn.querySelector("span").innerText = "В корзину";
  }
});
