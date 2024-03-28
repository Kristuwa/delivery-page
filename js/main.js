document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const button = slider.querySelector("button");
  const list = slider.querySelector(".questions__list");
  const items = slider.querySelectorAll(".questions__item");

  // Получаем ширину одного элемента вопроса в vw
  const itemWidth = 0.93; // Ширина между элементами в vw

  let currentPosition = 0;

  button.addEventListener("click", function () {
    // Добавляем ширину элемента вопроса к расстоянию между элементами при смещении
    currentPosition -=
      ((itemWidth + 1) * items[0].offsetWidth) /
      document.documentElement.clientWidth;

    // Устанавливаем границу, при достижении которой мы возвращаемся в начало списка
    if (currentPosition < -itemWidth * 3) {
      currentPosition = 0;
    }

    items.forEach((item) => {
      // Смещаем каждый элемент на расстояние itemWidth плюс ширина элемента вопроса
      item.style.transform = `translateX(${currentPosition * 100}vw)`;
    });
  });
});
