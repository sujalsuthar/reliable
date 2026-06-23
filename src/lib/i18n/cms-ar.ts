/** Arabic fallbacks for CMS content — aligned with Reliable Company Profile */

export const NAVBAR_AR = {
  consultationText: 'احصل على استشارة',
  mainLinks: [
    { label: 'الرئيسية' },
    { label: 'من نحن' },
    { label: 'الوظائف' },
    { label: 'اتصل بنا' },
  ],
  resourcesLinks: [
    { label: 'المدونة' },
    { label: 'دراسات الحالة' },
  ],
} as const

export const FOOTER_AR = {
  description:
    'شركة متخصصة في استشارات إدارة المشاريع والهندسة — من التحلية والنفط والغاز والبنية التحتية المائية إلى التشغيل والصيانة للمنشآت الصناعية في المملكة.',
  serviceLinks: [
    { label: 'خدمات FEED' },
    { label: 'إدارة المشاريع' },
    { label: 'إدارة التصميم' },
    { label: 'العمليات والصيانة' },
  ],
  companyLinks: [
    { label: 'من نحن' },
    { label: 'مشاريعنا' },
    { label: 'الأقسام' },
    { label: 'الوظائف' },
    { label: 'اتصل بنا' },
  ],
  privacyLabel: 'سياسة الخصوصية',
  termsLabel: 'الشروط',
} as const

export const HERO_AR = {
  eyebrow: 'إدارة المشاريع والهندسة',
  headline: 'تعاون، تواصل، إنجاز.',
  highlightedWord: 'إنجاز.',
  subheadline:
    'شركة ريلايبل متخصصة في استشارات إدارة المشاريع والهندسة — من FEED وإدارة التصميم إلى الإنشاءات والتشغيل التجريبي والعمليات والصيانة وتحسين المنشآت.',
  primaryButtonText: 'استكشف خدماتنا',
  secondaryButtonText: 'اتصل بنا',
  stats: [
    { label: 'سنوات خبرة مجتمعة' },
    { label: 'مشروع منجز' },
    { label: 'تأسست في الإمارات' },
    { label: 'توسعنا في السعودية' },
  ],
} as const

export const SECTION_CONTENT_AR: Record<
  string,
  { label: string; title: string; description: string }
> = {
  blog: {
    label: 'المدونة',
    title: 'أحدث المقالات',
    description: 'أخبار هندسية وتحديثات المشاريع ورؤى من فريقنا.',
  },
  services: {
    label: 'خبراتنا',
    title: 'خدمات المشاريع والهندسة المتكاملة',
    description:
      'استشارات إدارة المشاريع والهندسة والتشغيل التجريبي والعمليات والصيانة والتحسين للمنشآت الصناعية في المملكة.',
  },
  whyUs: {
    label: 'لماذا ريلايبل',
    title: 'لماذا تختار شركة ريلايبل',
    description:
      'أكثر من 100 سنة خبرة مجتمعة، وأكثر من 500 مشروع منجز، وشغف بالجودة والابتكار والتسليم في الوقت المحدد.',
  },
  industries: {
    label: 'القطاعات',
    title: 'القطاعات التي عملنا معها',
    description:
      'استشارات إدارة المشاريع والهندسة عبر التحلية والنفط والغاز والإنشاءات والتصنيع والاستدامة البيئية.',
  },
  divisions: {
    label: 'الأقسام',
    title: 'قدراتنا الأساسية',
    description:
      'استشارات إدارة المشاريع والخدمات الهندسية — فريق واحد متكامل.',
  },
  projects: {
    label: 'المشاريع',
    title: 'مشاريع مميزة',
    description:
      'مجموعة مختارة من المشاريع في التحلية والنفط والغاز والبنية التحتية المائية والقطاعات الصناعية.',
  },
}

