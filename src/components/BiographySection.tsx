import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
export function BiographySection() {
  const { t, language } = useLanguage();
  const firstLetter = language === 'ar' ? 'و' : 'B';
  // Author image URL - replace with actual author image
  const authorImageUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80';
  
  return (
    <section className="relative max-w-3xl mx-auto px-8 py-12">
      <div className="absolute -left-4 top-0 bottom-0 w-px bg-[#8b7355] opacity-20 hidden md:block"></div>

      <h2 className="text-3xl font-ornamental text-[#8b2e2e] mb-8 text-center tracking-wider border-b border-[#8b7355] border-opacity-30 pb-4 inline-block mx-auto w-full">
        {t('about_author')}
      </h2>

      {/* Author Image */}
      <div className={`flex justify-center mb-8 ${language === 'ar' ? 'md:float-left md:mr-8 md:ml-0' : 'md:float-right md:ml-8 md:mr-0'} md:w-64 md:mb-4`}>
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          {/* Decorative Frame */}
          <div className="absolute inset-0 border-4 border-[#8b7355] border-opacity-60 rounded-full pointer-events-none z-20">
            {/* Inner frame */}
            <div className="absolute inset-3 border-2 border-[#d4af37] border-opacity-40 rounded-full"></div>
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4af37] opacity-60 rounded-tl-lg"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4af37] opacity-60 rounded-tr-lg"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4af37] opacity-60 rounded-bl-lg"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4af37] opacity-60 rounded-br-lg"></div>
          </div>

          {/* Author Image */}
          <div className="relative w-full h-full overflow-hidden rounded-full bg-[#4a3f35]">
            <img
              src={authorImageUrl}
              alt={t('author_name')}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355]/10 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="prose prose-lg prose-stone max-w-none font-manuscript text-[#4a3f35] leading-relaxed text-justify clear-both">
        <p className="mb-6">
          <span className={language === 'ar' ? 'float-right text-7xl font-ornamental text-[#d4af37] leading-[0.8] ml-3 mt-[-4px] drop-shadow-sm border border-[#8b7355] p-2 bg-[#4a3f35] bg-opacity-5 rounded-sm' : 'float-left text-7xl font-ornamental text-[#d4af37] leading-[0.8] mr-3 mt-[-4px] drop-shadow-sm border border-[#8b7355] p-2 bg-[#4a3f35] bg-opacity-5 rounded-sm'}>
            {firstLetter}
          </span>
          {t('biography_paragraph_1')}
        </p>

        <p className="mb-6 indent-8">
          {t('biography_paragraph_2')}
        </p>

        <p className="indent-8">
          {t('biography_paragraph_3')}
        </p>
      </div>

      <div className="mt-12 flex justify-end">
        <div className="relative">
          <p
            className="font-cursive text-3xl text-[#8b2e2e] transform -rotate-6 opacity-80"
            style={{
              fontFamily: 'cursive'
            }}>

            {t('author_name')}
          </p>
          <div className="h-px w-full bg-[#8b2e2e] opacity-50 mt-1"></div>
        </div>
      </div>
    </section>);

}