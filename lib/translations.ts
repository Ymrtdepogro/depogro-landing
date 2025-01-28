export const translations = {
  fr: {
    nav: {
      home: "ACCUEIL",
      about: "A PROPOS",
      produit: "PRODUIT",
      news: "NEWS & MEDIA",
      contact: "CONTACT",
    },
    contact: {
      title: "Contactez-nous",
      subtitle:
        "Notre équipe est à votre disposition pour répondre à toutes vos questions",
      form: {
        firstName: "Prénom",
        lastName: "Nom",
        email: "Adresse e-mail",
        message: "Message",
        submit: "Envoyer",
      },
    },
    hero: {
      title: "Bienvenue sur le site DEPOGRO",
      download:
        "Téléchargez maintenant notre application pour accéder aux meilleurs produits à des prix imbattables.",
    },
    about: {
      title: "À Propos de DEPOGRO",
      desc: "  Une plateforme e-commerce révolutionnaire qui transforme le paysage de la distribution en Tunisie.",
      mission: "Notre Mission",
      missionDesc:
        "DEPOGRO s'engage à révolutionner le commerce de détail en Tunisie en offrant une solution tout-en-un qui simplifie la gestion des stocks, optimise les livraisons et améliore l'expérience client. Notre plateforme est conçue pour les commerçants de détail, les restaurants et les cafés, offrant une expérience mobile fluide et intuitive.",
      missionDesc2:
        "Notre plateforme est conçue pour les commerçants de détail, les restaurants et les cafés, offrant une expérience mobile fluide et intuitive.",
    },
    produit: {
      title: "Explorez notre catalogue",
      description:
        "Explorez notre vaste catalogue de plus de 120 marques et 1600 articles. De la nourriture aux produits d'entretien et cosmétiques, nous avons tout ce dont vous avez besoin pour répondre à vos exigences commerciales.",
      stat1: {
        title: "Facilité d'utilisation",
        content: "Interface intuitive pour gestion simplifiée",
      },
      stat2: {
        title: "Prix compétitifs",
        content: "Prix compétitifs, offres imbattables.",
      },
      stat3: {
        title: "Service client dédié",
        content: "Support client dévoué pour votre réussite",
      },
    },
    // Add more translations as needed
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      produit: "منتجنا",
      testimonials: "آراء العملاء",
      news: "الأخبار والإعلام",
      contact: "اتصل بنا",
    },
    hero: {
      title: "مرحبًا بكم في موقع ديبوغرو",
      download:
        "قم بتحميل تطبيقنا الآن للوصول إلى أفضل المنتجات بأسعار لا تقارن.",
    },
    about: {
      title: "عن ديبوغرو",
      desc: "منصة تجارة إلكترونية ثورية تُغير مشهد التوزيع في تونس",
      mission: "مهمتنا",
      missionDesc:
        "تلتزم ديبوغرو بثورة تجارة التجزئة في تونس من خلال تقديم حل شامل يُبسط إدارة المخزون، ويُحسن عمليات التوصيل، ويُحسن تجربة العملاء. تم تصميم منصتنا لتلبية احتياجات تجار التجزئة والمطاعم والمقاهي، مع تقديم تجربة موبايل سلسة وسهلة الاستخدام.",
      missionDesc2:
        "تم تصميم منصتنا خصيصًا لتجار التجزئة، والمطاعم، والمقاهي، مع تقديم تجربة موبايل سلسة وسهلة الاستخدام",
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "فريقنا جاهز للإجابة على جميع أسئلتكم",
      form: {
        firstName: "الاسم الأول",
        lastName: "اللقب",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        submit: "إرسال",
      },
    },
    produit: {
      title: "استكشف كتالوجنا",
      description:
        "استكشف كتالوجنا الواسع المكون من أكثر من 120 علامة تجارية و 1600 منتج. من المواد الغذائية إلى منتجات التنظيف ومستحضرات التجميل، لدينا كل ما تحتاجه لتلبية متطلباتك التجارية.",
      stat1: {
        title: "سهولة الاستخدام",
        content: "واجهة مستخدم بديهية لإدارة مبسطة",
      },
      stat2: {
        title: "أسعار تنافسية",
        content: "أسعار تنافسية، عروض لا تقارن.",
      },
      stat3: {
        title: "خدمة العملاء المخصصة",
        content: "دعم العملاء المخصص لنجاحك",
      },
    },
    // Add more translations as needed
  },
};

export type Language = keyof typeof translations;