export const CTA_AR = {
  title: 'تعاون، تواصل، إنجاز.',
  description: 'أخبرنا عن مشروعك وسيرد فريقنا خلال يوم عمل واحد.',
  emailPlaceholder: 'أدخل بريدك الإلكتروني',
  buttonText: 'طلب استشارة',
  secondaryButtonText: 'اتصل بنا',
} as const

export const WHY_STAT_LABELS_AR: Record<string, string> = {
  'Years Combined Experience': 'سنوات خبرة مجتمعة',
  'Projects Delivered': 'مشروع منجز',
  'Clients Served': 'عميل',
  'Engineering Divisions': 'أقسام هندسية',
  'Years Experience': 'سنوات الخبرة',
  'Plant Availability': 'توفر المنشآت',
  'Core Service Areas': 'مجالات خدمة أساسية',
  'Founded in UAE': 'تأسست في الإمارات',
  'Expanded to KSA': 'توسعنا في السعودية',
}

export const SERVICE_TITLE_AR: Record<string, string> = {
  'front-end-engineering-feed': 'التصميم الهندسي الأولي (FEED)',
  'project-management-consultancy': 'استشارات إدارة المشاريع',
  'detailed-engineering-design-management': 'الهندسة التفصيلية وإدارة التصميم',
  'procurement-management': 'إدارة المشتريات',
  'program-management': 'إدارة البرامج',
  'construction-management': 'إدارة الإنشاءات',
  'commissioning-management': 'إدارة التشغيل التجريبي',
  'operations-maintenance': 'العمليات والصيانة',
  'industrial-plant-optimization': 'تحسين المنشآت الصناعية',
}

export const SERVICE_SHORT_AR: Record<string, string> = {
  'front-end-engineering-feed':
    'تحديد نطاق المشروع والهندسة الأولية لإنشاء أساس قوي لتنفيذ المنشآت الصناعية.',
  'project-management-consultancy':
    'إدارة شاملة للمشروع من التخطيط والجدولة إلى الميزانية وإدارة المخاطر.',
  'detailed-engineering-design-management':
    'دمج المهارات الهندسية المتخصصة في خدمة إدارة تصميم موحدة.',
  'procurement-management':
    'حلول مشتريات شاملة من التوريد والتفاوض إلى التسليم وإدارة الموردين.',
  'program-management':
    'حوكمة متعددة المشاريع مع معايير موحدة وإدارة التبعيات بين المشاريع.',
  'construction-management':
    'إدارة إنشاءات شاملة من التخطيط إلى ضبط الجودة وتسليم المشروع.',
  'commissioning-management':
    'ضمان تركيب واختبار وتكامل جميع الأنظمة قبل التشغيل الآمن.',
  'operations-maintenance':
    'تشغيل وصيانة محطات التحلية ومعالجة المياه والمنشآت الصناعية بتوفر يتجاوز 95%.',
  'industrial-plant-optimization':
    'تحسين مستمر للكفاءة والإنتاجية والموثوقية مع تقليل التكاليف والأثر البيئي.',
}

export const DIVISION_AR: Record<
  string,
  { name: string; tagLabel: string; description: string; bulletPoints: string[] }
> = {
  'Project Management Consultancy': {
    name: 'استشارات إدارة المشاريع',
    tagLabel: 'PMC وإدارة البرامج',
    description:
      'إدارة مشاريع وبرامج شاملة من التخطيط والجدولة إلى إدارة المخاطر وتنسيق أصحاب المصلحة والتسليم الناجح.',
    bulletPoints: [
      'تخطيط المشاريع والمتابعة والتقارير',
      'حوكمة البرامج وضوابط المشاريع',
      'إدارة الإنشاءات والإشراف على المقاولين',
      'الإدارة التجارية وإدارة التكاليف',
    ],
  },
  'Engineering Services': {
    name: 'الخدمات الهندسية',
    tagLabel: 'FEED • تصميم • تشغيل تجريبي',
    description:
      'الهندسة الأولية وإدارة التصميم التفصيلي والمشتريات والتشغيل التجريبي والعمليات والصيانة وتحسين المنشآت.',
    bulletPoints: [
      'التصميم الهندسي الأولي (FEED)',
      'الهندسة التفصيلية وإدارة التصميم',
      'إدارة المشتريات والتشغيل التجريبي',
      'العمليات والصيانة وتحسين المنشآت',
    ],
  },
}

