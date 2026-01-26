import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
const books = [
{
  id: 1,
  title: {
    en: 'Silence of Dawn',
    ar: 'صمت الفجر'
  },
  year: '2023',
  color: '#E8F1F5',
  excerpt: {
    en: 'In the quiet moments before light breaks...',
    ar: 'في لحظات السكون قبل بزوغ الضوء...'
  }
},
{
  id: 2,
  title: {
    en: 'Whispering Roots',
    ar: 'جذور هامسة'
  },
  year: '2021',
  color: '#FBF8F3',
  excerpt: {
    en: 'Deep beneath the earth, stories entwine...',
    ar: 'في أعماق الأرض، تتشابك الحكايات...'
  }
},
{
  id: 3,
  title: {
    en: 'Echoes of Time',
    ar: 'أصداء الزمن'
  },
  year: '2019',
  color: '#F0EBE5',
  excerpt: {
    en: 'Time flows like a river, carrying memories...',
    ar: 'يتدفق الزمن كالنهر، حاملاً الذكريات...'
  }
}];

export function BooksFloating() {
  const { t, language } = useLanguage();
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-3xl md:text-4xl font-serif text-center mb-24 text-text-primary">

          {t('books.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {books.map((book, index) =>
          <motion.div
            key={book.id}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.8
            }}
            className="group relative">

              <div
              className="aspect-[2/3] bg-white shadow-xl rounded-sm p-8 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-4 relative z-10"
              style={{
                backgroundColor: book.color
              }}>

                <div className="absolute inset-2 border border-black/5 rounded-sm" />

                <div className="text-center mt-12">
                  <h3 className="font-serif text-2xl text-text-primary mb-2">
                    {book.title[language]}
                  </h3>
                  <span className="font-sans text-sm text-text-secondary tracking-widest">
                    {book.year}
                  </span>
                </div>

                <p className="font-serif text-lg text-text-secondary text-center italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  "{book.excerpt[language]}"
                </p>
              </div>

              {/* Shadow effect */}
              <div className="absolute inset-0 bg-black/5 blur-xl transform translate-y-4 scale-90 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}