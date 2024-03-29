document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".questions__list");
  const items = document.querySelectorAll(".questions__item");
  const btn = document.querySelector(".btn");
  const itemWidth = items[0].offsetWidth + (2 * 1280) / 100;

  const numVisibleItems = Math.ceil(
    document.querySelector(".slider").offsetWidth / itemWidth
  );
  let currentIndex = 0;

  btn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex + numVisibleItems > items.length) {
      currentIndex = 0;
    }
    updateSlider();
  });

  function updateSlider() {
    const offset = -currentIndex * itemWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }
});
