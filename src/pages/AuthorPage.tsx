import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ManuscriptHeader } from '../components/ManuscriptHeader';
import { BiographySection } from '../components/BiographySection';
import { BooksSection } from '../components/BooksSection';
import { UpcomingReleases } from '../components/UpcomingReleases';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { LifeJourneyTimeline } from '../components/LifeJourneyTimeline';
import { useLanguage } from '../contexts/LanguageContext';
export function AuthorPage() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full relative pb-20">
      {/* Main Content Container with Border */}
      <div className="max-w-6xl mx-auto min-h-screen bg-[#f4f1e8] relative shadow-2xl my-8 md:my-12 border border-[#d6d3c9]">
        {/* Inner Border Frame */}
        <div className="absolute inset-2 md:inset-4 border border-[#8b7355] opacity-30 pointer-events-none z-10"></div>
        <div className="absolute inset-3 md:inset-6 border border-[#8b7355] opacity-20 pointer-events-none z-10"></div>

        {/* Content */}
        <div className="relative z-20 pt-8 pb-16 px-4 md:px-12">
          <ManuscriptHeader />

          <OrnamentalDivider variant="simple" />

          <BiographySection />

          <LifeJourneyTimeline />

          <OrnamentalDivider variant="simple" />

          <UpcomingReleases />

          <OrnamentalDivider variant="complex" />

          <BooksSection />

          <OrnamentalDivider variant="end" />

          {/* Footer with Events Link */}
          <footer className="text-center text-[#6d5a43] text-sm font-manuscript mt-8 opacity-70">
            <div className="mb-4">
              <button
                onClick={() => navigate('/events')}
                className="inline-flex items-center gap-2 text-[#8b2e2e] hover:text-[#6b2323] transition-colors border-b border-[#8b2e2e] border-opacity-50 hover:border-opacity-100 pb-1">

                <span>
                  {language === 'en' ?
                  'View Events & Appearances' :
                  'عرض الفعاليات والمشاركات'}
                </span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7">
                  </path>
                </svg>
              </button>
            </div>
            <p>
              &copy; MDCCCCXXXVIII Arthur V. Blackwood. {t('rights_reserved')}
            </p>
            <p className="mt-2 text-xs">{t('typeset')}</p>
          </footer>
        </div>
      </div>
    </div>);

}