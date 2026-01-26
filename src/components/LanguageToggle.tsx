import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-[#f4f1e8] border-2 border-[#8b7355] rounded-sm shadow-md hover:bg-[#e6e2d3] transition-colors duration-300 group"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}>

      <span
        className={`font-serif text-[#4a3f35] font-bold ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}>

        English
      </span>
      <div className="h-4 w-px bg-[#8b7355]"></div>
      <span
        className={`font-serif text-[#4a3f35] font-bold ${language === 'ar' ? 'opacity-100' : 'opacity-50'}`}>

        العربية
      </span>

      {/* Ornamental corners */}
      <div className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-[#8b7355] opacity-50"></div>
      <div className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-[#8b7355] opacity-50"></div>
      <div className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-[#8b7355] opacity-50"></div>
      <div className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-[#8b7355] opacity-50"></div>
    </button>);

}