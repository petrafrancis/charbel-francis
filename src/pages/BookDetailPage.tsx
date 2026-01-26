import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBooksData } from '../components/BooksSection';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { useLanguage } from '../contexts/LanguageContext';
export function BookDetailPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const booksData = getBooksData(t, language);
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
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left Column: Book Cover Image with Frame */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="sticky top-8 w-full max-w-[280px]">
                <div className="relative w-full aspect-[2/3]">
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
                      src={book.imageUrl}
                      alt={t(book.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-2/3">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-[#8b7355] bg-opacity-10 text-[#8b7355] text-xs uppercase tracking-widest border border-[#8b7355] border-opacity-30 rounded-sm mb-4">
                  {t(book.genreKey)}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-ornamental text-[#4a3f35] mb-4 leading-tight">
                {t(book.titleKey)}
              </h1>

              <div className="flex items-center gap-4 text-[#6d5a43] mb-8 font-manuscript italic">
                <span>
                  {t('released')}: {book.releaseDate}
                </span>
                <span className="w-1 h-1 bg-[#8b2e2e] rounded-full"></span>
                <span>{t('first_edition')}</span>
              </div>

              <OrnamentalDivider variant="simple" />

              <div className="prose prose-lg prose-stone max-w-none font-manuscript text-[#4a3f35] leading-relaxed text-justify mt-8">
                <h3 className="text-xl font-ornamental text-[#8b2e2e] mb-4">
                  {t('summary')}
                </h3>
                <p className={language === 'ar' ? 'first-letter:text-5xl first-letter:font-ornamental first-letter:text-[#8b2e2e] first-letter:float-right first-letter:ml-3 first-letter:mt-[-8px]' : 'first-letter:text-5xl first-letter:font-ornamental first-letter:text-[#8b2e2e] first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px]'}>
                  {t(book.summaryKey)}
                </p>
                <p className="mt-4">
                  {t('book_critics_note')}
                </p>
              </div>

              {book.isFeatured &&
                <div className="mt-12 p-6 bg-[#d4af37] bg-opacity-10 border border-[#d4af37] rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#d4af37] opacity-20 transform rotate-45 translate-x-8 -translate-y-8"></div>
                  <h4 className="text-[#8b2e2e] font-ornamental text-lg mb-2 flex items-center gap-2">
                    <span>★</span> {t('featured_event')}
                  </h4>
                  <p className="text-[#4a3f35] font-manuscript italic">
                    {t('book_signed_copies')}
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>);

}