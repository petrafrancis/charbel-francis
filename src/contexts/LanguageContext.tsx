import React, { useEffect, useState, createContext, useContext, ReactNode } from 'react';
type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';
interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
// Comprehensive translation dictionary
const translations: Record<string, Record<Language, string>> = {
  // Navigation & Common
  back_to_collection: {
    en: 'Back to Collection',
    ar: 'العودة إلى المجموعة'
  },
  back_to_home: {
    en: 'Back to Home',
    ar: 'العودة إلى الصفحة الرئيسية'
  },
  view_events: {
    en: 'View Events & Appearances',
    ar: 'عرض الفعاليات والمشاركات'
  },
  click_to_read_more: {
    en: 'Click to read more',
    ar: 'انقر للقراءة المزيد'
  },

  // Headers & Titles
  manuscript_subtitle: {
    en: 'Est. MDCCCXCdIsI',
    ar: 'الشّاعر والأديب'
  },
  author_name: {
    en: 'Charbel Francis',
    ar: 'شربل فرنسيس'
  },
  author_title: {
    en: 'Purveyor of Fine Gothic Mysteries & Eldritch Tales',
    ar: 'بائع أسرار القوطية الرائعة وحكايات الغرائب'
  },
  about_author: {
    en: 'About the Author',
    ar: 'عن المؤلف'
  },
  life_journey: {
    en: 'Life Journey',
    ar: 'رحلة الحياة'
  },
  selected_works: {
    en: 'Selected Works',
    ar: 'مختارات أدبية'
  },
  the_collection: {
    en: 'The Collection',
    ar: 'المجموعة الكاملة'
  },
  forthcoming: {
    en: 'Forthcoming from the Press',
    ar: 'إصدارات قادمة من المطبعة'
  },
  expected: {
    en: 'Expected Autumn, 1938',
    ar: 'متوقع في خريف 1938'
  },
  featured_event: {
    en: 'New',
    ar: 'جديد'
  },
  book_signing_event: {
    en: 'Book Signing Event',
    ar: 'حدث توقيع الكتاب'
  },

  // Biography
  biography_paragraph_1: {
    en: 'Born in the misty highlands during the late autumn of 1892, Arthur Blackwood has spent a lifetime chronicling the whispers that echo through the corridors of time. His fascination with the arcane began not in a library, but in the crumbling ruins of his ancestral home, where he discovered a cache of letters detailing encounters with the unexplained.',
    ar: 'وُلد في المرتفعات الضبابية خلال أواخر خريف عام 1892، قضى آرثر بلاكوود حياته في توثيق الهمسات التي تتردد في ممرات الزمن. بدأ شغفه بالغامض ليس في مكتبة، بل في أنقاض منزله الأبوي المتداعي، حيث اكتشف مجموعة من الرسائل التي تصف لقاءات مع غير المفسر.'
  },
  biography_paragraph_2: {
    en: 'Educated at Miskatonic University before its unfortunate closure, Blackwood dedicated his early years to the study of folklore and forgotten dialects. It was during his travels through the Carpathians that he first put quill to parchment, drafting what would become his seminal work, The Shadow Over Innsmouth.',
    ar: 'تلقى تعليمه في جامعة ميسكاتونيك قبل إغلاقها المؤسف، كرس بلاكوود سنواته الأولى لدراسة الفولكلور واللهجات المنسية. كان خلال رحلاته عبر جبال الكاربات حيث وضع القلم على الرق لأول مرة، وصاغ ما سيصبح عمله الأساسي، الظل فوق إينسماوث.'
  },
  biography_paragraph_3: {
    en: 'Today, he resides in a repurposed lighthouse off the coast of Maine, accompanied only by his loyal wolfhound, Barnaby, and an extensive collection of maps to places that no longer exist. He writes exclusively by candlelight, believing that electric illumination chases away the very shadows he seeks to capture.',
    ar: 'اليوم، يقيم في منارة أعيد استخدامها قبالة ساحل مين، برفقة كلبه الذئبي المخلص بارنابي فقط، ومجموعة واسعة من الخرائط لأماكن لم تعد موجودة. يكتب حصرياً على ضوء الشموع، معتقداً أن الإضاءة الكهربائية تطرد الظلال نفسها التي يسعى لالتقاطها.'
  },

  // Timeline Events
  timeline_beginning: {
    en: 'The Beginning',
    ar: 'البداية'
  },
  timeline_beginning_desc: {
    en: 'Born in the misty highlands of Scotland during a late autumn storm.',
    ar: 'ولد في مرتفعات اسكتلندا الضبابية خلال عاصفة خريفية متأخرة.'
  },
  timeline_beginning_location: {
    en: 'Scottish Highlands',
    ar: 'مرتفعات اسكتلندا'
  },
  timeline_academic: {
    en: 'Academic Pursuit',
    ar: 'السعي الأكاديمي'
  },
  timeline_academic_desc: {
    en: 'Enrolled at Miskatonic University to study folklore and ancient dialects.',
    ar: 'التحق بجامعة ميسكاتونيك لدراسة الفولكلور واللهجات القديمة.'
  },
  timeline_academic_location: {
    en: 'Arkham, Massachusetts',
    ar: 'أركام، ماساتشوستس'
  },
  timeline_journey: {
    en: 'The Great Journey',
    ar: 'الرحلة العظيمة'
  },
  timeline_journey_desc: {
    en: 'Traveled through the Carpathians, collecting local legends and drafting first manuscripts.',
    ar: 'سافر عبر جبال الكاربات، وجمع الأساطير المحلية وصاغ المخطوطات الأولى.'
  },
  timeline_journey_location: {
    en: 'Carpathian Mountains',
    ar: 'جبال الكاربات'
  },
  timeline_publication: {
    en: 'First Publication',
    ar: 'النشر الأول'
  },
  timeline_publication_desc: {
    en: 'Published "The Whispering Gallery" to critical acclaim and public unease.',
    ar: 'نشر "معرض الهمس" وسط إشادة نقدية وقلق عام.'
  },
  timeline_publication_location: {
    en: 'London, England',
    ar: 'لندن، إنجلترا'
  },
  timeline_residence: {
    en: 'Current Residence',
    ar: 'الإقامة الحالية'
  },
  timeline_residence_desc: {
    en: 'Resides in a repurposed lighthouse, writing by candlelight.',
    ar: 'يقيم في منارة أعيد استخدامها، ويكتب على ضوء الشموع.'
  },
  timeline_residence_location: {
    en: 'Maine Coast',
    ar: 'ساحل مين'
  },

  // Books

  book_alchemists_daughter_title: {
    en: "The Alchemist's Daughter",
    ar: 'ابنة الخيميائي'
  },
  book_alchemists_daughter_desc: {
    en: 'Alchemy and obsession collide in 17th century Prague.',
    ar: 'الخيمياء والهوس يتصادمان في براغ القرن السابع عشر.'
  },
  book_alchemists_daughter_summary: {
    en: "In the winding streets of 17th century Prague, the daughter of a renowned alchemist discovers her father's true goal was not gold, but immortality. As she uncovers his dark experiments, she realizes she is the final ingredient in his magnum opus. A tale of betrayal, magic, and the high price of eternal life.",
    ar: 'في شوارع براغ المتعرجة في القرن السابع عشر، تكتشف ابنة خيميائي مشهور أن هدف والدها الحقيقي لم يكن الذهب، بل الخلود. بينما تكشف تجاربه المظلمة، تدرك أنها المكون الأخير في تحفته. قصة خيانة وسحر وثمن الخلود الباهظ.'
  },
  book_alchemists_daughter_genre: {
    en: 'Historical Fantasy',
    ar: 'خيال تاريخي'
  },

  book_echoes_void_title: {
    en: 'Echoes of the Void',
    ar: 'أصداء الفراغ'
  },
  book_echoes_void_desc: {
    en: 'A collection of short stories exploring the spaces between worlds.',
    ar: 'مجموعة قصص قصيرة تستكشف الفضاءات بين العوالم.'
  },
  book_echoes_void_summary: {
    en: 'A chilling anthology of short stories that explore the thin veil between our reality and the void beyond. From a mirror that reflects a different room to a clock that counts backwards to the end of time, these tales will leave you questioning the nature of existence itself.',
    ar: 'مختارات مرعبة من القصص القصيرة التي تستكشف الحجاب الرقيق بين واقعنا والفراغ خلفه. من مرآة تعكس غرفة مختلفة إلى ساعة تعد عكسياً حتى نهاية الزمن، هذه الحكايات ستجعلك تتساءل عن طبيعة الوجود نفسه.'
  },
  book_echoes_void_genre: {
    en: 'Cosmic Horror Anthology',
    ar: 'مختارات رعب كوني'
  },

  book_clockwork_heart_title: {
    en: 'The Clockwork Heart',
    ar: 'القلب الميكانيكي'
  },
  book_clockwork_heart_desc: {
    en: 'A gothic romance interwoven with mechanical horror.',
    ar: 'رومانسية قوطية منسوجة مع رعب ميكانيكي.'
  },
  book_clockwork_heart_summary: {
    en: 'In the gas-lit streets of Victorian London, a watchmaker discovers a mechanism that can beat forever—but at a terrible cost. When his beloved falls gravely ill, he must choose between her mortality and a clockwork existence. A gothic romance interwoven with mechanical horror, exploring the boundary between the soul and the machine. As gears turn and springs wind, the question remains: can love survive when the heart no longer beats with blood, but with brass and steam?',
    ar: 'في شوارع لندن الفيكتورية المضاءة بالغاز، يكتشف صانع الساعات آلية يمكنها أن تنبض إلى الأبد—لكن بثمن فظيع. عندما تصاب حبيبته بمرض خطير، يجب عليه الاختيار بين فانيتها ووجود ميكانيكي. رومانسية قوطية منسوجة مع رعب ميكانيكي، تستكشف الحدود بين الروح والآلة. بينما تدور التروس وتلتف الينابيع، يبقى السؤال: هل يمكن للحب أن ينجو عندما لا يعود القلب ينبض بالدم، بل بالنحاس والبخار؟'
  },
  book_clockwork_heart_genre: {
    en: 'Gothic Romance',
    ar: 'رومانسية قوطية'
  },

  // Book Details
  first_edition: {
    en: 'First Edition',
    ar: 'الطبعة الأولى'
  },
  book_critics_note: {
    en: 'Critics have described this work as "a haunting exploration of the human condition," praising Blackwood\'s ability to weave the supernatural with the deeply personal. The first edition prints are highly sought after by collectors for their unique binding and the rumored hidden messages within the chapter headers.',
    ar: 'وصف النقاد هذا العمل بأنه "استكشاف مؤثر للحالة الإنسانية"، مشيدين بقدرة بلاكوود على نسج الخارق للطبيعة مع الشخصي العميق. طبعات الطبعة الأولى مطلوبة بشدة من قبل جامعي التحف لربطها الفريد والرسائل المخفية المزعومة داخل رؤوس الفصول.'
  },
  book_signed_copies: {
    en: 'Signed copies of this edition will be available at the upcoming autumn gala.',
    ar: 'ستكون نسخ موقعة من هذه الطبعة متاحة في الحفل الخريفي القادم.'
  },

  // Events
  events_title: {
    en: 'Events & Appearances',
    ar: 'الفعاليات والمشاركات'
  },
  events_subtitle: {
    en: 'Literary Engagements',
    ar: 'المشاركات الأدبية'
  },
  events_description: {
    en: 'A chronicle of literary gatherings, readings, and scholarly discourse spanning the years of authorship.',
    ar: 'سجل للتجمعات الأدبية والقراءات والخطاب العلمي عبر سنوات التأليف.'
  },
  view_all_events: {
    en: 'View All Events',
    ar: 'عرض جميع الفعاليات'
  },
  events_preview_text: {
    en: 'Explore a chronicle of literary gatherings, readings, and scholarly discourse that have shaped the author\'s journey through the years.',
    ar: 'استكشف سجل الفعاليات الأدبية والقراءات والمشاركات التي شكلت مسيرة المؤلف عبر السنوات.'
  },

  // Footer
  rights_reserved: {
    en: 'All Rights Reserved.',
    ar: 'جميع الحقوق محفوظة.'
  },
  typeset: {
    en: 'Typeset in EB Garamond',
    ar: 'تم التنضيد بخط EB Garamond'
  },
  genre: {
    en: 'Genre',
    ar: 'النوع الأدبي'
  },
  released: {
    en: 'Released',
    ar: 'تاريخ الإصدار'
  },
  summary: {
    en: 'Summary',
    ar: 'ملخص'
  },
  join_waitlist: {
    en: 'Join the Waitlist',
    ar: 'انضم إلى قائمة الانتظار'
  },
  cover_pending: {
    en: 'Cover Art Pending',
    ar: 'صورة الغلاف قيد الإعداد'
  }
};
export function LanguageProvider({ children }: { children: ReactNode; }) {
  const [language, setLanguageState] = useState<Language>('ar');
  const direction = language === 'ar' ? 'rtl' : 'ltr';
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);
  const toggleLanguage = () => {
    setLanguageState((prev) => prev === 'en' ? 'ar' : 'en');
  };
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };
  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        toggleLanguage,
        setLanguage,
        t
      }}>

      {children}
    </LanguageContext.Provider>);

}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}