import React, { useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrnamentalDivider } from '../components/OrnamentalDivider';
import { useLanguage } from '../contexts/LanguageContext';
interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}
export function EventsPage() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const events: Event[] = [
  {
    id: 'gothic-symposium-1936',
    title: language === 'en' ? 'The Gothic Symposium' : 'ندوة الأدب القوطي',
    date: language === 'en' ? 'October 15, 1936' : '15 أكتوبر 1936',
    location:
    language === 'en' ?
    'Oxford University, England' :
    'جامعة أكسفورد، إنجلترا',
    description:
    language === 'en' ?
    'Delivered the keynote address on "The Architecture of Fear: Gothic Spaces in Modern Literature." The lecture hall was filled to capacity with scholars and enthusiasts alike, discussing the psychological impact of architectural horror in contemporary fiction.' :
    'ألقى الخطاب الرئيسي حول "هندسة الخوف: الفضاءات القوطية في الأدب الحديث". كانت قاعة المحاضرات ممتلئة بالعلماء والمتحمسين، يناقشون التأثير النفسي للرعب المعماري في الخيال المعاصر.',
    imageUrl:
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80'
  },
  {
    id: 'miskatonic-reading-1933',
    title:
    language === 'en' ?
    'Miskatonic University Reading' :
    'قراءة في جامعة ميسكاتونيك',
    date: language === 'en' ? 'March 21, 1933' : '21 مارس 1933',
    location:
    language === 'en' ? 'Arkham, Massachusetts' : 'أركام، ماساتشوستس',
    description:
    language === 'en' ?
    "A haunting evening reading from \"The Alchemist's Daughter\" in the university's historic library. The atmosphere was electric as candlelight flickered across ancient tomes, and the audience sat spellbound through tales of Prague's alchemical mysteries." :
    'أمسية قراءة مؤثرة من "ابنة الخيميائي" في مكتبة الجامعة التاريخية. كان الجو كهربائياً حيث ترقرق ضوء الشموع عبر المجلدات القديمة، وجلس الجمهور مسحوراً بحكايات أسرار الخيمياء في براغ.',
    imageUrl:
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80'
  },
  {
    id: 'london-signing-1935',
    title: language === 'en' ? 'London Book Signing' : 'توقيع الكتب في لندن',
    date: language === 'en' ? 'December 20, 1935' : '20 ديسمبر 1935',
    location:
    language === 'en' ?
    'Hatchards Bookshop, Piccadilly' :
    'متجر هاتشاردز للكتب، بيكاديللي',
    description:
    language === 'en' ?
    'A memorable signing event for "Echoes of the Void" at London\'s oldest bookshop. Readers queued in the winter cold for hours, eager to discuss the anthology\'s exploration of cosmic horror and the spaces between realities.' :
    'حدث توقيع لا يُنسى لـ "أصداء الفراغ" في أقدم متجر كتب في لندن. وقف القراء في البرد الشتوي لساعات، متلهفين لمناقشة استكشاف المجموعة للرعب الكوني والفراغات بين الحقائق.',
    imageUrl:
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80'
  },
  {
    id: 'edinburgh-festival-1937',
    title:
    language === 'en' ?
    'Edinburgh Literary Festival' :
    'مهرجان إدنبرة الأدبي',
    date: language === 'en' ? 'August 8, 1937' : '8 أغسطس 1937',
    location: language === 'en' ? 'Edinburgh, Scotland' : 'إدنبرة، اسكتلندا',
    description:
    language === 'en' ?
    'Participated in a panel discussion on "The Future of Gothic Literature" alongside distinguished authors. The conversation explored how ancient fears manifest in modern storytelling, and the enduring appeal of the macabre in an increasingly rational world.' :
    'شارك في حلقة نقاش حول "مستقبل الأدب القوطي" إلى جانب مؤلفين مرموقين. استكشفت المحادثة كيف تتجلى المخاوف القديمة في السرد الحديث، والجاذبية الدائمة للمروع في عالم عقلاني متزايد.',
    imageUrl:
    'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80'
  },
  {
    id: 'paris-salon-1934',
    title: language === 'en' ? 'Paris Literary Salon' : 'صالون باريس الأدبي',
    date: language === 'en' ? 'June 12, 1934' : '12 يونيو 1934',
    location:
    language === 'en' ? 'Café de Flore, Paris' : 'مقهى دو فلور، باريس',
    description:
    language === 'en' ?
    'An intimate evening salon discussing the intersection of folklore and fiction. Surrounded by expatriate writers and French intellectuals, the conversation delved into how ancient myths inform contemporary horror, with particular focus on European folk traditions.' :
    'صالون مسائي حميم لمناقشة تقاطع الفولكلور والخيال. محاطاً بالكتاب المغتربين والمثقفين الفرنسيين، تعمقت المحادثة في كيفية إعلام الأساطير القديمة للرعب المعاصر، مع التركيز بشكل خاص على التقاليد الشعبية الأوروبية.',
    imageUrl:
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80'
  },
  {
    id: 'prague-conference-1932',
    title:
    language === 'en' ?
    'Prague Alchemy Conference' :
    'مؤتمر الخيمياء في براغ',
    date: language === 'en' ? 'September 3, 1932' : '3 سبتمبر 1932',
    location:
    language === 'en' ? 'Charles University, Prague' : 'جامعة تشارلز، براغ',
    description:
    language === 'en' ?
    'Presented research on historical alchemy practices that inspired "The Alchemist\'s Daughter." The conference brought together historians, occultists, and writers to explore the mystical traditions of medieval Prague and their influence on modern gothic literature.' :
    'قدم بحثاً عن ممارسات الخيمياء التاريخية التي ألهمت "ابنة الخيميائي". جمع المؤتمر المؤرخين والغامضين والكتاب لاستكشاف التقاليد الصوفية لبراغ في العصور الوسطى وتأثيرها على الأدب القوطي الحديث.',
    imageUrl:
    'https://images.unsplash.com/photo-1541480551145-2370a440d585?w=800&q=80'
  }];

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
            {t('back_to_home')}
          </span>
        </button>
      </div>

      {/* Main Content Container with Border */}
      <div className="max-w-6xl mx-auto min-h-screen bg-[#f4f1e8] relative shadow-2xl my-8 md:my-12 border border-[#d6d3c9]">
        {/* Inner Border Frame */}
        <div className="absolute inset-2 md:inset-4 border border-[#8b7355] opacity-30 pointer-events-none z-10"></div>
        <div className="absolute inset-3 md:inset-6 border border-[#8b7355] opacity-20 pointer-events-none z-10"></div>

        {/* Content */}
        <div className="relative z-20 pt-16 pb-16 px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#8b7355] text-sm tracking-[0.3em] uppercase block mb-2">
              {t('events_subtitle')}
            </span>
            <h1 className="text-5xl font-ornamental text-[#4a3f35] mb-4">
              {t('events_title')}
            </h1>
            <div className="w-24 h-1 bg-[#8b2e2e] mx-auto mt-4 rounded-full opacity-80"></div>
            <p className="text-[#6d5a43] font-manuscript italic mt-6 max-w-2xl mx-auto">
              {t('events_description')}
            </p>
          </div>

          <OrnamentalDivider variant="simple" />

          {/* Events Grid */}
          <div className="space-y-12 mt-16">
            {events.map((event, index) =>
            <div key={event.id}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Image */}
                  <div className="w-full md:w-1/3">
                    <div className="relative group">
                      <div className="absolute inset-0 border-4 border-double border-[#8b7355] opacity-60 pointer-events-none z-10"></div>
                      <div className="absolute inset-2 border border-[#d4af37] opacity-40 pointer-events-none z-10"></div>
                      <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-64 object-cover grayscale sepia opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                      <div className="absolute inset-0 bg-[#4a3f35] opacity-10 mix-blend-multiply"></div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="w-full md:w-2/3">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-[#8b2e2e] bg-opacity-10 text-[#8b2e2e] text-xs uppercase tracking-widest border border-[#8b2e2e] border-opacity-30 rounded-sm">
                        {event.date}
                      </span>
                      <span className="text-[#8b7355] text-sm">•</span>
                      <span className="text-[#6d5a43] text-sm font-manuscript italic">
                        {event.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-ornamental text-[#4a3f35] mb-4">
                      {event.title}
                    </h3>

                    <p className="text-[#4a3f35] leading-relaxed font-manuscript text-justify">
                      {event.description}
                    </p>
                  </div>
                </div>

                {index < events.length - 1 &&
              <div className="mt-12">
                    <OrnamentalDivider variant="simple" />
                  </div>
              }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}