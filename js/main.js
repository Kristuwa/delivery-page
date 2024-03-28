document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".questions__list");
  const items = document.querySelectorAll(".questions__item");
  const btn = document.querySelector(".btn");
  const itemWidth = items[0].offsetWidth;
  let currentIndex = 0;

  btn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex > items.length) {
      currentIndex = 0;
      slider.style.transition = "none"; // Отключаем анимацию для плавного перехода к началу
      slider.style.transform = `translateX(0px)`; // Перемещаемся к началу списка без анимации
      setTimeout(() => {
        slider.style.transition = ""; // Возвращаем анимацию после перехода к началу списка
      }, 50);
    }
    updateSlider();
  });

  function updateSlider() {
    const offset = -currentIndex * itemWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }
});
