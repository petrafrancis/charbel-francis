import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location: string;
}
export function LifeJourneyTimeline() {
  const { t, language } = useLanguage();
  const events: TimelineEvent[] = [
  {
    year: '1892',
    title: language === 'en' ? 'The Beginning' : 'البداية',
    description:
    language === 'en' ?
    'Born in the misty highlands of Scotland during a late autumn storm.' :
    'ولد في مرتفعات اسكتلندا الضبابية خلال عاصفة خريفية متأخرة.',
    location: language === 'en' ? 'Scottish Highlands' : 'مرتفعات اسكتلندا'
  },
  {
    year: '1910',
    title: language === 'en' ? 'Academic Pursuit' : 'السعي الأكاديمي',
    description:
    language === 'en' ?
    'Enrolled at Miskatonic University to study folklore and ancient dialects.' :
    'التحق بجامعة ميسكاتونيك لدراسة الفولكلور واللهجات القديمة.',
    location:
    language === 'en' ? 'Arkham, Massachusetts' : 'أركام، ماساتشوستس'
  },
  {
    year: '1919',
    title: language === 'en' ? 'The Great Journey' : 'الرحلة العظيمة',
    description:
    language === 'en' ?
    'Traveled through the Carpathians, collecting local legends and drafting first manuscripts.' :
    'سافر عبر جبال الكاربات، وجمع الأساطير المحلية وصاغ المخطوطات الأولى.',
    location: language === 'en' ? 'Carpathian Mountains' : 'جبال الكاربات'
  },
  {
    year: '1924',
    title: language === 'en' ? 'First Publication' : 'النشر الأول',
    description:
    language === 'en' ?
    'Published "The Whispering Gallery" to critical acclaim and public unease.' :
    'نشر "معرض الهمس" وسط إشادة نقدية وقلق عام.',
    location: language === 'en' ? 'London, England' : 'لندن، إنجلترا'
  },
  {
    year: '1938',
    title: language === 'en' ? 'Current Residence' : 'الإقامة الحالية',
    description:
    language === 'en' ?
    'Resides in a repurposed lighthouse, writing by candlelight.' :
    'يقيم في منارة أعيد استخدامها، ويكتب على ضوء الشموع.',
    location: language === 'en' ? 'Maine Coast' : 'ساحل مين'
  }];

  return (
    <div className="relative py-12 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-ornamental text-[#8b2e2e] mb-2">
          {t('life_journey')}
        </h3>
        <div className="w-16 h-px bg-[#8b7355] mx-auto opacity-50"></div>
      </div>

      {/* Vertical Line */}
      <div
        className={`absolute top-24 bottom-12 w-px bg-[#8b7355] opacity-30 ${language === 'ar' ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`}>
      </div>

      <div className="space-y-12">
        {events.map((event, index) =>
        <div
          key={index}
          className={`relative flex items-center justify-between ${index % 2 === 0 ? language === 'ar' ? 'flex-row-reverse' : 'flex-row' : language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>

            {/* Content Side */}
            <div
            className={`w-5/12 ${index % 2 === 0 ? language === 'ar' ? 'text-left' : 'text-right' : language === 'ar' ? 'text-right' : 'text-left'}`}>

              <span className="block text-[#8b2e2e] font-ornamental text-lg mb-1">
                {event.year}
              </span>
              <h4 className="text-[#4a3f35] font-bold font-manuscript text-lg mb-2">
                {event.title}
              </h4>
              <p className="text-[#6d5a43] text-sm font-manuscript leading-relaxed">
                {event.description}
              </p>
              <span className="block text-[#8b7355] text-xs italic mt-2 opacity-80">
                {event.location}
              </span>
            </div>

            {/* Center Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 bg-[#f4f1e8] border-2 border-[#8b2e2e] rounded-full shadow-sm"></div>
              <div className="absolute inset-0 w-4 h-4 bg-[#8b2e2e] opacity-20 rounded-full animate-pulse"></div>
            </div>

            {/* Empty Side for spacing */}
            <div className="w-5/12"></div>
          </div>
        )}
      </div>
    </div>);

}