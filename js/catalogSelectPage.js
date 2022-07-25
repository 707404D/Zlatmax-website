// находим input
const catalogSelectPage = document.querySelector("#page-number");

catalogSelectPage.addEventListener("change", () => {
  // берем номер страницы
  const chosenPageNumber = catalogSelectPage.value;
  // создаем ссылку
  const linkHTML = `<a href="catalog#${chosenPageNumber}.html"></a>`;
  // помещаем ссылку с выбранным номером страницы в инпут
  catalogSelectPage.insertAdjacentHTML("beforeend", linkHTML);
  // находим его
  const link = catalogSelectPage.querySelector("a");
  // имитируем клик по нему, когда пользователь закончит с вводом, нажмет на ентер, или расфокусит инпут(событие change)
  link.click();
});
