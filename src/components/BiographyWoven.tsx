import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
export function BiographyWoven() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="py-32 px-6 bg-white/50 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              x: isRTL ? 50 : -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1
            }}
            className="flex-1 relative">

            <div className="aspect-[3/4] bg-stone-200 rounded-sm overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Poet writing"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />

            </div>
            <div
              className={`absolute -bottom-6 -right-6 w-full h-full border border-accent-blue/30 -z-10 ${isRTL ? '-left-6 right-auto' : '-right-6'}`} />

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: isRTL ? -50 : 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              delay: 0.2
            }}
            className="flex-1 text-center md:text-start">

            <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-8">
              {t('bio.title')}
            </h2>
            <div className="space-y-6 font-sans text-lg text-text-secondary leading-relaxed">
              <p>
                {isRTL ?
                'بدأت الرحلة بكلمة واحدة، همسة في صمت الليل. عبر السنوات، تحولت هذه الهمسات إلى أبيات، والأبيات إلى قصص تلامس الروح.' :
                'The journey began with a single word, a whisper in the silence of the night. Over the years, these whispers transformed into verses, and verses into stories that touch the soul.'}
              </p>
              <p>
                {isRTL ?
                'كل قصيدة هي مرآة تعكس تعقيدات التجربة الإنسانية، تنسج معاً خيوط الفرح والحزن، الحب والفقدان.' :
                'Each poem is a mirror reflecting the complexities of the human experience, weaving together threads of joy and sorrow, love and loss.'}
              </p>
              <p className="font-serif text-xl italic text-accent-blue pt-4">
                {isRTL ?
                '"الشعر ليس مجرد كلمات، بل هو نبض الحياة المكتوب."' :
                '"Poetry is not just words, but the written pulse of life."'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}