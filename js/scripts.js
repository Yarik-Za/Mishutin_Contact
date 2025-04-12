window.addEventListener("load", () => {
  // Получаем текущий год
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("year_creation");
  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  // Автоматический расчет возраста
  const birthDate = new Date(2004, 6, 7); // 7 июля 2004
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  const ageElement = document.getElementById("age");
  if (ageElement) {
    ageElement.textContent = age;
  }

  // Прелоадер скрывается после полной готовности
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hidden");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 800); // совпадает с transition в CSS
  }
  // Анимация поэтапная
  const elements = document.querySelectorAll(
    ".avatar, h1, .info-block, .section-divider, a.button, footer"
  );

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate-drop");
    }, index * 100);
  });
});
