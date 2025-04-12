// Автоматический расчет текущего года для футера
document.addEventListener("DOMContentLoaded", () => {
  // Получаем текущий год
  const currentYear = new Date().getFullYear();
  // Вставляем текущий год в элемент с id="year_creation"
  const yearElement = document.getElementById("year_creation");
  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  // Автоматический расчет возраста
  // Возраст
  const birthDate = new Date(2004, 6, 7); // 7 июля 2004 на JavaScript
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  document.getElementById("age").textContent = age;

  // Анимация поэтапная
  const elements = document.querySelectorAll(
    ".avatar, h1, .info-block, .section-divider, a.button, footer"
  );

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate-drop");
    }, index * 100); // Задержка для последовательного появления
  });

  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    // Плавное исчезновение
    preloader.classList.add("hidden");

    // Ждем завершения перехода (0.6s), затем убираем полностью
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  });
});
