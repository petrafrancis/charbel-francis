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
  // Navigation & Common.
  back_to_collection: {
    en: 'Back to Collection',
    ar: 'العودة إلى المجموعة'
  },
  back_to_home: {
    en: 'Back to Home',
    ar: 'العودة إلى الصفحة الرئيسية'
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
    ar: 'عن المؤلّف'
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
    ar:'يتمتّع بخبرات واسعة في مجال اللغة والأدب وتطوير مناهج تعليم العربيّة، وشارك في دورات تدريبيّة متخصّصة، ونال شهادات وتنويهات عدّة، أبرزها: شهادة تقدير من جامعة الروح القدس–الكسليك (2015)، وتنويه رئيس الجمهوريّة العماد ميشال عون عن كتابه "حبرُ النّضال" (2019)، ووسام وتنويه وزير الدفاع الوطني يعقوب الصرّاف عن أغنية "عسكرنا ما بينحني" (2018). شارك في أمسيات شعريّة وندوات ثقافيّة، وأسهم في التدقيق اللغوي لعدد من الكتب وفي إعداد مواد تربويّة، وله إصدارات أدبيّة منها: "حبرُ النّضال"، "صدى الوجدان"، "شَهئة "فِكر"، إضافة إلى أعمال قيد الطباعة ومنها: "إليها وهي تعلمُ"، "بين الطبشورة واليراع...حروفٌ على درب الرسالة".'
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
    en:`A poetry collection written in the colloquial dialect, with poems addressing a variety of themes related to daily life, emotions, and love, sprinkled with touches of philosophy and deep reflection. Its style is simple and heartfelt, blending popular and emotional expression while carrying a remarkable intellectual depth.

    In some poems, the poet explores feelings of love and emotions connected to human existence, with philosophical reflections that express the soul’s passion and yearning for completeness and spiritual and mental connection. The collection also delves into the human inner world, capturing contradictions and questions about life, death, and existence, reflecting a continuous search for meaning in a world full of challenges and suffering. It also addresses themes of human relationships and social interactions. The poems include references to various occasions, whether social or personal, all expressed creatively in a style that could lend itself to musical adaptation.
    
    Critics have noted that the collection is written in a lively and dynamic poetic style that reflects direct engagement with reality. The colloquial style here does not imply conventionality or superficiality; the poet carefully selects words to resonate with a general audience, giving his poems a distinctive character. He masters the art of shaping vocabulary and metaphors to breathe life and uniqueness into each poem, creating his own poetic identity. “Shahe’at Fikr” is celebrated for its emotional and intellectual richness, using its poems as a tool to open doors to deep intellectual and psychological reflections, making it a truly unique poetic work.`,
        ar: `ديوان شعري باللهجة المحكية تتناول قصائده مواضيع شتى تتعلق بالحياة اليومية، الوجدانية، والحب، مع لمسات من الفلسفة والتأملات العميقة. يتسم أسلوبه بالبساطة والتقريب إلى القلب، حيث يمزج بين الأسلوب الشعبي والعاطفي، لكنه يحمل في طياته عمقًا فكريًا لافتًا.
    يتناول الشاعر في بعض قصائده مشاعر الحب والعواطف المرتبطة بالوجود الانساني مع تصوّرات فلسفية تُعبّر عن شغف النفس وتوقها للتكامل والارتباط الروحي والعقلي. كما يتناول الشاعر في ديوانه الوجدان الداخلي للإنسان، وما يشعر به من تناقضات أو تساؤلات حول الحياة والموت والوجود، ما يعكس ذاك البحث المستمر عن المعنى في عالم مليء بالتحديات والآلام، كما يتناول مواضيع تتعلق بالعلاقات الإنسانية والتفاعلات المجتمعية.
    وفي الديوان إشارات إلى مناسبات مختلفة، سواء كانت اجتماعية أو شخصية. يسكبها الشاعر بأسلوب إبداعي قد تصلح فنيًا للغنائية.
    
    ما قيل في الديوان: ميزة الديوان أنه صيغ بأسلوب شعري حيوي وديناميكي يعكس التفاعل المباشر مع الواقع. الأسلوب المحكي هنا لا يعني التقليدية أو السطحية، حيث يختار الشاعر الكلمات بعناية لتكون أقرب إلى الذوق العام ما طبع قصائده بطابع الفرادة، حيث أتقن الشاعر لعبة تطويع المفردات والمجازات ليعطي القصيدة حياة وتفردًا بأسلوب تميّز به عن سواه، وأكسبه هوية شعريّة خاصة به.
    كما قيل: "شهئة فكر" هو ديوان شعري يتسم بالثراء العاطفي والفكري في آن واحد. أبدع الشاعر فيه باستخدام قصائده كأداة لفتح أبواب من التأملات الفكرية والنفسية العميقة، ما يجعله عملًا شعريًا فريدًا.`      
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
   en: `It is a poetic journey that takes the reader into a vast horizon of emotions and reflections, blending love, national concern, and everyday human experiences. This collection includes a series of poems written in the Lebanese dialect, telling vivid stories drawn from the depth of reality and presenting diverse shades of feeling, offering the reader a window through which to see joy and pain expressed in simple, flowing words.

The collection is divided into four sections representing main themes that vary across the colors of life: love poems pulsing with longing, passion, and beauty; patriotic pieces reflecting a spirit of belonging and pride in the homeland; wisdom drawn from life experiences the poet has lived and shaped into verse; and deeply emotional poems that capture profound feelings in moments of contemplation.

One poet described it as a collection throbbing with emotion, enfolding an oasis of love for both woman and homeland, its thorns like sighs strutting across the fields of thought between reproach and silence, between burning pain and yearning, and salty tears ripening from the inkwell of a poet flowing from the cedars of Lebanon. Another poet saw in it the birth of stories filled with poetry, where the poet’s passion blossoms into verses and his spirit flowers into agate-like creativity. It has also been said that the collection takes the reader into vast lands of fire and light, leading us to pray before the silence of life, to observe beauty, and to be filled with that higher nectar to which the poet sought to elevate us.`,
  ar: `هو رحلة شعرية تأخذ القارئ في أفق واسع من المشاعر والتأملات، ممزوجة بين الحب والهم الوطني، والتجارب الإنسانية اليومية. يضم هذا الديوان مجموعة من القصائد المحكية باللهجة اللبنانية، والتي تروي قصصًا حية من عمق الواقع وتستعرض ألوانًا مختلفة من الشعور، مقدمةً للقارئ نافذةً لرؤية الفرح والوجع من خلال كلمات بسيطة وسلسة.
    وقد قسّم الديوان إلى أربعة أبواب تمثل مواضيع رئيسية تنوعت بين ألوان الحياة المختلفة، من غزل ينبض بالشوق والشّغف والجمال، ووطنيات تعكس روح الانتماء والفخر بالوطن، وحِكم مُتمدّة من تجارب حياتيّة عاشها الشاعر فقولبها فب قصائده، ووجدانيات تلخّص أعمق المشاعر في لحظات التّأمل. 
    قرأ فيه أحد الشعراء ديوانًا ينبض بالوجدان طيّ واحةٍ من العشق للمرأة وللوطن، أشواكها حشرجات تتبختر في بيادر الفكر بين عتب وسكوت، بين حرقةٍ وحنين، ودمع مالح ينضج من دواة حبر الشاعر المُتدفّق من أرز لبنان. 
    وقرأ فيه شاعر آخر ولادة حكاياتٍ ممتلئةٍ بالشعر ، يورِقُ فيها وَجدُ الشاعر قصائد، وتُزهرُ روحه عقيقًا من الإبداع. كما قيل في الديوان أنّه يأخذ القارئ إلى فيافي من نار ونور، فيجعلنا نبتهلُ أمام صمت الحياة، ونرصدُ الجمال، ونمتلئ من ذاك الرحيق الأعلى الذي أراد الشاعر أن يرفعنا إليه.`
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
    en: `Political essays, poems, and excerpts from articles are arranged chronologically to bear witness to the period of foreign tutelage that Lebanon experienced since 1990. Through historical narration and analysis, the author highlights the key events Lebanon went through, conveying painful daily scenes that document these events and reveal a government that surrendered Lebanon’s decisions to external powers, spreading corruption across state institutions until the country reached a state of complete collapse.

Some critics described it as a living memory and a faithful guardian of the suffering Lebanon endured during this period of tutelage, serving as a reference to draw lessons so that mistakes are not repeated—since nations that repeat their errors cannot progress. Others considered it an honest mirror showing how the national struggle transformed into a daily prayer under occupation.`,
    
    ar: `مقالات سياسيّة وأشعار ومُقتطفات من مقالات رُتّبت في سياق زمني لتكون شاهدة على فترة من الوصاية الخارجيّة التي عاشها لبنان منذ عام 1990. يتناول فيه الكاتب عن طريق التأريخ والتحليل أهمّ المحطّات التي عاشها لبنان، وينقل مشاهد يوميّة مؤلمة تؤرّخ للأحداث، وتشهد على سلطة باعت قرار لبنان للخارج، وعاثت في مؤسّسات الدولة فسادًا، حتّى وصلت بالوطن إلى الانهيلر التّأم.  
    وصفه بعض النّقاد بأنّه ذاكرة حيّة، وحافظة أمينة للمعاناة التي عاشها لبنان في فترة الوصاية، يمكن الركون إليه لاستخلاص العِبر، كي لا نُكرّر أخضاءنا، فالشعوب التي تُكرّر أخطاءها لا يمكنها أن تتقدّم. كما اعتبره البعض الآخر مرآةً صادقة لكيفيّة تحوّل النضال الوطني إلى صلاة يوميّة في ظلّ الاحتلال.`
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
ar:'ما قيل في الديوان: ميزة الديوان أنه صيغ بأسلوب شعري حيوي وديناميكي يعكس التفاعل المباشر مع الواقع. الأسلوب المحكي هنا لا يعني التقليدية أو السطحية، حيث يختار الشاعر الكلمات بعناية لتكون أقرب إلى الذوق العام ما طبع قصائده بطابع الفرادة، حيث أتقن الشاعر لعبة تطويع المفردات والمجازات ليعطي القصيدة حياة وتفردًا بأسلوب تميّز به عن سواه، وأكسبه هوية شعريّة خاصة به. كما قيل: "شهئة فكر" هو ديوان شعري يتسم بالثراء العاطفي والفكري في آن واحد. أبدع الشاعر فيه باستخدام قصائده كأداة لفتح أبواب من التأملات الفكرية والنفسية العميقة، ما يجعله عملًا شعريًا فريدًا.'  },
  book_signed_copies: {
    en: 'Signed copies of this edition will be available at the upcoming autumn gala.',
    ar: 'ستكون نسخ موقعة من هذه الطبعة متاحة في الحفل الخريفي القادم.'
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