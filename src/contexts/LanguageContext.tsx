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
    en: 'Est. MDCsCsCXCdIsI',
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
    en: 'New Release',
    ar: 'الإصدار الجديد'
  },
  expected: {
    en: '8 March, 2026',
    ar: '8 آذار 2026'
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
    en:'Charbel Chafic Francis is a Lebanese educator and writer, married with three children. He obtained a Teaching Degree (BA) in Arabic Language and Literature from the Lebanese University – Third Branch in Qoubbeh in 1990, then completed a year of postgraduate studies in Arabic Language and Literature at the Lebanese University – Faculty of Letters and Human Sciences, Second Branch in Fanar in 1993.',
    ar:'شربل شفيق فرنسيس مربٍّ وأديب لبناني، متأهّل وله ثلاثة أولاد. نال إجازة تعليميّة في اللغة العربيّة وآدابها من الجامعة اللبنانيّة–الفرع الثالث في القبة عام 1990، ثم تابع سنة دراسات عليا في اللغة العربيّة وآدابها في الجامعة اللبنانيّة–كليّة الآداب والعلوم الإنسانيّة–الفرع الثاني في الفنار عام 1993.'
  },
  biography_paragraph_2: {
    en:'Since 2001, he has worked as a teacher and Arabic Language Coordinator at Saint George Secondary School – Ashash, affiliated with the Lebanese Maronite Order. Since 2002, he has served as Secretary of the Cultural and Educational Association for the Schools of Zgharta–Zawiya. He also held the position of Media Officer for the Teachers’ Syndicate – North Branch between 2005 and 2009, and is a founding member and Vice President of the “Bukhoor Al-Wahy Forum.”',
    ar: 'يعمل منذ عام 2001 مدرّسًا ومنسّقًا للّغة العربيّة في ثانويّة مار جرجس–عشاش للرهبانيّة اللبنانيّة المارونيّة، ويتولّى منذ عام 2002 أمانة سرّ الجمعيّة الثقافيّة التربويّة لمدارس زغرتا–الزاوية. كما شغل منصب المسؤول الإعلامي لنقابة المعلّمين–فرع الشمال بين عامي 2005 و2009، وهو عضو مؤسّس ونائب رئيس “منتدى بخور الوحي”.'
  },
  biography_paragraph_3: {
    en:'He has extensive experience in the fields of Arabic language, literature, and curriculum development, and has participated in specialized training courses, earning several certificates and commendations. Notably, he received a certificate of appreciation from the Holy Spirit University of Kaslik (2015), a commendation from the President of the Republic, General Michel Aoun, for his book Hibr Al-Nidal (2019), and a medal and commendation from the Minister of National Defense, Yaacoub Sarraf, for the song Askarna Ma Biyenhani (2018). He has taken part in poetry evenings and cultural seminars, contributed to the linguistic editing of several books, and helped prepare educational assessment materials. His published works include Hibr Al-Nidal, Sada Al-Wijdan, and Shahqat Fikr, with forthcoming titles Ilayha Wa Hiya Ta‘lam and Bayna Al-Tabshoura Wa Al-Yara‘… Huroof ‘ala Darb Al-Risala.',
    ar:'يتمتّع بخبرات واسعة في مجال اللغة والأدب وتطوير مناهج تعليم العربيّة، وشارك في دورات تدريبيّة متخصّصة ونال شهادات وتنويهات عدّة، أبرزها شهادة تقدير من جامعة الروح القدس–الكسليك (2015)، وتنويه رئيس الجمهوريّة العماد ميشال عون عن كتابه حبرُ النّضال (2019)، ووسام وتنويه وزير الدفاع الوطني يعقوب الصرّاف عن أغنية عسكرنا ما بينحني (2018). شارك في أمسيات شعريّة وندوات ثقافيّة، وأسهم في التدقيق اللغوي لعدد من الكتب وفي إعداد مواد تربويّة، وله إصدارات أدبيّة منها حبرُ النّضال، صدى الوجدان، شهقة فكر، إضافة إلى أعمال قيد الطباعة هي إليها وهي تعلمُ وبين الطبشورة واليراع… حروفٌ على درب الرسالة.'
  },

  // Timeline Events
  timeline_beginning: {
    en: 'Obtaining a University Degree',
    ar: 'نيل الإجازة الجامعيّة'
  },
  timeline_beginning_desc: {
    en: 'Obtained a Teaching Degree in Arabic Language and Literature from the Lebanese University – Third Branch, Qobbeh',
    ar: 'نال إجازة تعليميّة في اللغة العربيّة وآدابها من الجامعة اللبنانيّة – الفرع الثالث في القبة'
  },
  timeline_beginning_location: {
    en: 'Lebanese University – Third Branch, Qobbeh.',
    ar: 'الجامعة اللبنانيّة – الفرع الثالث في القبة'
  },
  timeline_academic: {
    en: 'Pursuing Postgraduate Studies',
    ar:'متابعة الدراسات العليا'
  },
  timeline_academic_desc: {
    en: 'Completed a year of postgraduate studies in Arabic Language and Literature at the Lebanese University – Faculty of Arts and Humanities – Second Branch, Fanar.',
    ar: 'تابع سنة دراسات عليا في اللغة العربيّة وآدابها في الجامعة اللبنانيّة – كليّة الآداب والعلوم الإنسانيّة – الفرع الثاني في الفنار.'
  },
  timeline_academic_location: {
    en: 'Lebanese University – Faculty of Arts and Humanities – Second Branch, Fanar.',
    ar: 'الجامعة اللبنانيّة – كليّة الآداب والعلوم الإنسانيّة – الفرع الثاني في الفنار.'
  },
  timeline_journey: {
    en: 'Launching an Educational Career',
    ar: 'الانطلاق في العمل التربوي'
  },
  timeline_journey_desc: {
    en: 'Began his educational career as an Arabic language teacher and coordinator at Saint George Secondary School – Ashash, Lebanese Maronite Order.',
    ar: 'باشر العمل مدرّسًا ومنسّقًا للّغة العربيّة في ثانويّة مار جرجس – عشاش للرهبانيّة اللبنانيّة المارونيّة.'
  },
  timeline_journey_location: {
    en: 'St. Georges School - Ashash, Lebanon',
    ar: 'ثانويّة مار جرجس – عشاش للرهبانيّة اللبنانيّة المارونيّة'
  },
  timeline_publication: {
    en: 'Assuming a Cultural and Educational Role',
    ar: 'تولّي منصب ثقافي تربوي'
  },
  timeline_publication_desc: {
    en: 'Assumed the role of Secretary of the Cultural and Educational Association of Zgharta–Zawiya Schools.',
    ar: 'تولّى أمانة سرّ الجمعيّة الثقافيّة التربويّة لمدارس زغرتا – الزاوية.'
  },
  timeline_publication_location: {
    en: 'Cultural and Educational Association of Zgharta–Zawiya Schools.',
    ar: 'جمعيّة الثقافة والتعليم لمدارس زغرتا – الزاوية.'
  },
  timeline_residence: {
    en: 'Serving as a Media Officer',
    ar: 'مسؤول إعلامي لنقابة المعلّمين'
  },
  timeline_residence_desc: {
    en: 'Appointed Media Officer of the Teachers’ Syndicate – Northern Branch.',
    ar: 'شغل منصب المسؤول الإعلامي لنقابة المعلّمين – فرع الشمال.'
  },
  timeline_residence_location: {
    en: 'Teachers’ Syndicate – Northern Branch.',
    ar: 'نقابة المعلّمين – فرع الشمال.'
  },

  timeline_syndicate: {
    en: 'Conclusion of Syndicate Duties',
    ar: 'ختام المهمّة النقابيّة'
  },
  timeline_syndicate_desc: {
    en: 'Concluded his term as Media Officer of the Teachers’ Syndicate – Northern Branch.',
    ar: 'أنهى مهامه كمسؤول إعلامي لنقابة المعلّمين – فرع الشمال.'
  },
  timeline_syndicate_location: {
    en: 'Teachers’ Syndicate – Northern Branch.',
    ar: 'نقابة المعلّمين – فرع الشمال.'
  },

  timeline_certificate: {
    en: 'Academic Certificate of Appreciation',
    ar: 'شهادة تقدير أكاديمية'
  },
  timeline_certificate_desc: {
    en: 'Received a Certificate of Appreciation from the Holy Spirit University of Kaslik (USEK).',
    ar: 'نال شهادة تقدير من جامعة الروح القدس – الكسليك.'
  },
  timeline_certificate_location: {
    en: 'Holy Spirit University of Kaslik (USEK).',
    ar: 'جامعة الروح القدس – الكسليك.'
  },

  timeline_recognition: {
    en: 'National Artistic Recognition',
    ar: 'تكريم وطني فني'
  },
  timeline_recognition_desc: {
    en: 'Awarded a medal and commendation from the Minister of National Defense, Yaacoub Sarraf, for the song Our Soldiers Never Bow.',
    ar: 'نال وسام وتنويه وزير الدفاع الوطني يعقوب الصرّاف عن أغنية عسكرنا ما بينحني.'
  },
  timeline_recognition_location: {
    en: 'Minister of National Defense, Yaacoub Sarraf.',
    ar: 'وزير الدفاع الوطني يعقوب الصرّاف'
  },

  timeline_commendation: {
    en: 'Presidential Literary Commendation',
    ar: 'تنويه رئاسي أدبي'
  },
  timeline_commendation_desc: {
    en: 'Received a presidential commendation from President General Michel Aoun for his book Ink of Struggle.',
    ar: 'نال تنويه رئيس الجمهوريّة العماد ميشال عون عن كتابه حبرُ النّضال.'
  },
  timeline_commendation_location: {
    en: 'President General Michel Aoun.',
    ar: 'رئيس الجمهوريّة العماد ميشال عون'
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
    en: 'Shahqat Fikr',
    ar: 'شهئة فكر'
  },
  book_clockwork_heart_desc: {
    en: 'A gothic romance interwoven with mechanical horror.',
    ar: 'رومانسية قوطية منسوجة مع رعب ميكانيكي.'
  },
  book_clockwork_heart_summary: {
    en:'A poetry collection written in the colloquial dialect that touches on the details of everyday life and the human inner world, delving into emotions of love and existential questions through a simple, heartfelt style. The poet blends popular emotional expression with deep philosophical reflection, offering vivid, metaphor-rich texts with a lyrical quality, a distinct poetic identity, and a profound exploration of humanity’s ongoing search for meaning in an ever-changing world.',
    ar: 'ديوان شعري باللهجة المحكيّة يلامس تفاصيل الحياة اليوميّة والوجدان الإنساني، ويغوص في مشاعر الحبّ وتساؤلات الوجود بأسلوب بسيط وقريب إلى القلب. يمزج الشاعر بين العاطفة الشعبيّة والتأمّل الفلسفي العميق، مقدّمًا نصوصًا نابضة بالحياة، غنيّة بالمجاز، وقابلة للغنائيّة، تحمل هوية شعريّة متفرّدة وتعبّر عن بحث الإنسان الدائم عن المعنى في عالم متقلّب.'
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