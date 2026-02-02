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
  view_more: {
    en: 'View more',
    ar: 'عرض المزيد'
  },

  /// Headers & Titles
  manuscript_subtitle: {
    en: 'The Poet and Writer',
    ar: 'الشّاعر والأديب'
  },
  author_name: {
    en: 'Charbel Francis',
    ar: 'شربل فرنسيس'
  },
  author_title: {
    en: 'Collector of Emotions, Soul Reflections, and Tales of the Homeland',
    ar: 'جامع المشاعر وتأملات الروح وحكايات الوطن'
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

  book_clockwork_heart_title: {
    en: 'Shahqat Fikr',
    ar: 'شهئة فكر'
  },
  book_clockwork_heart_desc: {
    en: 'A vibrant poetry collection in the colloquial dialect exploring love, daily life, and the human inner world, blending heartfelt emotion with philosophical reflection.',
    ar: 'ديوان شعري حيّ باللهجة المحكيّة يستكشف الحبّ والحياة اليومية والوجدان الإنساني، ويجمع بين العاطفة الصادقة والتأمّلات الفلسفية.'
  },
  book_clockwork_heart_summary: {
    en: "A poetry collection written in the colloquial dialect, exploring a wide range of themes related to everyday life, human emotions, and love, infused with touches of philosophy and deep reflection. Its style is marked by simplicity and emotional closeness, blending popular, heartfelt expression with a notable intellectual depth.\n\nIn several poems, the poet delves into feelings of love and emotions tied to the human condition, framed within philosophical perspectives that express the soul’s passion and its longing for wholeness and spiritual and intellectual connection. The collection also explores the human inner world, with its contradictions and existential questions about life, death, and being—reflecting an ongoing search for meaning in a world filled with challenges and pain. In addition, it addresses themes related to human relationships and social interactions.\n\nThe collection includes references to various occasions, both personal and social, presented through a creative style that lends itself artistically to musical and lyrical adaptation. Critical reception highlights the collection’s dynamic and vibrant poetic style, noting that the careful use of colloquial language gives the poems a distinctive character. “Shahqat Fikr” (A Sigh of Thought) is celebrated for its emotional and intellectual richness, offering profound psychological and philosophical reflections, making it a truly unique poetic work.",
    
    ar: "ديوان شعري باللهجة المحكيّة تتناول قصائده مواضيع شتّى تتعلّق بالحياة اليوميّة، والوجدان الإنساني، والحب، مع لمسات من الفلسفة والتأمّلات العميقة. يتّسم أسلوبه بالبساطة والقرب من القلب، حيث يمزج بين الأسلوب الشعبي والعاطفي، لكنه يحمل في طيّاته عمقًا فكريًا لافتًا.\n\nيتناول الشاعر في بعض قصائده مشاعر الحبّ والعواطف المرتبطة بالوجود الإنساني ضمن تصوّرات فلسفيّة تعبّر عن شغف النفس وتوقها إلى التكامل والارتباط الروحي والعقلي. كما يضيء الديوان على الوجدان الداخلي للإنسان، وما يعتريه من تناقضات وتساؤلات حول الحياة والموت والوجود، في انعكاسٍ لبحثٍ دائم عن المعنى في عالم مليء بالتحدّيات والآلام، إضافة إلى تناوله موضوعات تتعلّق بالعلاقات الإنسانيّة والتفاعلات المجتمعيّة.\n\nويحمل الديوان إشارات إلى مناسبات مختلفة، اجتماعيّة كانت أم شخصيّة، يسكبها الشاعر بأسلوب إبداعي قد يصلح فنيًا للغنائيّة. وقد ميّز النقّاد الديوان بأسلوبه الشعري الحيوي والديناميكي، مؤكدين أن استخدام اللغة المحكيّة بعناية منح النصوص طابعًا فريدًا. يُعدّ ديوان «شهقة فكر» عملًا شعريًا فريدًا غنيًا بالبعد العاطفي والفكري، ويمثل نافذة للتأمّلات النفسية والفلسفية العميقة."
  },
  
  book_clockwork_heart_genre: {
    en: 'Poetry',
    ar: 'شعر'
  },
  book_alchemists_daughter_title: {
    en: "Sada Al-Wijdan",
    ar: 'صدى الوجدان'
  },
  book_alchemists_daughter_desc: {
    en: 'A poetic journey in the colloquial dialect, exploring love, national pride, and the human inner world. Vivid, heartfelt, and rich with philosophical reflections, it offers readers a window into life’s joys and pains.',
    ar: 'رحلة شعرية باللهجة المحكية تستكشف الحب والفخر الوطني والوجدان الإنساني. نصوص نابضة بالحياة، عاطفية وغنية بالتأملات الفلسفية، تقدّم للقارئ نافذة لرؤية الفرح والألم.'
  },
  book_alchemists_daughter_summary: {
    en: "It is a poetic journey that takes the reader across a vast horizon of emotions and reflections, blending love, national pride, and daily human experiences. This collection includes a series of poems in the colloquial dialect, telling vivid stories rooted in reality and exploring different shades of feeling, offering the reader a window to see joy and pain through simple, flowing words.\n\nThe collection is divided into four sections, each representing a central theme reflecting the various colors of life: romance pulsing with longing, passion, and beauty; patriotism reflecting the spirit of belonging and pride in one’s homeland; wisdom drawn from the poet’s personal life experiences, shaped into verse; and inner emotions summarizing the deepest feelings in moments of contemplation.\n\nOne poet described it as a collection pulsating with feeling, a sanctuary of love for both woman and homeland, its thorns prancing in the fields of thought between reproach and silence, between burning longing and nostalgia, and salty tears flowing from the poet’s ink, drawn from the cedars of Lebanon. Another poet read in it the birth of tales filled with poetry, where the poet’s longing sprouts into verses, and his soul blossoms like carnelian with creativity. It has been said of this collection that it leads the reader through deserts of fire and light, prompting us to pray before the silence of life, observe beauty, and fill ourselves with the highest nectar the poet wished to lift us toward.",
    
    ar: "هو رحلة شعرية تأخذ القارئ في أفق واسع من المشاعر والتأملات، ممزوجة بين الحب والفخر الوطني، والتجارب الإنسانية اليومية. يضمّ هذا الديوان مجموعة من القصائد باللهجة المحكية، والتي تروي قصصًا حية من عمق الواقع وتستعرض ألوانًا مختلفة من الشعور، مقدمةً للقارئ نافذةً لرؤية الفرح والوجع من خلال كلمات بسيطة وسلسة.\n\nوقد قسّم الديوان إلى أربعة أبواب تمثّل مواضيع رئيسية تنوعت بين ألوان الحياة المختلفة، من غزل ينبض بالشوق والشّغف والجمال، ووطنيات تعكس روح الانتماء والفخر بالوطن، وحِكم مُستمدّة من تجارب حياتيّة عاشها الشاعر فقولبها في قصائده، ووجدانيات تلخّص أعمق المشاعر في لحظات التأمل.\n\nقرأ فيه أحد الشعراء ديوانًا ينبض بالوجدان طيّ واحةٍ من العشق للمرأة وللوطن، أشواكها حشرجات تتبختر في بيادر الفكر بين عتب وسكوت، بين حرقةٍ وحنين، ودمع مالح ينضح من دواة حبر الشاعر المتدفّق من أرز لبنان. وقرأ فيه شاعر آخر ولادة حكايات ممتلئة بالشعر، يورِق فيها وجد الشاعر قصائد، وتزهر روحه عقيقًا من الإبداع. كما قيل في الديوان أنّه يأخذ القارئ إلى فيافي من نار ونور، فيجعلنا نبتهل أمام صمت الحياة، ونرصد الجمال، ونمتلئ من ذاك الرحيق الأعلى الذي أراد الشاعر أن يرفعنا إليه."
  },  
  book_alchemists_daughter_genre: {
    en: 'Contemporary Poetry',
    ar: 'الشعر المعاصر'
  },

  book_echoes_void_title: {
    en: 'Hibr Al-Nidal',
    ar: 'حبر النّضال'
  },
  book_echoes_void_desc: {
    en: 'A compelling collection of political articles, poems, and essays documenting Lebanon’s struggles under external tutelage since 1990. It offers a vivid, honest reflection on history, daily life, and national resilience.',
    ar: 'مجموعة مؤثرة من المقالات السياسية والأشعار والمقتطفات التي توثق صراعات لبنان تحت الوصاية الخارجية منذ عام 1990. تقدّم انعكاسًا حيًا وصادقًا للتاريخ والحياة اليومية وصمود الوطن.'
  },
  book_echoes_void_summary: {
    en: "It contains political articles, poems, and excerpts from essays arranged in a chronological context to serve as a witness to the period of external tutelage that Lebanon experienced since 1990. Through historical recounting and analysis, the author addresses the most significant events Lebanon went through, conveying painful daily scenes that document the events and testify to an authority that subordinated Lebanon’s decisions to foreign powers, spreading corruption throughout state institutions, and bringing the country to a state of profound decline.\n\nSome critics have described it as a living memory and a faithful keeper of the suffering Lebanon endured during the period of tutelage, a work that can be relied upon to extract lessons so as not to repeat past mistakes—since nations that repeat their errors cannot progress. Others have regarded it as an honest mirror reflecting how national struggle became a daily prayer under occupation.",
    
    ar: "يحتوي على مقالات سياسيّة وأشعار ومُقتطفات من مقالات رُتّبت في سياق زمني لتكون شاهدة على فترة من الوصاية الخارجيّة التي عاشها لبنان منذ عام 1990. يتناول فيه الكاتب عن طريق التأريخ والتحليل أهمّ المحطّات التي عاشها لبنان، وينقل مشاهد يوميّة مؤلمة تؤرّخ للأحداث، وتشهد على سلطة باعت قرار لبنان للخارج، وعاثت في مؤسّسات الدولة فسادًا، حتى وصلت بالوطن إلى انهيار تام.\n\nوصفه بعض النقّاد بأنّه ذاكرة حيّة، وحافظة أمينة للمعاناة التي عاشها لبنان في فترة الوصاية، يمكن الركون إليه لاستخلاص العِبر كي لا نُكرّر أخطاءنا، فالشعوب التي تُكرّر أخطاءها لا يمكنها أن تتقدّم. كما اعتبره البعض الآخر مرآةً صادقة لكيفيّة تحوّل النضال الوطني إلى صلاة يومية في ظلّ الاحتلال."
  },  
  book_echoes_void_genre: {
    en: 'Political Writing',
    ar: 'كتابات سياسية'
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