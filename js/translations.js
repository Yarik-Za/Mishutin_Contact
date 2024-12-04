// Текущий язык
let currentLanguage = "ua";

// Загрузка переводов из JSON
async function loadTranslations(lang) {
    try {
        const response = await fetch(`locales/${lang}.json`);
        const translations = await response.json();

        // Применяем переводы
        document.title = translations.title;
        document.getElementById("name").textContent = translations.name;
        document.getElementById("age-label").textContent = translations.age_label;
        document.getElementById("birth-date-label").textContent = translations.birth_date_label;
        document.getElementById("phone-label").textContent = translations.phone_label;
        document.getElementById("social-label").textContent = translations.social_label;
        document.getElementById("email-label").textContent = translations.email_label;
        document.getElementById("resume-label").textContent = translations.resume_label;
        document.getElementById("finance-label").textContent = translations.finance_label;
        document.getElementById("monobank-label").textContent = translations.monobank_label;
        document.getElementById("privat-label").textContent = translations.privat_label;
        document.getElementById("tips-label").textContent = translations.tips_label;
    } catch (error) {
        console.error("Ошибка загрузки перевода:", error);
    }
}

// Смена языка
function changeLanguage() {
    currentLanguage = currentLanguage === "ru" ? "en" : "ru";
    loadTranslations(currentLanguage);
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
    loadTranslations(currentLanguage);

    // Кнопка для смены языка
    const languageButton = document.createElement("button");
    languageButton.textContent = "Change Language";
    languageButton.onclick = changeLanguage;
    document.body.appendChild(languageButton);
});


