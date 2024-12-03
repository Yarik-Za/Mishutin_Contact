// Автоматический расчет текущего года для футера
document.addEventListener("DOMContentLoaded", () => {
    // Получаем текущий год
    const currentYear = new Date().getFullYear();
    // Вставляем текущий год в элемент с id="year_creation"
    const yearElement = document.getElementById('year_creation');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Автоматический расчет возраста
    const birthDate = new Date(2004, 7, 7); // Укажи свою дату рождения (12 декабря 2000 года)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // Проверяем, был ли день рождения в текущем году
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--; // Если день рождения ещё не прошёл, уменьшаем возраст
    }

    const ageElement = document.getElementById("age");
    if (ageElement) {
        ageElement.textContent = age;
    }
});

function changeLanguage() {
    // Redirect to your language-specific page or toggle language.
    window.location.href = "/en"; // Update with your language-specific URL.
}

