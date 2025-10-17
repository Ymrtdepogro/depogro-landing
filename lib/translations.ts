import marketplace from "@/app/marketplace";
import { title } from "node:process";

export const translations = {
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT US",
      produit: "OUR PRODUCT",
      marketplace: "MARKETPLACE",
      testimonials: "CUSTOMER REVIEWERS",
      news: "NEWS & MEDIA",
      partners: "OUR PARTNERS",
      contact: "CONTACT US",

    },
    hero: {
      title: "Welcome to DEPOGRO",
      download:
        "Download our app now to access the best products at unbeatable prices.",
    },

    MARKETPLACE: {
      title: "About the Marketplace",
      learnMore: " Learn More",
      avantage1:" Centralized order management and simplified operations.",
      avantage2:" Real-time tracking with detailed statistics.",
      avantage3:" Inventory, delivery, and payment management.",
      avantage4:" Intuitive interface and dedicated support.",
      avantage5:" Accelerated sales growth.",
      learnMoreSite: "Visit our website",
      role:" The marketplace serves as a comprehensive platform that connects stores with a wide range of products and services, facilitating seamless transactions and enhancing the overall shopping experience.",
      desc2: "An innovative marketplace that redefines store management and growth in Tunisia.",
      mission2: "Our marketplace",
      missionDesc3: "Our marketplace is specially designed for stores. It allows you to centralize all orders placed through the application and provides complete management, including treasury, invoicing, as well as a statistics dashboard to easily track your revenues, the number of orders, and much more.",
      missionDesc4: "Our marketplace enables each store to add and sync products, manage stock, orders, and deliveries, track sales with detailed statistics, and customize brands and categories. Everything is centralized in one interface with dedicated support, making store management easier and sales growth faster."
    },
    about: {
      title: "About DEPOGRO",
      missionDesc2: "Our platform is designed for retailers, restaurants, and cafes, offering a smooth and intuitive mobile experience.",
      desc: "A revolutionary e-commerce platform changing the distribution landscape in Tunisia.",
      mission: "Our Mission",
      missionDesc:
        "DEPOGRO is committed to revolutionizing retail in Tunisia by offering an all-in-one solution that simplifies inventory management, optimizes deliveries, and enhances the customer experience. Our platform is designed for retailers, restaurants, and cafes, offering a smooth and intuitive mobile experience.",

    },
    contact: {
      title: "Contact Us",
      subtitle: "Our team is ready to answer any of your questions",
      address: "Address",
      telephone: "Phone",
      email: "Email",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        message: "Message",
        submit: "Send",
      },
    },
    produit: {
      title: "Explore Our Catalog",
      description:
        "Explore our wide catalog of over 120 brands and 1600 products. From food to cleaning products and cosmetics, we have everything you need to meet your business needs.",
      stat1: {
        title: "Ease of Use",
        content: "Intuitive interface for simplified management",
      },
      stat2: {
        title: "Competitive Prices",
        content: "Competitive prices, unbeatable offers.",
      },
      stat3: {
        title: "Dedicated Customer Service",
        content: "Dedicated support to ensure your success",
      },
    },
    services: {
      title: "Our Services",
      service1: {
        title: "Large Catalog",
        dec: "Over 1600 quality products",
      },
      service2: {
        title: "Fast Delivery",
        dec: "Guaranteed 24-hour delivery",
      },
      service3: {
        title: "Best Prices",
        dec: "Guaranteed competitive prices",
      },
      service4: {
        title: "24/7 Support",
        dec: "A team ready to listen to you",
      },
    },
    news: {
      title: "News & Media",
      dec: "Discover our full presentation",
    },
    partners: {
      title: "Our Partners",
      dec: "They trust us with their digital transformation",
    },
    footer: {
      title: "Terms of Service",
      desc: "DEPOGRO. All rights reserved.",
      terms: "/terms-en"
    }
    // Add more translations as needed
  },
  fr: {
    nav: {
      home: "ACCUEIL",
      about: "A PROPOS",
      marketplace: "MARKETPLACE",
      produit: "PRODUIT",
      news: "NEWS & MEDIA",
      partners: "PARTNERS",
      contact: "CONTACT",
    },
    contact: {
      title: "Contactez-nous",
      subtitle:
        "Notre équipe est à votre disposition pour répondre à toutes vos questions",
      address: "Adresse",
      telephone: "Télephone",
      email: "Email",
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
    MARKETPLACE: {
      title: "À propos de la Marketplace",
      learnMore: "En savoir plus",
      learnMoreSite:"Visitez notre site ",
      avantage1:" Centralisation des commandes et gestion simplifiée.",
      avantage2:" Suivi en temps réel avec des statistiques détaillées.",
      avantage3:" Gestion des stocks, livraisons et paiements.",
      avantage4:" Interface intuitive et support dédié.",
      avantage5:" Accélération de la croissance des ventes.",
      role:" La marketplace sert de plateforme complète qui connecte les magasins à une large gamme de produits et services, facilitant les transactions fluides et améliorant l'expérience d'achat globale.",
      desc2: "Une marketplace innovante qui redéfinit la gestion et la croissance des stores en Tunisie.",
      mission2: "Notre marketplace",
      missionDesc3: "Notre marketplace est spécialement conçue pour les stores. Elle permet de centraliser toutes les commandes passées via l’application et offre une gestion complète incluant la trésorerie, la facturation ainsi qu’un tableau de bord statistique pour suivre facilement vos revenus, le nombre de commandes et bien plus encore.",
      missionDesc4: "Notre marketplace permet à chaque store d’ajouter et de synchroniser ses produits, de gérer ses stocks, commandes et livraisons, de suivre ses ventes grâce à des statistiques détaillées et de personnaliser ses marques et catégories. Tout est centralisé dans une seule interface avec un support dédié, ce qui rend la gestion plus simple et la croissance des ventes plus rapide."
    }
    ,
    about: {
      title: "À Propos de DEPOGRO",
      learnMore: "En savoir plus",
      titleMarcketPlace: "À propos de la Marketplace",
      desc: "  Une plateforme e-commerce révolutionnaire qui transforme le paysage de la distribution en Tunisie.",
      desc2: "Un marketplace innovant qui redéfinit la gestion et la croissance des stores en Tunisie.",
      mission: "Notre Mission",
      mission2: "Notre marketplace",
      missionDesc:
        "DEPOGRO s'engage à révolutionner le commerce de détail en Tunisie en offrant une solution tout-en-un qui simplifie la gestion des stocks, optimise les livraisons et améliore l'expérience client. Notre plateforme est conçue pour les commerçants de détail, les restaurants et les cafés, offrant une expérience mobile fluide et intuitive.",
      missionDesc2:
        "Notre plateforme est conçue pour les commerçants de détail, les restaurants et les cafés, offrant une expérience mobile fluide et intuitive.",

      missionDesc3: "Notre marketplace est spécialement conçue pour les stores. Elle permet de regrouper l’ensemble des commandes passées sur l’application et propose une gestion complète incluant la trésorerie, la facturation ainsi qu’un espace de statistiques afin de consulter facilement vos revenus, le nombre de commandes et bien plus encore.",
      missionDesc4: "Notre marketplace permet à chaque store d’ajouter et synchroniser ses produits, gérer ses stocks, commandes et livraisons, suivre ses ventes grâce à des statistiques détaillées, et personnaliser ses marques et catégories. Tout est centralisé dans une seule interface avec un support client dédié, pour simplifier la gestion et booster les ventes."
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
    services: {
      title: "Nos services",
      service1: {
        title: "Large Catalogue",
        dec: "Plus de 1600 produits de qualité",
      },
      service2: {
        title: "Livraison Rapide",
        dec: "Livraison en 24h garantie",
      },
      service3: {
        title: "Meilleurs Prix",
        dec: "Prix compétitifs garantis",
      },
      service4: {
        title: "Support 24/7",
        dec: "Une équipe à votre écoute",
      },
    },
    news: {
      title: "News & Media",
      dec: "Découvrez notre présentation complète",
    },
    partners: {
      title: "Nos Partenaires",
      dec: "Ils nous font confiance pour leur transformation digitale",
    },
    footer: {
      title: "Conditions d'utilisation",
      desc: "DEPOGRO. Tous droits réservés.",
      terms: "/terms-fr"
    }
    // Add more translations as needed
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      produit: "منتجنا",
      testimonials: "آراء العملاء",
      marketplace: "المتجر الإلكتروني",
      news: "الأخبار والإعلام",
      partners: "شركاؤنا",
      contact: "اتصل بنا",
    },
    hero: {
      title: "مرحبًا بكم في موقع ديبوغرو",
      download:
        "قم بتحميل تطبيقنا الآن للوصول إلى أفضل المنتجات بأسعار لا تقارن.",
    },
    MARKETPLACE: {
      title: "حول المنصة",
      avantage1:" مركزية الطلبات وإدارة مبسطة.",
      avantage2:" متابعة في الوقت الحقيقي مع إحصائيات مفصلة.",
      avantage3:" إدارة المخزون، التوصيلات والمدفوعات.",
      learnMoreSite:"قم بزيارة موقعنا",
      avantage4:" واجهة بديهية ودعم مخصص.",
      avantage5:" تسريع نمو المبيعات.",
      role:" تعمل المنصة كسوق شامل يربط المتاجر بمجموعة واسعة من المنتجات والخدمات، مما يسهل المعاملات السلسة ويعزز تجربة التسوق الشاملة.",
      learnMore: "اكتشف المزيد",
      desc2: "سوق مبتكر يعيد تعريف إدارة المتاجر ونموها في تونس.",
      mission2: "منصتنا",
      missionDesc3: "منصتنا مصممة خصيصًا للمتاجر. فهي تتيح لك تجميع جميع الطلبات التي تتم عبر التطبيق وتوفر إدارة متكاملة تشمل الخزينة والفوترة، بالإضافة إلى لوحة إحصائيات لعرض الإيرادات وعدد الطلبات والمزيد بسهولة.",
      missionDesc4: "تمكّن منصتنا كل متجر من إضافة ومزامنة منتجاته، وإدارة المخزون والطلبات والتسليمات، وتتبع المبيعات من خلال إحصائيات دقيقة، وتخصيص العلامات التجارية والفئات. كل ذلك في واجهة واحدة مركزية مع دعم مخصص، مما يجعل إدارة المتاجر أسهل ونمو المبيعات أسرع."
    }
    ,
    about: {
      title: "عن ديبوغرو",
      titleMarcketPlace: "منصة للتسوق",
      learnMore: "اعرف أكثر",
      desc: "منصة تجارة إلكترونية ثورية تُغير مشهد التوزيع في تونس",
      desc2: "سوق مبتكر يعيد تعريف إدارة المتاجر ونموها في تونس.",

      mission: "مهمتنا",
      mission2: "منصتنا للتسوق",
      missionDesc:
        "تلتزم ديبوغرو بثورة تجارة التجزئة في تونس من خلال تقديم حل شامل يُبسط إدارة المخزون، ويُحسن عمليات التوصيل، ويُحسن تجربة العملاء. تم تصميم منصتنا لتلبية احتياجات تجار التجزئة والمطاعم والمقاهي، مع تقديم تجربة موبايل سلسة وسهلة الاستخدام.",
      missionDesc2:
        "تم تصميم منصتنا خصيصًا لتجار التجزئة، والمطاعم، والمقاهي، مع تقديم تجربة موبايل سلسة وسهلة الاستخدام",

      missionDesc3: "منصتنا مصممة خصيصًا للمتاجر. فهي تتيح تجميع جميع الطلبات التي يتم إجراؤها عبر التطبيق، وتوفر إدارة متكاملة تشمل الخزينة والفوترة، بالإضافة إلى لوحة إحصائيات لعرض الإيرادات وعدد الطلبات والمزيد بسهولة.",

      missionDesc4: "تتيح منصتنا لكل متجر إضافة ومزامنة منتجاته، إدارة المخزون والطلبات والتسليمات، متابعة المبيعات من خلال إحصائيات دقيقة، وتخصيص العلامات التجارية والفئات. كل ذلك في واجهة واحدة مركزية مع دعم عملاء مخصص، لتبسيط الإدارة وزيادة المبيعات بسرعة."

    },
    contact: {
      title: "اتصل بنا",
      subtitle: "فريقنا جاهز للإجابة على جميع أسئلتكم",
      address: "العنوان",
      telephone: "الهاتف",
      email: "بريد إلكتروني",
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
    services: {
      title: "خدماتنا",
      service1: {
        title: "كتالوج ضخم",
        dec: "أكثر من 1600 منتج ذو جودة عالية",
      },
      service2: {
        title: "توصيل سريع",
        dec: "توصيل خلال 24 ساعة مضمونة",
      },
      service3: {
        title: "أفضل الأسعار",
        dec: "أسعار تنافسية مضمونة",
      },
      service4: {
        title: "دعم على مدار الساعة",
        dec: "فريق متاح للاستماع إليك",
      },
    },
    news: {
      title: "الأخبار ووسائل الإعلام",
      dec: "اكتشف عرضنا الكامل",
    },
    partners: {
      title: "شركاؤنا",
      dec: "هم يثقون بنا لتحويلهم الرقمي",
    },
    footer: {
      title: "الشروط والأحكام",
      desc: "ديبوجرو. جميع الحقوق محفوظة.",
      terms: "/terms-ar"
    }
    // Add more translations as needed
  },
};

export type Language = keyof typeof translations;
