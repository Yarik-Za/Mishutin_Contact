const startTime = performance.now();

window.addEventListener("load", () => {
  const minDelay = 2000; // минимум 2 секунды
  const timePassed = performance.now() - startTime;
  const remainingTime = Math.max(0, minDelay - timePassed);
  // Выполняем после полной загрузки страницы, скриптов, стилей и прочего
  setTimeout(() => {
    // Расчет текущего года
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("year_creation");
    if (yearElement) {
      yearElement.textContent = currentYear;
    }

    // Расчет возраста
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
    document.getElementById("age").textContent = age;

    // TODO: Подгрузи переводы перед снятием прелоадера, если translations.js работает асинхронно

    // После установки всех данных — убираем прелоадер
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");

    // Удаляем прелоадер после анимации скрытия
    setTimeout(() => {
      preloader.style.display = "none";

      // Только теперь запускаем анимацию появления элементов
      const elements = document.querySelectorAll(
        ".avatar, h1, .info-block, .section-divider, a.button, footer"
      );
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("animate-drop");
        }, index * 100);
      });
    }, 600);
  }, remainingTime);
});
