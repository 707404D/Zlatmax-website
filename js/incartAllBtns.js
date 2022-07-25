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
