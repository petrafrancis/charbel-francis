import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group rtl:right-auto rtl:left-6"
      aria-label="Toggle language">

      <Globe className="w-4 h-4 text-stone-500 group-hover:text-stone-800 transition-colors" />
      <span className="font-serif text-sm font-medium text-stone-600 group-hover:text-stone-900">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>);

}