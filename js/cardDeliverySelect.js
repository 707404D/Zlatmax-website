const cardDeliverySelectors = document.querySelectorAll(
  ".card__delivery-select"
);

// Toggle menu
cardDeliverySelectors.forEach((select) => {
  let cardSelectDefault = select.querySelector(
    ".card__delivery-select-default"
  );
  if (cardSelectDefault) {
    cardSelectDefault.addEventListener("click", () => {
      if ("active" === select.getAttribute("data-state")) {
        select.setAttribute("data-state", "");
      } else {
        select.setAttribute("data-state", "active");
      }
    });
    const selectLabels = select.querySelectorAll(
      ".card__delivery-select-label"
    );

    selectLabels.forEach((label) => {
      label.addEventListener("click", (e) => {
        cardSelectDefault.textContent = e.target.textContent;
        select.setAttribute("data-state", "");
      });
    });
  }
});