export const INDUSTRY_AR: Record<string, string> = {
  Desalination: 'التحلية',
  'Oil & Gas': 'النفط والغاز',
  Construction: 'الإنشاءات',
  Engineering: 'الهندسة',
  Manufacturing: 'التصنيع',
  'Environmental & Sustainability': 'البيئة والاستدامة',
}

export const CERT_AR: Record<string, string> = {
  'Certified Project Managers': 'مديرو مشاريع معتمدون',
  "Owner's Engineer / Consultant": 'مهندسو/استشاريو المالك',
  'Industrial Plant Specialists': 'متخصصون في المنشآت الصناعية',
}

export const VALUE_AR: Record<string, { title: string; description: string }> = {
  'Quality & Service': {
    title: 'الجودة والخدمة',
    description: 'شغف بالجودة والخدمة في كل مخرج — من الفكرة حتى التسليم النهائي.',
  },
  'Innovative Thinking': {
    title: 'التفكير الابتكاري',
    description: 'تفكير ابتكاري ومنهجيات حديثة لحل التحديات الصناعية والبنية التحتية المعقدة.',
  },
  'Hands-on Experience': {
    title: 'خبرة عملية',
    description: 'خبرة عملية في التحلية والنفط والغاز والبنية التحتية المائية وFEED والإنشاءات.',
  },
  'On-time Delivery': {
    title: 'التسليم في الوقت المحدد',
    description: 'ننجز المشاريع في الوقت المحدد ضمن الميزانية وبامتثال كامل. الوقت من ذهب.',
  },
}

export const GLOBAL_AR = {
  siteName: 'شركة ريلايبل',
  tagline:
    'تعاون، تواصل، إنجاز. — استشارات إدارة المشاريع والهندسة للمشاريع الصناعية والبنية التحتية في المملكة.',
  copyrightText: '© 2026 شركة ريلايبل. جميع الحقوق محفوظة.',
  address:
    '8648، شارع الأمير متعب، حي العزيزية، جدة، المملكة العربية السعودية. ص.ب: 23342',
} as const

export const FOOTER_DIVISION_AR = 'قسم من شركة ريلايبل'
export const FOOTER_CONTACT_AR = 'اتصل بنا'

export const ABOUT_PAGE_AR = {
  title: 'من نحن',
  content: [
    'شركة ريلايبل متخصصة في استشارات إدارة المشاريع المتكاملة والهندسة. كمجموعة شركات، بدأنا عملياتنا في 2016 من الإمارات وفي 2023 وسّعنا أعمالنا في المملكة العربية السعودية.',
    'يتمتع فريق الإدارة لدينا بأكثر من 100 سنة خبرة مجتمعة في إدارة أكثر من 500 مشروع في التحلية والنفط والغاز والبنية التحتية المائية وFEED والإنشاءات وغيرها من الفكرة حتى التسليم النهائي. الشغف بالجودة والخدمة، والتفكير الابتكاري، والخبرة العملية هي صفات فريقنا التي تميزه في تسليم المشاريع الصعبة في الوقت المحدد ضمن الميزانية وبامتثال كامل.',
    'ملتزم مديرو المشاريع والمهندسون المعتمدون لدينا والخبراء الفنيون والمصممون الماهرون بالعمل كمهندسي/استشاريي المالك، لتحسين الموارد والمعدات وتسليم المشروع في الوقت المحدد. الوقت من ذهب ولا نسمح للمقاولين بإضاعة الثواني.',
  ],
}
