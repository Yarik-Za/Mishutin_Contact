let currentLanguage = "ua"; // Язык по умолчанию
const availableLanguages = ["ua", "ru", "en"]; // Список поддерживаемых языков

function getLanguageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") || "ua"; // Если язык не указан, используем "ua"
}

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

        // Обновляем текст кнопки языка
        const languageButton = document.getElementById("language-button");
        const nextLangIndex = (availableLanguages.indexOf(lang) + 1) % availableLanguages.length;
        const nextLang = availableLanguages[nextLangIndex];
        languageButton.textContent = nextLang.toUpperCase();
        languageButton.href = `?lang=${nextLang}`;
    } catch (error) {
        console.error("Ошибка загрузки перевода:", error);
    }
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
    currentLanguage = getLanguageFromUrl(); // Определяем язык из URL
    loadTranslations(currentLanguage);
});
