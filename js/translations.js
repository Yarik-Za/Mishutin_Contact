let currentLanguage = "ua"; // Язык по умолчанию
const availableLanguages = ["ua", "en", "ru"]; // Список поддерживаемых языков

// Функция для получения языка из URL
function getLanguageFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang"); // Получаем параметр lang из URL, если он есть
}

// Функция для определения предпочтительного языка пользователя
function getPreferredLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  // Извлекаем язык из браузера, например, "ru-RU", "en-US"
  const shortLang = userLang.split("-")[0]; // Используем только первую часть (например, "ru", "en")

  // Если предпочтительный язык есть в списке поддерживаемых, возвращаем его
  if (availableLanguages.includes(shortLang)) {
    return shortLang;
  }
  return "ua"; // Если язык не поддерживается, выбираем украинский по умолчанию
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
      { id: "age-years-text", key: "age_years_text" },
      { id: "birth-date-label", key: "birth_date_label" },
      { id: "birth-date", key: "birth_date" },
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
    const nextLangIndex = getNextLanguageIndex(lang); // Получаем индекс следующего языка
    const nextLang = availableLanguages[nextLangIndex]; // Определяем следующий язык
    languageButton.textContent = nextLang.toUpperCase(); // Устанавливаем текст кнопки
    languageButton.href = `?lang=${nextLang}`; // Ссылка для перехода на следующий язык
  } catch (error) {
    console.error("Ошибка загрузки перевода:", error);
  }
}

// Функция для получения индекса следующего языка
function getNextLanguageIndex(currentLang) {
  switch (currentLang) {
    case "ua":
      return 1; // Если текущий язык — украинский, следующий будет английский
    case "en":
      return 2; // Если текущий язык — английский, следующий будет русский
    case "ru":
      return 0; // Если текущий язык — русский, следующий будет украинский
    default:
      return 0; // Если язык не распознан, возвращаем украинский
  }
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  // Определяем язык из URL, если он есть, иначе выбираем предпочтительный язык пользователя
  currentLanguage = getLanguageFromUrl() || getPreferredLanguage();
  loadTranslations(currentLanguage); // Загружаем переводы для текущего языка
});
