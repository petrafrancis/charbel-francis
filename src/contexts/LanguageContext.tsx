import React, { useEffect, useState, createContext, useContext } from 'react';
type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';
interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
// Simple translation dictionary for demo purposes
const translations: Record<string, Record<Language, string>> = {
  back_to_collection: {
    en: '← Back to Collection',
    ar: '→ العودة إلى المجموعة'
  },
  featured_event: {
    en: 'Book Signing Event',
    ar: 'حدث توقيع الكتاب'
  },
  about_author: {
    en: 'About the Author',
    ar: 'عن المؤلف'
  },
  life_journey: {
    en: 'Life Journey',
    ar: 'رحلة الحياة'
  },
  selected_works: {
    en: 'Selected Works',
    ar: 'مختارات أدبية'
  },
  the_collection: {
    en: 'The Collection',
    ar: 'المجموعة الكاملة'
  },
  forthcoming: {
    en: 'Forthcoming from the Press',
    ar: 'إصدارات قادمة من المطبعة'
  },
  expected: {
    en: 'Expected Autumn, 1938',
    ar: 'متوقع في خريف 1938'
  },
  join_waitlist: {
    en: 'Join the Waitlist',
    ar: 'انضم إلى قائمة الانتظار'
  },
  cover_pending: {
    en: 'Cover Art Pending',
    ar: 'صورة الغلاف قيد الإعداد'
  },
  rights_reserved: {
    en: 'All Rights Reserved.',
    ar: 'جميع الحقوق محفوظة.'
  },
  typeset: {
    en: 'Typeset in EB Garamond',
    ar: 'تم التنضيد بخط EB Garamond'
  },
  genre: {
    en: 'Genre',
    ar: 'النوع الأدبي'
  },
  released: {
    en: 'Released',
    ar: 'تاريخ الإصدار'
  },
  summary: {
    en: 'Summary',
    ar: 'ملخص'
  }
};
export function LanguageProvider({ children }: {children: ReactNode;}) {
  const [language, setLanguageState] = useState<Language>('en');
  const direction = language === 'ar' ? 'rtl' : 'ltr';
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);
  const toggleLanguage = () => {
    setLanguageState((prev) => prev === 'en' ? 'ar' : 'en');
  };
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };
  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        toggleLanguage,
        setLanguage,
        t
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