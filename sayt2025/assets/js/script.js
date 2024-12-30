function toggleLanguageMenu() {
    const languageMenus = document.querySelectorAll('.language-menu');
    languageMenus.forEach(menu => menu.classList.toggle('hidden'));
}

function changeLanguage(language, flagSrc, type = "Desktop") {
    const translations = {
      AZ: {
        navbar: ["Ana Səhifə", "Xidmətlər", "Haqqımızda", "Əlaqə"],
        title: "Technodestek - Kompüter Xidmətləri",
        hero: {
          heading:
            "Kompüterinizi <span class='text-blue-700'>Bizə Həvalə Edin</span>",
          description:
            "Sürətli, etibarlı və peşəkar xidmət üçün bizimlə əlaqə saxlayın!",
          services: [
            "Proqramların Quraşdırılması",
            "Hardware Yoxlaması",
            "Şəbəkə Problemlərinin Həlli",
            "Texniki Yardım",
          ],
        },
      },
      EN: {
        navbar: ["Home", "Services", "About Us", "Contact"],
        title: "Technodestek - Computer Services",
        hero: {
          heading:
            "Entrust Your <span class='text-blue-700'>Computer to Us</span>",
          description: "Contact us for fast, reliable, and professional service!",
          services: [
            "Software Installation",
            "Hardware Inspection",
            "Network Issue Resolution",
            "Technical Support",
          ],
        },
      },
      RU: {
        navbar: ["Главная", "Услуги", "О нас", "Контакты"],
        title: "Technodestek - Компьютерные Услуги",
        hero: {
          heading:
            "Доверьте <span class='text-blue-700'>Ваш Компьютер Нам</span>",
          description:
            "Свяжитесь с нами для быстрого, надежного и профессионального сервиса!",
          services: [
            "Установка Программ",
            "Проверка Оборудования",
            "Решение Проблем Сети",
            "Техническая Поддержка",
          ],
        },
      },
    };
  
    const translation = translations[language];
    const navLinks = document.querySelectorAll(
      type === "Desktop" ? "#navbar a" : ".mobile-nav-links a"
    );
    navLinks.forEach((link, index) => {
      link.textContent = translation.navbar[index];
    });
  
    document.getElementById(
      type === "Desktop" ? "selectedLanguage" : "selectedLanguageMobile"
    ).textContent = language;
    document.getElementById(
      type === "Desktop" ? "languageFlag" : "languageFlagMobile"
    ).src = flagSrc;
  
    document.querySelector(".hero-heading").innerHTML = translation.hero.heading;
    document.querySelector(".hero-description").textContent =
      translation.hero.description;
    document.querySelectorAll(".hero-services li span").forEach((item, index) => {
      item.textContent = translation.hero.services[index];
    });
  
    document.title = translation.title;
  }

const menuToggle = document.querySelector('.menu-toggle');
const mobileNavLinks = document.querySelector('.mobile-nav-links');

menuToggle.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('hidden');
});
