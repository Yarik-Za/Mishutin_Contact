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
  const birthDate = new Date(2004, 7, 7); // Укажите свою дату
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
});
