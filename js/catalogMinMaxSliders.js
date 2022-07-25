// Общая функция для слайдеров

// Функция создающая слайдер.
// Аргументы: (полоска, inputMin, inputMax, начальное значение при старте, конечное значение при старте, минимальное значение слайдера, максимальное значение слайдера, шаг слайдера)
let funcForSliders = (
  rangeSlider,
  minInput,
  maxInput,
  sliderStart,
  sliderEnd,
  sliderMinVal,
  sliderMaxVal,
  sliderStepVal,
  otherFunc
) => {
  // создаем функцию инициализации слайдера
  const range = rangeSlider; // Ищем слайдер
  const inputMin = minInput; // Ищем input с меньшим значнием
  const inputMax = maxInput; // Ищем input с большим значнием
  const sliderStartValue = sliderStart;
  const sliderEndValue = sliderEnd;
  const sliderMinValue = sliderMinVal;
  const sliderMaxValue = sliderMaxVal;
  const sliderStepValue = sliderStepVal;
  const sliderOtherFunc = otherFunc;
  //   const sliderStepValue = sliderStep;
  if (!range || !inputMin || !inputMax) return; // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  noUiSlider.create(range, {
    // инициализируем слайдер
    start: [sliderStartValue, sliderEndValue], // устанавливаем начальные значения
    connect: true, // указываем что нужно показывать выбранный диапазон
    range: {
      // устанавливаем минимальное и максимальное значения
      min: sliderMinValue,
      max: sliderMaxValue,
    },
    step: sliderStepValue, // шаг изменения значений
  });

  range.noUiSlider.on("update", function (values, handle) {
    // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener("change", function () {
    // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener("change", function () {
    // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
  });
};

// Слайдер для цены

const priceRange = document.getElementById("price-range"); // Ищем слайдер
const priceInputMin = document.getElementById("price-min"); // Ищем input с меньшим значнием
const priceInputMax = document.getElementById("price-max"); // Ищем input с большим значнием
funcForSliders(
  priceRange,
  priceInputMin,
  priceInputMax,
  400,
  6000,
  200,
  8000,
  10
);

// Все остальные слайдеры
const slidersAll = document.querySelectorAll(".catalog__filter-range");
slidersAll.forEach((item) => {
  const itemSlider = item.querySelector(".catalog__filter-slider > div");

  const itemRangeMin = item.querySelector(".catalog__filter-input-min");

  const itemRangeMax = item.querySelector(".catalog__filter-input-max");

  // Аргументы: (полоска, inputMin, inputMax, начальное значение при старте, конечное значение при старте, минимальное значение слайдера, максимальное значение слайдера, шаг слайдера)
  funcForSliders(itemSlider, itemRangeMin, itemRangeMax, 15, 55, 10, 80, 1);
});
