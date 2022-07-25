const cardSelectors = document.querySelectorAll(".card__select");

// Toggle menu
cardSelectors.forEach((select) => {
  let cardSelectDefault = select.querySelector(".card__select-default");
  if (cardSelectDefault) {
    cardSelectDefault.addEventListener("click", () => {
      if ("active" === select.getAttribute("data-state")) {
        select.setAttribute("data-state", "");
      } else {
        select.setAttribute("data-state", "active");
      }
    });
    const selectLabels = select.querySelectorAll(".card__select-label");

    selectLabels.forEach((label) => {
      label.addEventListener("click", (e) => {
        cardSelectDefault.textContent = e.target.textContent;
        select.setAttribute("data-state", "");
      });
    });
  }
});
