import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
export function UpcomingReleases() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div
        onClick={() => navigate('/book/clockwork-heart')}
        className="relative border-4 border-double border-[#8b7355] p-8 md:p-12 bg-[#f9f7f1] shadow-inner cursor-pointer group transition-all duration-300 hover:shadow-lg hover:border-[#8b2e2e]">

        {/* Corner Decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#8b2e2e] transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#8b2e2e] transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#8b2e2e] transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#8b2e2e] transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-ornamental text-[#8b2e2e] mb-2">
            {t('forthcoming')}
          </h2>
          <p className="text-[#8b7355] italic font-manuscript">
            {t('expected')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="border-2 border-[#4a3f35] flex items-center justify-center bg-[#e6e2d3] group-hover:border-solid transition-all duration-300">
            <img
              src="/3.png"
              alt={t('author_name')}
              className="w-full h-full object-cover transition-all duration-500"
            />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#4a3f35] mb-3 font-manuscript uppercase tracking-wide group-hover:text-[#8b2e2e] transition-colors">
              {t('book_clockwork_heart_title')}
            </h3>
            <p className="text-[#4a3f35] leading-relaxed mb-6 font-manuscript">
              {t('book_clockwork_heart_summary').split('.')[0] + '.'}
            </p>

            <div className="inline-flex items-center gap-2 text-[#8b2e2e] font-manuscript italic border-b border-[#8b2e2e] border-opacity-50 group-hover:border-opacity-100 transition-all">
              <span>{t('click_to_read_more')}</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>);

}