let currentLanguage = "ua"; // Язык по умолчанию
const availableLanguages = ["ua", "ru", "en"]; // Список поддерживаемых языков

// Функция для получения языка из URL
function getLanguageFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "ua"; // Если язык не указан, используем "ua"
}

// Функция для загрузки переводов из соответствующего JSON файла
async function loadTranslations(lang) {
  try {
    const response = await fetch(`locales/${lang}.json`);
    const translations = await response.json();

    // Применяем переводы ко всем элементам
    document.title = translations.title;

    const elementsToTranslate = [
      { id: "name", key: "name" },
      { id: "age-label", key: "age_label" },
      { id: "birth-date-label", key: "birth_date_label" },
      { id: "phone-label", key: "phone_label" },
      { id: "social-label", key: "social_label" },
      { id: "email-label", key: "email_label" },
      { id: "resume-label", key: "resume_label" },
      { id: "finance-label", key: "finance_label" },
      { id: "monobank-label", key: "monobank_label" },
      { id: "privat-label", key: "privat_label" },
      { id: "tips-label", key: "tips_label" },
    ];

    // Обновляем текст всех элементов
    elementsToTranslate.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        element.textContent = translations[item.key];
      } else {
        console.warn(`Элемент с id '${item.id}' не найден.`);
      }
    });

    // Обновляем текст кнопки языка
    const languageButton = document.getElementById("language-button");
    const nextLangIndex =
      (availableLanguages.indexOf(lang) + 1) % availableLanguages.length;
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
  loadTranslations(currentLanguage); // Загружаем переводы для текущего языка
});
