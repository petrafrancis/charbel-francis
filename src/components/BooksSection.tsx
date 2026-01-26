import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
export interface BookData {
  id: string;
  titleKey: string;
  year: string;
  color: 'red' | 'blue' | 'brown' | 'green';
  descriptionKey: string;
  summaryKey: string;
  genreKey: string;
  releaseDate: string;
  imageUrl: string;
  isFeatured?: boolean;
  isUpcoming?: boolean;
}

export function getBooksData(t: (key: string) => string, language: 'en' | 'ar'): BookData[] {
  return [


    {
      id: 'alchemists-daughter',
      titleKey: 'book_alchemists_daughter_title',
      year: 'MDCCCCXXXI',
      color: 'green',
      descriptionKey: 'book_alchemists_daughter_desc',
      summaryKey: 'book_alchemists_daughter_summary',
      genreKey: 'book_alchemists_daughter_genre',
      releaseDate: language === 'ar' ? '23 سبتمبر 1931' : 'September 23, 1931',
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&q=80',
      isFeatured: true
    },
    {
      id: 'echoes-void',
      titleKey: 'book_echoes_void_title',
      year: 'MDCCCCXXXV',
      color: 'brown',
      descriptionKey: 'book_echoes_void_desc',
      summaryKey: 'book_echoes_void_summary',
      genreKey: 'book_echoes_void_genre',
      releaseDate: language === 'ar' ? '12 ديسمبر 1935' : 'December 12, 1935',
      imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop&q=80'
    },
    {
      id: 'clockwork-heart',
      titleKey: 'book_clockwork_heart_title',
      year: 'MDCCCCXXXVIII',
      color: 'brown',
      descriptionKey: 'book_clockwork_heart_desc',
      summaryKey: 'book_clockwork_heart_summary',
      genreKey: 'book_clockwork_heart_genre',
      releaseDate: language === 'ar' ? 'خريف 1938' : 'Autumn 1938',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&q=80',
      isUpcoming: true
    }
  ];
}

interface BookProps {
  id: string;
  titleKey: string;
  year: string;
  descriptionKey: string;
  imageUrl: string;
  isFeatured?: boolean;
  onClick: () => void;
}
function Book({
  titleKey,
  year,
  descriptionKey,
  imageUrl,
  isFeatured,
  onClick
}: BookProps) {
  const { t } = useLanguage();
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center group cursor-pointer relative">

      {/* Featured Badge */}
      {isFeatured &&
        <div className="absolute -top-4 -right-4 z-30 animate-bounce-slow">
          <div className="bg-[#d4af37] text-[#3a0e0e] text-xs font-bold px-3 py-1 shadow-lg border border-[#8b7355] transform rotate-12 flex flex-col items-center">
            <span className="uppercase tracking-wider">
              {t('featured_event')}
            </span>
            <div className="w-full h-px bg-[#3a0e0e] opacity-30 my-0.5"></div>
            <span className="text-[10px]">★ ★ ★</span>
          </div>
        </div>
      }

      {/* Book Cover with Frame */}
      <div
        className={`relative w-48 h-72 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-105 ${isFeatured ? 'shadow-[0_0_25px_rgba(212,175,55,0.4)] ring-2 ring-[#d4af37]/30' : 'shadow-2xl'}`}>

        {/* Decorative Frame */}
        <div className="absolute inset-0 border-4 border-[#8b7355] border-opacity-60 pointer-events-none z-20">
          {/* Inner frame */}
          <div className="absolute inset-2 border-2 border-[#d4af37] border-opacity-40"></div>
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d4af37] opacity-60"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d4af37] opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d4af37] opacity-60"></div>
        </div>

        {/* Book Image */}
        <div className="relative w-full h-full overflow-hidden bg-[#4a3f35]">
          <img
            src={imageUrl}
            alt={t(titleKey)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          {/* Overlay for better text visibility on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Hover Overlay with Text */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30">
          {/* Title */}
          <div className="text-center mt-4">
            <h3 className="font-ornamental text-[#d4af37] text-lg leading-tight drop-shadow-lg tracking-wider">
              {t(titleKey)}
            </h3>
            <div className="w-12 h-px bg-[#d4af37] mx-auto mt-2 opacity-80"></div>
          </div>

          {/* Year at bottom */}
          <div className="text-center mb-4">
            <span className="text-[#d4af37] text-xs font-serif tracking-[0.2em] opacity-90">
              {year}
            </span>
          </div>
        </div>
      </div>

      {/* Description below book - appears on hover */}
      <div className="mt-6 text-center max-w-xs px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-[#4a3f35] text-sm italic font-manuscript leading-relaxed">
          "{t(descriptionKey)}"
        </p>
      </div>
    </div>);

}
export function BooksSection() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const booksData = getBooksData(t, language);
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-16">
        <span className="text-[#8b7355] text-sm tracking-[0.3em] uppercase block mb-2">
          {t('the_collection')}
        </span>
        <h2 className="text-4xl font-ornamental text-[#4a3f35]">
          {t('selected_works')}
        </h2>
        <div className="w-24 h-1 bg-[#8b2e2e] mx-auto mt-4 rounded-full opacity-80"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto justify-items-center">
        {booksData.map((book) =>
          <Book
            key={book.id}
            id={book.id}
            titleKey={book.titleKey}
            year={book.year}
            descriptionKey={book.descriptionKey}
            imageUrl={book.imageUrl}
            isFeatured={book.isFeatured}
            onClick={() => navigate(`/book/${book.id}`)} />

        )}
      </div>
    </section>);

}