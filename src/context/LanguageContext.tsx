import React, { useEffect, useState, createContext, useContext } from 'react';
type Language = 'en' | 'ar';
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}
const translations = {
  en: {
    'nav.books': 'Books',
    'nav.bio': 'Biography',
    'nav.timeline': 'Timeline',
    'nav.contact': 'Contact',
    'hero.title': 'Whispers of the Soul',
    'hero.subtitle': 'Poetry that breathes life into silence',
    'books.title': 'Published Works',
    'bio.title': "The Poet's Journey",
    'timeline.title': 'Upcoming Releases',
    'footer.rights': '© 2024 All rights reserved.'
  },
  ar: {
    'nav.books': 'الكتب',
    'nav.bio': 'السيرة الذاتية',
    'nav.timeline': 'الجدول الزمني',
    'nav.contact': 'تواصل',
    'hero.title': 'همسات الروح',
    'hero.subtitle': 'شعر يبث الحياة في الصمت',
    'books.title': 'الأعمال المنشورة',
    'bio.title': 'رحلة الشاعر',
    'timeline.title': 'الإصدارات القادمة',
    'footer.rights': '© ٢٠٢٤ جميع الحقوق محفوظة.'
  }
};
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const [language, setLanguage] = useState<Language>('en');
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);
  const toggleLanguage = () => {
    setLanguage((prev) => prev === 'en' ? 'ar' : 'en');
  };
  const t = (key: string) => {
    return (
      translations[language][key as keyof (typeof translations)['en']] || key);

  };
  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
        isRTL: language === 'ar'
      }}>

      {children}
    </LanguageContext.Provider>);

}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}