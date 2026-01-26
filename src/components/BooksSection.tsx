import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
export interface BookData {
  id: string;
  title: string;
  year: string;
  color: 'red' | 'blue' | 'brown' | 'green';
  description: string;
  fullSummary: string;
  genre: string;
  releaseDate: string;
  isFeatured?: boolean;
  isUpcoming?: boolean;
}
export const booksData: BookData[] = [
{
  id: 'whispering-gallery',
  title: 'The Whispering Gallery',
  year: 'MDCCCCXXIV',
  color: 'red',
  description:
  'A tale of voices trapped within the walls of an ancient manor.',
  fullSummary:
  'In the crumbling estate of Blackwood Manor, the walls do not just have ears—they have voices. When young architect Thomas arrives to oversee renovations, he discovers that the whispering gallery in the great hall is a conduit to the past, trapping the souls of those who died within its confines. As the whispers grow louder, Thomas must solve the mystery of the manor before he becomes another voice in the chorus.',
  genre: 'Gothic Horror',
  releaseDate: 'October 31, 1924'
},
{
  id: 'lanterns-fog',
  title: 'Lanterns in the Fog',
  year: 'MDCCCCXXVII',
  color: 'blue',
  description: 'Three sailors vanish, leaving only their lanterns burning.',
  fullSummary:
  'On a mist-shrouded night in the port of Innsmouth, three seasoned sailors vanish from their docked ship without a trace. The only clue left behind is their lanterns, still burning with an unnatural blue flame. Investigator Elias Thorne delves into the local legends of the Deep Ones and discovers a pact made generations ago that is now coming due.',
  genre: 'Maritime Mystery',
  releaseDate: 'November 15, 1927'
},
{
  id: 'alchemists-daughter',
  title: "The Alchemist's Daughter",
  year: 'MDCCCCXXXI',
  color: 'green',
  description: 'Alchemy and obsession collide in 17th century Prague.',
  fullSummary:
  "In the winding streets of 17th century Prague, the daughter of a renowned alchemist discovers her father's true goal was not gold, but immortality. As she uncovers his dark experiments, she realizes she is the final ingredient in his magnum opus. A tale of betrayal, magic, and the high price of eternal life.",
  genre: 'Historical Fantasy',
  releaseDate: 'September 23, 1931',
  isFeatured: true
},
{
  id: 'echoes-void',
  title: 'Echoes of the Void',
  year: 'MDCCCCXXXV',
  color: 'brown',
  description:
  'A collection of short stories exploring the spaces between worlds.',
  fullSummary:
  'A chilling anthology of short stories that explore the thin veil between our reality and the void beyond. From a mirror that reflects a different room to a clock that counts backwards to the end of time, these tales will leave you questioning the nature of existence itself.',
  genre: 'Cosmic Horror Anthology',
  releaseDate: 'December 12, 1935'
},
{
  id: 'clockwork-heart',
  title: 'The Clockwork Heart',
  year: 'MDCCCCXXXVIII',
  color: 'brown',
  description: 'A gothic romance interwoven with mechanical horror.',
  fullSummary:
  'In the gas-lit streets of Victorian London, a watchmaker discovers a mechanism that can beat forever—but at a terrible cost. When his beloved falls gravely ill, he must choose between her mortality and a clockwork existence. A gothic romance interwoven with mechanical horror, exploring the boundary between the soul and the machine. As gears turn and springs wind, the question remains: can love survive when the heart no longer beats with blood, but with brass and steam?',
  genre: 'Gothic Romance',
  releaseDate: 'Autumn 1938',
  isUpcoming: true
}];

interface BookProps extends BookData {
  onClick: () => void;
}
function Book({
  title,
  year,
  color,
  description,
  isFeatured,
  onClick
}: BookProps) {
  const { t } = useLanguage();
  const colorMap = {
    red: 'from-[#5c1a1a] to-[#3a0e0e]',
    blue: 'from-[#1a2f5c] to-[#0e1a3a]',
    brown: 'from-[#5c401a] to-[#3a280e]',
    green: 'from-[#1a5c2f] to-[#0e3a1c]'
  };
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

      {/* Book Cover */}
      <div
        className={`relative w-48 h-72 rounded-r-md transition-transform duration-500 transform group-hover:-translate-y-2 group-hover:rotate-1 ${isFeatured ? 'shadow-[0_0_25px_rgba(212,175,55,0.4)] ring-2 ring-[#d4af37]/30' : 'shadow-2xl'}`}>

        {/* Spine effect */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 to-transparent z-20 rounded-l-sm"></div>

        {/* Cover texture */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorMap[color]} rounded-r-md border-t-2 border-b-2 border-r-2 border-[#d4af37]/30`}>

          {/* Leather texture overlay */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] mix-blend-overlay"></div>

          {/* Ornate Border on Cover */}
          <div className="absolute inset-3 border border-[#d4af37] opacity-60 rounded-sm">
            <div className="absolute inset-1 border border-[#d4af37] opacity-40"></div>
          </div>

          {/* Title Area */}
          <div className="absolute top-12 left-0 right-0 text-center px-4">
            <h3 className="font-ornamental text-[#d4af37] text-lg leading-tight drop-shadow-md tracking-wider">
              {title}
            </h3>
            <div className="w-8 h-px bg-[#d4af37] mx-auto mt-2 opacity-70"></div>
          </div>

          {/* Center Ornament */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#d4af37] opacity-50">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2 L14,10 L22,12 L14,14 L12,22 L10,14 L2,12 L10,10 Z" />
            </svg>
          </div>

          {/* Bottom Year */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <span className="text-[#d4af37] text-xs font-serif tracking-[0.2em] opacity-80">
              {year}
            </span>
          </div>
        </div>
      </div>

      {/* Description below book */}
      <div className="mt-6 text-center max-w-xs px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-[#4a3f35] text-sm italic font-manuscript leading-relaxed">
          "{description}"
        </p>
      </div>
    </div>);

}
export function BooksSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();
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
          {...book}
          onClick={() => navigate(`/book/${book.id}`)} />

        )}
      </div>
    </section>);

}