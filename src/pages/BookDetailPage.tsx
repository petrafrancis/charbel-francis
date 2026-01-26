import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { booksData } from '../components/BooksSection';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { useLanguage } from '../contexts/LanguageContext';
export function BookDetailPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const book = booksData.find((b) => b.id === bookId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f1e8]">
        Book not found
      </div>);

  }
  const colorMap = {
    red: 'from-[#5c1a1a] to-[#3a0e0e]',
    blue: 'from-[#1a2f5c] to-[#0e1a3a]',
    brown: 'from-[#5c401a] to-[#3a280e]',
    green: 'from-[#1a5c2f] to-[#0e3a1c]'
  };
  return (
    <div className="min-h-screen w-full relative pb-20 bg-[#f4f1e8]">
      {/* Back Button */}
      <div className="absolute top-8 left-8 z-30">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#8b2e2e] hover:text-[#6b2323] transition-colors font-manuscript text-lg group">

          <span
            className={`transform transition-transform group-hover:-translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`}>

            ←
          </span>
          <span className="italic border-b border-transparent group-hover:border-[#8b2e2e]">
            {t('back_to_collection')}
          </span>
        </button>
      </div>

      {/* Main Content Container with Border */}
      <div className="max-w-5xl mx-auto min-h-screen bg-[#f4f1e8] relative shadow-2xl my-8 md:my-12 border border-[#d6d3c9]">
        {/* Inner Border Frame */}
        <div className="absolute inset-2 md:inset-4 border border-[#8b7355] opacity-30 pointer-events-none z-10"></div>
        <div className="absolute inset-3 md:inset-6 border border-[#8b7355] opacity-20 pointer-events-none z-10"></div>

        {/* Content */}
        <div className="relative z-20 pt-16 pb-16 px-6 md:px-16">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Left Column: Book Cover */}
            <div className="w-full md:w-1/3 flex justify-center sticky top-8">
              <div className="relative w-64 h-96 rounded-r-md shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/40 to-transparent z-20 rounded-l-sm"></div>

                {/* Cover texture */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colorMap[book.color]} rounded-r-md border-t-2 border-b-2 border-r-2 border-[#d4af37]/30`}>

                  {/* Leather texture overlay */}
                  <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] mix-blend-overlay"></div>

                  {/* Ornate Border on Cover */}
                  <div className="absolute inset-4 border border-[#d4af37] opacity-60 rounded-sm">
                    <div className="absolute inset-1 border border-[#d4af37] opacity-40"></div>
                  </div>

                  {/* Title Area */}
                  <div className="absolute top-16 left-0 right-0 text-center px-6">
                    <h3 className="font-ornamental text-[#d4af37] text-2xl leading-tight drop-shadow-md tracking-wider">
                      {book.title}
                    </h3>
                    <div className="w-12 h-px bg-[#d4af37] mx-auto mt-4 opacity-70"></div>
                  </div>

                  {/* Center Ornament */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#d4af37] opacity-50 scale-150">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="currentColor">

                      <path d="M12,2 L14,10 L22,12 L14,14 L12,22 L10,14 L2,12 L10,10 Z" />
                    </svg>
                  </div>

                  {/* Bottom Year */}
                  <div className="absolute bottom-10 left-0 right-0 text-center">
                    <span className="text-[#d4af37] text-sm font-serif tracking-[0.3em] opacity-80">
                      {book.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-2/3">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-[#8b7355] bg-opacity-10 text-[#8b7355] text-xs uppercase tracking-widest border border-[#8b7355] border-opacity-30 rounded-sm mb-4">
                  {book.genre}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-ornamental text-[#4a3f35] mb-4 leading-tight">
                {book.title}
              </h1>

              <div className="flex items-center gap-4 text-[#6d5a43] mb-8 font-manuscript italic">
                <span>
                  {t('released')}: {book.releaseDate}
                </span>
                <span className="w-1 h-1 bg-[#8b2e2e] rounded-full"></span>
                <span>First Edition</span>
              </div>

              <OrnamentalDivider variant="simple" />

              <div className="prose prose-lg prose-stone max-w-none font-manuscript text-[#4a3f35] leading-relaxed text-justify mt-8">
                <h3 className="text-xl font-ornamental text-[#8b2e2e] mb-4">
                  {t('summary')}
                </h3>
                <p className="first-letter:text-5xl first-letter:font-ornamental first-letter:text-[#8b2e2e] first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px]">
                  {book.fullSummary}
                </p>
                <p className="mt-4">
                  Critics have described this work as "a haunting exploration of
                  the human condition," praising Blackwood's ability to weave
                  the supernatural with the deeply personal. The first edition
                  prints are highly sought after by collectors for their unique
                  binding and the rumored hidden messages within the chapter
                  headers.
                </p>
              </div>

              {book.isFeatured &&
              <div className="mt-12 p-6 bg-[#d4af37] bg-opacity-10 border border-[#d4af37] rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#d4af37] opacity-20 transform rotate-45 translate-x-8 -translate-y-8"></div>
                  <h4 className="text-[#8b2e2e] font-ornamental text-lg mb-2 flex items-center gap-2">
                    <span>★</span> {t('featured_event')}
                  </h4>
                  <p className="text-[#4a3f35] font-manuscript italic">
                    Signed copies of this edition will be available at the
                    upcoming autumn gala.
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>);

}