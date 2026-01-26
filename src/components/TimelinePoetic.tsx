import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
const events = [
{
  year: '2024',
  title: {
    en: 'Winter Solstice Collection',
    ar: 'مجموعة الانقلاب الشتوي'
  },
  desc: {
    en: 'Upcoming anthology of winter verses',
    ar: 'مختارات شعرية قادمة لفصل الشتاء'
  }
},
{
  year: '2025',
  title: {
    en: 'The Silent Garden',
    ar: 'الحديقة الصامتة'
  },
  desc: {
    en: 'Novel in verse format',
    ar: 'رواية بأسلوب شعري'
  }
},
{
  year: '2026',
  title: {
    en: 'Collected Works Vol. II',
    ar: 'الأعمال الكاملة - المجلد الثاني'
  },
  desc: {
    en: 'Comprehensive retrospective',
    ar: 'نظرة شاملة على الأعمال السابقة'
  }
}];

export function TimelinePoetic() {
  const { t, language, isRTL } = useLanguage();
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
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
          className="text-3xl md:text-4xl font-serif text-center mb-20 text-text-primary">

          {t('timeline.title')}
        </motion.h2>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent-blue/20 -translate-x-1/2" />

          <div className="space-y-24">
            {events.map((event, index) =>
            <motion.div
              key={event.year}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.2
              }}
              className={`flex items-center justify-between gap-8 ${index % 2 === 0 ? isRTL ? 'flex-row-reverse' : 'flex-row' : isRTL ? 'flex-row' : 'flex-row-reverse'}`}>

                <div
                className={`flex-1 ${index % 2 === 0 ? isRTL ? 'text-left' : 'text-right' : isRTL ? 'text-right' : 'text-left'}`}>

                  <h3 className="text-2xl font-serif text-text-primary mb-2">
                    {event.title[language]}
                  </h3>
                  <p className="text-text-secondary font-sans">
                    {event.desc[language]}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border border-accent-blue/30 rounded-full shadow-sm shrink-0">
                  <span className="text-sm font-sans font-bold text-accent-blue">
                    {event.year}
                  </span>
                </div>

                <div className="flex-1" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}