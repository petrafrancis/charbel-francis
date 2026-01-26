import React from 'react';
import { HeroVerse } from '../components/HeroVerse';
import { BooksFloating } from '../components/BooksFloating';
import { BiographyWoven } from '../components/BiographyWoven';
import { TimelinePoetic } from '../components/TimelinePoetic';
import { LanguageToggle } from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
export function AuthorPortfolio() {
  const { t } = useLanguage();
  return (
    <div className="relative min-h-screen overflow-hidden">
      <LanguageToggle />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-30 mix-blend-multiply">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50" />
      </div>

      <main className="relative z-10">
        <HeroVerse />
        <BooksFloating />
        <BiographyWoven />
        <TimelinePoetic />

        <footer className="py-12 text-center text-stone-500 font-sans text-sm">
          <p>{t('footer.rights')}</p>
        </footer>
      </main>
    </div>);

}