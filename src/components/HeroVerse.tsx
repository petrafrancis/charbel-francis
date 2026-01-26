import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
export function HeroVerse() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
          className="mb-8">

          <span className="block text-accent-blue tracking-[0.2em] text-sm font-sans mb-4 uppercase">
            {isRTL ? 'مجموعة شعرية' : 'Poetic Collection'}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-primary mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-sans text-text-secondary max-w-2xl mx-auto leading-relaxed italic">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.8,
            duration: 1
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 w-full h-full pointer-events-none">

          {/* Abstract decorative elements */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">

        <div className="w-[1px] h-16 bg-gradient-to-b from-text-secondary/0 via-text-secondary/30 to-text-secondary/0" />
      </motion.div>
    </section>);

}