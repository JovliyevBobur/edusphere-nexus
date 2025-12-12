import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface Translations {
  [key: string]: {
    en: string;
    uz: string;
    ru: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { en: 'Home', uz: 'Bosh sahifa', ru: 'Главная' },
  about: { en: 'About Us', uz: 'Biz haqimizda', ru: 'О нас' },
  departments: { en: 'Departments', uz: "Bo'limlar", ru: 'Отделения' },
  news: { en: 'News', uz: 'Yangiliklar', ru: 'Новости' },
  events: { en: 'Events', uz: 'Tadbirlar', ru: 'Мероприятия' },
  gallery: { en: 'Gallery', uz: 'Galereya', ru: 'Галерея' },
  teachers: { en: 'Teachers', uz: "O'qituvchilar", ru: 'Учителя' },
  contact: { en: 'Contact', uz: 'Aloqa', ru: 'Контакты' },
  
  // Hero Section
  heroTitle: { en: 'Shaping Tomorrow\'s Leaders', uz: 'Ertangi yetakchilarni shakllantirish', ru: 'Формируем лидеров завтрашнего дня' },
  heroSubtitle: { en: 'Excellence in Education Since 1990', uz: '1990 yildan beri ta\'limda mukammallik', ru: 'Совершенство в образовании с 1990 года' },
  heroDescription: { en: 'Bright Future Academy provides world-class education with modern facilities, experienced teachers, and a commitment to nurturing each student\'s potential.', uz: 'Bright Future Academy zamonaviy inshootlar, tajribali o\'qituvchilar va har bir o\'quvchining salohiyatini rivojlantirishga sodiqlik bilan jahon darajasidagi ta\'limni taqdim etadi.', ru: 'Академия Bright Future предоставляет образование мирового класса с современными условиями, опытными преподавателями и стремлением раскрыть потенциал каждого ученика.' },
  getStarted: { en: 'Get Started', uz: 'Boshlash', ru: 'Начать' },
  learnMore: { en: 'Learn More', uz: "Ko'proq o'rganish", ru: 'Узнать больше' },
  applyNow: { en: 'Apply Now', uz: 'Hozir ariza bering', ru: 'Подать заявку' },
  
  // Stats
  students: { en: 'Students', uz: "O'quvchilar", ru: 'Студенты' },
  teachersCount: { en: 'Teachers', uz: "O'qituvchilar", ru: 'Учителя' },
  yearsExp: { en: 'Years of Experience', uz: 'Yillik tajriba', ru: 'Лет опыта' },
  awards: { en: 'Awards Won', uz: 'Mukofotlar', ru: 'Награды' },
  
  // Features
  whyChooseUs: { en: 'Why Choose Us', uz: 'Nega bizni tanlash kerak', ru: 'Почему выбирают нас' },
  modernFacilities: { en: 'Modern Facilities', uz: 'Zamonaviy inshootlar', ru: 'Современные условия' },
  modernFacilitiesDesc: { en: 'State-of-the-art classrooms, labs, and sports facilities for holistic development.', uz: "Har tomonlama rivojlanish uchun zamonaviy sinfxonalar, laboratoriyalar va sport inshootlari.", ru: 'Современные классы, лаборатории и спортивные сооружения для всестороннего развития.' },
  expertTeachers: { en: 'Expert Teachers', uz: "Mutaxassis o'qituvchilar", ru: 'Опытные учителя' },
  expertTeachersDesc: { en: 'Dedicated educators with advanced degrees and years of teaching experience.', uz: "Ilg'or darajalar va ko'p yillik o'qitish tajribasiga ega fidoyi pedagoglar.", ru: 'Преданные педагоги с учёными степенями и многолетним опытом преподавания.' },
  globalCurriculum: { en: 'Global Curriculum', uz: "Xalqaro o'quv dasturi", ru: 'Международная программа' },
  globalCurriculumDesc: { en: 'Internationally recognized curriculum preparing students for global opportunities.', uz: "O'quvchilarni global imkoniyatlarga tayyorlaydigan xalqaro tan olingan o'quv dasturi.", ru: 'Международно признанная программа, готовящая студентов к глобальным возможностям.' },
  
  // About
  ourMission: { en: 'Our Mission', uz: 'Bizning vazifamiz', ru: 'Наша миссия' },
  ourVision: { en: 'Our Vision', uz: 'Bizning vizyonimiz', ru: 'Наше видение' },
  ourHistory: { en: 'Our History', uz: 'Bizning tarixmiz', ru: 'Наша история' },
  missionText: { en: 'To provide an inclusive, stimulating learning environment that empowers students to reach their full potential and become responsible global citizens.', uz: "O'quvchilarga o'z salohiyatlarini to'liq ro'yobga chiqarish va mas'uliyatli global fuqarolarga aylanishlarini ta'minlaydigan inklyuziv, rag'batlantiruvchi ta'lim muhitini taqdim etish.", ru: 'Обеспечить инклюзивную, стимулирующую учебную среду, которая позволяет учащимся полностью раскрыть свой потенциал и стать ответственными гражданами мира.' },
  visionText: { en: 'To be recognized as a leading educational institution that nurtures innovation, critical thinking, and lifelong learning.', uz: "Innovatsiyalarni, tanqidiy fikrlashni va umrbod ta'limni rivojlantiradigan yetakchi ta'lim muassasasi sifatida tan olinish.", ru: 'Быть признанным ведущим образовательным учреждением, развивающим инновации, критическое мышление и непрерывное обучение.' },
  
  // Contact
  getInTouch: { en: 'Get In Touch', uz: 'Bog\'lanish', ru: 'Связаться' },
  sendMessage: { en: 'Send Message', uz: 'Xabar yuborish', ru: 'Отправить' },
  yourName: { en: 'Your Name', uz: 'Ismingiz', ru: 'Ваше имя' },
  yourEmail: { en: 'Your Email', uz: 'Elektron pochtangiz', ru: 'Ваш email' },
  subject: { en: 'Subject', uz: 'Mavzu', ru: 'Тема' },
  message: { en: 'Message', uz: 'Xabar', ru: 'Сообщение' },
  address: { en: 'Address', uz: 'Manzil', ru: 'Адрес' },
  phone: { en: 'Phone', uz: 'Telefon', ru: 'Телефон' },
  email: { en: 'Email', uz: 'Elektron pochta', ru: 'Email' },
  
  // Footer
  quickLinks: { en: 'Quick Links', uz: 'Tezkor havolalar', ru: 'Быстрые ссылки' },
  contactInfo: { en: 'Contact Info', uz: 'Aloqa ma\'lumotlari', ru: 'Контактная информация' },
  newsletter: { en: 'Newsletter', uz: 'Axborotnoma', ru: 'Рассылка' },
  subscribe: { en: 'Subscribe', uz: 'Obuna bo\'lish', ru: 'Подписаться' },
  allRightsReserved: { en: 'All rights reserved', uz: 'Barcha huquqlar himoyalangan', ru: 'Все права защищены' },
  
  // Departments
  mathematics: { en: 'Mathematics', uz: 'Matematika', ru: 'Математика' },
  science: { en: 'Science', uz: 'Fan', ru: 'Наука' },
  languages: { en: 'Languages', uz: 'Tillar', ru: 'Языки' },
  arts: { en: 'Arts', uz: 'San\'at', ru: 'Искусство' },
  sports: { en: 'Sports', uz: 'Sport', ru: 'Спорт' },
  technology: { en: 'Technology', uz: 'Texnologiya', ru: 'Технологии' },
  
  // Search
  search: { en: 'Search...', uz: 'Qidirish...', ru: 'Поиск...' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
