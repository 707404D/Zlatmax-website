const headerPhoneSelect = document.querySelector(".header__call-select");
const headerPhoneSelectDefault = headerPhoneSelect.querySelector(
  ".header__call-select-default"
);
const headerPhoneSelectLabels = headerPhoneSelect.querySelectorAll(
  ".header__call-select-label"
);

// Toggle menu
headerPhoneSelectDefault.addEventListener("click", () => {
  if ("active" === headerPhoneSelect.getAttribute("data-state")) {
    headerPhoneSelect.setAttribute("data-state", "");
  } else {
    headerPhoneSelect.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < headerPhoneSelectLabels.length; i++) {
  headerPhoneSelectLabels[i].addEventListener("click", (evt) => {
    headerPhoneSelectDefault.textContent = evt.target.textContent;
    headerPhoneSelect.setAttribute("data-state", "");
  });
}

