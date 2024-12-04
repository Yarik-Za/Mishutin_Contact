// Функция загрузки перевода
async function loadTranslations(lang) {
    try {
        const response = await fetch(`locales/${lang}.json`);
        const translations = await response.json();

        // Обновляем текстовые элементы
        document.title = translations.title;
        document.querySelector("h1").textContent = translations.name;
        document.getElementById("age-label").textContent = translations.age_label;
        document.getElementById("birth-date-label").textContent = translations.birth_date_label;
        document.querySelector(".section-divider span").textContent = translations.phone_label;

        // Другие переводы


        
        // Добавляйте идентификаторы или классы, чтобы динамически менять контент
    } catch (error) {
        console.error("Error loading translations:", error);
    }
}

// Определяем текущий язык из URL
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get("lang") || "ru"; // По умолчанию русский

// Загружаем перевод
loadTranslations(lang);
