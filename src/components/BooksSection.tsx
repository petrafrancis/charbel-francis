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
      id: 'clockwork-heart',
      titleKey: 'book_clockwork_heart_title',
      year: 'MDCCCCXXXVIII',
      color: 'brown',
      descriptionKey: 'book_clockwork_heart_desc',
      summaryKey: 'book_clockwork_heart_summary',
      genreKey: 'book_clockwork_heart_genre',
      releaseDate: language === 'ar' ? '8 آذار 2026' : 'March 8, 2026',
      imageUrl: '/3-inner.png',
      isUpcoming: true,
      isFeatured: true
    },
    {
      id: 'alchemists-daughter',
      titleKey: 'book_alchemists_daughter_title',
      year: 'MDCCCCXXXI',
      color: 'green',
      descriptionKey: 'book_alchemists_daughter_desc',
      summaryKey: 'book_alchemists_daughter_summary',
      genreKey: 'book_alchemists_daughter_genre',
      releaseDate: language === 'ar' ? '13 شباط 2022' : 'February 13, 2022',
      imageUrl: '/2.png'
    },
    {
      id: 'echoes-void',
      titleKey: 'book_echoes_void_title',
      year: 'MDCCCCXXXV',
      color: 'brown',
      descriptionKey: 'book_echoes_void_desc',
      summaryKey: 'book_echoes_void_summary',
      genreKey: 'book_echoes_void_genre',
      releaseDate: language === 'ar' ? '2018' : '2018',
      imageUrl: '/1.png'
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
  const { t, direction } = useLanguage();
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center group cursor-pointer relative">

      {/* Featured Badge */}
      {isFeatured &&
        <div className="absolute -top-1 -right-0 z-20 animate-bounce-slow">
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
        className={`relative w-48 h-72 ${isFeatured ? 'ring-2 ring-[#d4af37]/30' : ''}`}>

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
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      {/* View more - under the image */}
      <div className="mt-2 flex items-center justify-center gap-1.5">
        <span className="text-[#8b7355] text-xs font-serif font-bold tracking-wider">
          {t('view_more')}
        </span>
        <span className="text-[#8b7355] text-sm font-bold" aria-hidden="true">
          {direction === 'rtl' ? '←' : '→'}
        </span>
      </div>

      {/* Description below book */}
      <div className="mt-6 text-center max-w-xs px-2 opacity-0 opacity-100 ">
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

      <div className="flex flex-wrap justify-center items-start gap-12 max-w-7xl mx-auto">
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