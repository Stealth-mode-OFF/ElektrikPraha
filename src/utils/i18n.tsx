import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'cz' | 'en';

type Translations = {
  [key in Language]: {
    nav: {
      services: string;
      pricing: string;
      about: string;
      contact: string;
      cta: string;
      mobile_call: string;
    };
    hero: {
      badge: string;
      title_line1: string;
      title_line2: string;
      description: string;
      call_btn: string;
      services_btn: string;
      badges: {
        fair: string;
        fair_desc: string;
        no_hidden: string;
        no_hidden_desc: string;
        personal: string;
        personal_desc: string;
      };
      status: string;
    };
    switch: {
      label: string;
      hint: string;
      blackout_title: string;
      blackout_subtitle: string;
      blackout_desc: string;
    };
    services: {
      eyebrow: string;
      title: string;
      subtitle: string;
      cards: {
        home: { title: string; desc: string; items: string[] };
        flats: { title: string; desc: string; items: string[] };
        gastro: { title: string; desc: string; items: string[] };
      };
    };
    story: {
      eyebrow: string;
      title: string;
      p1: string;
      p2: string;
      quote: string;
      highlight: string;
    };
    contact: {
      title: string;
      desc: string;
      call_action: string;
      message_action: string;
      email_action: string;
      invoice_data: string;
      form_card: {
        badge: string;
        title_line1: string;
        title_line2: string;
        desc: string;
      };
    };
    form: {
      name_label: string;
      name_placeholder: string;
      email_label: string;
      email_placeholder: string;
      phone_label: string;
      phone_placeholder: string;
      service_label: string;
      service_placeholder: string;
      message_label: string;
      message_placeholder: string;
      submit: string;
      success_title: string;
      success_desc: string;
      options: {
        home: string;
        restaurant: string;
        commercial: string;
        repair: string;
        consultation: string;
        other: string;
      };
    };
    pricing: {
      title: string;
      subtitle: string;
      headline_line1: string;
      headline_line2: string;
      hourly_rate: string;
      hourly_desc: string;
      min_charge: string;
      items: {
        socket: string;
        socket_desc: string;
        light: string;
        box: string;
        rev: string;
        rev_desc: string;
        new_inst: string;
        new_inst_desc: string;
        transport: string;
        transport_desc: string;
        free: string;
      };
      vat_note: string;
      process: {
        title: string;
        step1: { title: string; desc: string };
        step2: { title: string; desc: string };
        step3: { title: string; desc: string };
      };
    };
    processSection: {
      eyebrow: string;
      title: string;
      steps: {
        contact: { title: string; desc: string };
        quote: { title: string; desc: string };
        work: { title: string; desc: string };
        handover: { title: string; desc: string };
      };
    };
    testimonials: {
      eyebrow: string;
      title: string;
      subtitle: string;
      reviews: Array<{
        id: number;
        name: string;
        role: string;
        text: string;
        highlight: boolean;
        link?: string;
      }>;
    };
  };
};

const translations: Translations = {
  cz: {
    nav: {
      services: "Služby",
      pricing: "Ceník",
      about: "O mně",
      contact: "Kontakt",
      cta: "Nezávazná Poptávka",
      mobile_call: "VOLEJTE HNED: 777 889 581"
    },
    hero: {
      badge: "Poctivé řemeslo • Praha a okolí",
      title_line1: "Elektřina.",
      title_line2: "Bez kompromisů.",
      description: "Jsem Jarda Soukup. Elektrikář, který zvedá telefony, chodí včas a po práci po sobě uklidí. Kvalitně a za rozumnou cenu.",
      call_btn: "Zavolat (777 889 581)",
      services_btn: "Zobrazit služby",
      badges: {
        fair: "Férové jednání",
        fair_desc: "Platí, co se řekne",
        no_hidden: "Žádné skryté poplatky",
        no_hidden_desc: "Cena je konečná",
        personal: "Osobní přístup",
        personal_desc: "Mluvím přímo s vámi"
      },
      status: "Dostupný pro nové zakázky"
    },
    switch: {
      label: "HLAVNÍ JISTIČ",
      hint: "Nahodit pojistky",
      blackout_title: "Takhle to dopadá,",
      blackout_subtitle: "když si to děláte sami.",
      blackout_desc: "Nespoléhejte na náhodu. Zavolejte profíka, ať nezůstanete potmě."
    },
    services: {
      eyebrow: "Služby",
      title: "S čím vám pomohu",
      subtitle: "Nerozlišuji malé a velké zakázky. Od výměny zásuvky po kompletní instalace.",
      cards: {
        home: {
          title: "Rodinný dům",
          desc: "Stavěl jsem vlastní dům, tak vím, jaký je to stres. Udělám elektriku tak, abyste na ni nemuseli 20 let sáhnout.",
          items: ["Kompletní rozvody", "Přípojky a rozvaděče", "Venkovní osvětlení"]
        },
        flats: {
          title: "Byty a Rekonstrukce",
          desc: "Výměna starých hliníkových rozvodů za měď. Sekání, tahání kabelů, kompletace. Vše s úklidem.",
          items: ["Nové rozvody v bytech", "Výměna zásuvek/vypínačů", "Datové kabely (internet)", "Revizní zprávy"]
        },
        gastro: {
          title: "Restaurace & Kuchyně",
          desc: "Spolehlivá elektroinstalace pro náročný provoz. Zajistím, aby vše fungovalo i ve špičce, a navrhnu osvětlení pro perfektní atmosféru.",
          items: ["Zapojení spotřebičů", "Osvětlení pro atmosféru", "Rychlý servis při poruše"]
        }
      }
    },
    story: {
      eyebrow: "O mně",
      title: "JEDNÁM FÉROVĚ",
      p1: "Jsem elektrikář, pro kterého je podání ruky závazek. Žádné výmluvy, žádné navyšování ceny 'za vícepráce', pokud se na tom dopředu nedohodneme. Přijedu, udělám poctivou práci, uklidím a cena platí.",
      p2: "",
      quote: "Slovo dělá chlapa.",
      highlight: "Odpovím vám ještě dnes."
    },
    contact: {
      title: "Nebojte se ozvat",
      desc: "Zavolejte mi nebo napište. Probereme, co potřebujete, a vymyslíme řešení, které bude fungovat a nezruinuje vás.",
      call_action: "Zavolejte mi",
      message_action: "Napsat zprávu",
      email_action: "Email",
      invoice_data: "Fakturační údaje",
      form_card: {
        badge: "Nezávazná poptávka",
        title_line1: "Řekněte mi,",
        title_line2: "co potřebujete.",
        desc: "Napište mi stručně o vaší zakázce. Ať už jde o drobnost nebo velký projekt, navrhnu vám řešení na míru."
      }
    },
    form: {
      name_label: "Jak vám mám říkat?",
      name_placeholder: "Jarda Novák",
      email_label: "Kam vám mám napsat?",
      email_placeholder: "vas@email.cz",
      phone_label: "Na co vám mám cinknout?",
      phone_placeholder: "777 ...",
      service_label: "O co zhruba jde?",
      service_placeholder: "Vyberte, co hoří...",
      message_label: "Popište to svými slovy",
      message_placeholder: "Nebojte se rozepsat. Jestli to jiskří, čoudí nebo jen nesvítí, všechno mě zajímá.",
      submit: "Odeslat poptávku",
      success_title: "Poptávka Odeslána!",
      success_desc: "Děkuji za Váš zájem. Ozvu se Vám co nejdříve, obvykle do 24 hodin.",
      options: {
        home: "Rodinný dům / Byt (klasika)",
        restaurant: "Restaurace / Gastro (profi)",
        commercial: "Kanceláře / Sklady",
        repair: "Něco se rozbilo (Havárie)",
        consultation: "Zatím jen plánuju (Konzultace)",
        other: "Něco speciálního"
      }
    },
    pricing: {
      title: "Orientační Ceník",
      subtitle: "Žádné skryté poplatky. Vždy víte, za co platíte.",
      headline_line1: "Férová cena",
      headline_line2: "Předem jasná",
      hourly_rate: "Hodinová sazba",
      hourly_desc: "Pro běžné opravy a montáže",
      min_charge: "Min. účtovaná částka 1 hodina.",
      items: {
        socket: "Montáž zásuvky / vypínače",
        socket_desc: "Kompletní výměna kusu (práce)",
        light: "Montáž svítidla",
        box: "Zapojení rozvaděče (modul)",
        rev: "Revize (byt 3+kk)",
        rev_desc: "Včetně vypracování revizní zprávy",
        new_inst: "Nová elektroinstalace 1kk",
        new_inst_desc: "Kompletní rozvody včetně rozvaděče",
        transport: "Doprava po Praze",
        transport_desc: "Příjezd, konzultace, zaměření",
        free: "ZDARMA"
      },
      vat_note: "Nejsem plátce DPH. Ceny jsou konečné.",
      process: {
        title: "Jak to probíhá?",
        step1: { title: "Zavoláte mi", desc: "Řeknete mi, co potřebujete. Když to hoří, startuju hned." },
        step2: { title: "Přijedu za vámi", desc: "Prohlédnu situaci na místě a navrhnu řešení." },
        step3: { title: "Dohodneme se", desc: "Dostanete pevnou cenu. Žádné 'asi' nebo 'uvidíme'." }
      }
    },
    processSection: {
      eyebrow: "Jak to funguje",
      title: "Od zavolání po rozsvícení",
      steps: {
        contact: { title: "Kontakt", desc: "Zavoláte. Pokud to hoří, řeším hned. Jinak plánujeme." },
        quote: { title: "Nacenění", desc: "Přijedu, zaměřím. Dostanete přesnou cenu. Žádné odhady." },
        work: { title: "Realizace", desc: "Nastoupím v termínu. Mám vše s sebou. Dělám čistě." },
        handover: { title: "Předání", desc: "Vše vyzkoušíme. Uklidím po sobě. Platíte až nakonec." }
      }
    },
    testimonials: {
      eyebrow: "Reference",
      title: "Spokojení zákazníci",
      subtitle: "jsou moje vizitka.",
      reviews: [
        {
          id: 1,
          name: "Tým Altro da Tony",
          role: "Italská restaurace, Praha",
          text: "Jarda nám dělal kompletně celou elektriku v restauraci. Kdo dělá v gastru, ví, že kuchyně je srdce podniku a nic tam nesmí vypadnout, jinak stojíme. Jarda chápe, že potřebujeme funkční řešení, ne výmluvy. Všechno šlape jak hodinky.",
          highlight: true,
          link: "https://www.altrodatony.cz/"
        },
        {
          id: 2,
          name: "Petr Horák",
          role: "Rekonstrukce bytu, Žižkov",
          text: "Bál jsem se sekání do panelu a nepořádku, ale pan Soukup mě mile překvapil. Každý den po sobě uklidil, s ničím nebyl problém. Když se objevila komplikace se starým vedením, zavolal, vysvětlil možnosti a nechal mě rozhodnout.",
          highlight: false
        },
        {
          id: 3,
          name: "Jana Veselá",
          role: "Rodinný dům, Čakovice",
          text: "Potřebovali jsme předělat rozvaděč a natáhnout elektřinu do nové pergoly. Cenová nabídka seděla na korunu přesně, termín taky. Žádné skryté poplatky ani 'vícepráce', o kterých by nám neřekl dopředu. Doporučuji.",
          highlight: false
        }
      ]
    }
  },
  en: {
    nav: {
      services: "Services",
      pricing: "Pricing",
      about: "About Me",
      contact: "Contact",
      cta: "Get a Quote",
      mobile_call: "CALL NOW: 777 889 581"
    },
    hero: {
      badge: "Honest Craftsmanship • Prague & Area",
      title_line1: "Electricity.",
      title_line2: "No Compromises.",
      description: "I'm Jarda Soukup. An electrician who actually answers the phone, arrives on time, and cleans up after himself. Quality work at a fair price.",
      call_btn: "Call Me (777 889 581)",
      services_btn: "View Services",
      badges: {
        fair: "Fair Dealing",
        fair_desc: "I keep my word",
        no_hidden: "No Hidden Fees",
        no_hidden_desc: "Final price is final",
        personal: "Personal Approach",
        personal_desc: "You deal directly with me"
      },
      status: "Available for new projects"
    },
    switch: {
      label: "MAIN BREAKER",
      hint: "Flip the switch",
      blackout_title: "This is what happens",
      blackout_subtitle: "when you DIY.",
      blackout_desc: "Don't rely on luck. Call a pro so you're not left in the dark."
    },
    services: {
      eyebrow: "Services",
      title: "How I Can Help",
      subtitle: "No job is too small or too big. From changing a socket to complete installations.",
      cards: {
        home: {
          title: "Family House",
          desc: "I've built my own house, so I know the stress. I'll install wiring you won't have to touch for 20 years.",
          items: ["Complete Wiring", "Connections & Breaker Boxes", "Outdoor Lighting"]
        },
        flats: {
          title: "Apartments & Renos",
          desc: "Replacing old aluminum wiring with copper. Chasing walls, pulling cables, finishing. All with cleanup.",
          items: ["New Apartment Wiring", "Socket/Switch Replacement", "Data Cables (Internet)", "Revision Reports"]
        },
        gastro: {
          title: "Restaurants & Kitchens",
          desc: "Reliable wiring for demanding operations. I ensure everything works even during peak hours, and design lighting for the perfect atmosphere.",
          items: ["Appliance Connection", "Atmospheric Lighting", "Fast Emergency Service"]
        }
      }
    },
    story: {
      eyebrow: "About Me",
      title: "FAIR DEALING",
      p1: "I am an electrician for whom a handshake is a commitment. No excuses, no price hikes for 'extra work' unless agreed upon in advance. I arrive, do honest work, clean up, and the price stands.",
      p2: "",
      quote: "My word is my bond.",
      highlight: "I'll answer you today."
    },
    contact: {
      title: "Don't Hesitate to Reach Out",
      desc: "Call me or write to me. We'll discuss what you need and come up with a solution that works and won't break the bank.",
      call_action: "Call Me",
      message_action: "Send Message",
      email_action: "Email",
      invoice_data: "Billing Details",
      form_card: {
        badge: "Free Consultation",
        title_line1: "Tell me",
        title_line2: "what you need.",
        desc: "Write me briefly about your project. Whether it's a small fix or a major renovation, I'll propose a custom solution."
      }
    },
    form: {
      name_label: "What should I call you?",
      name_placeholder: "John Doe",
      email_label: "Where should I reply?",
      email_placeholder: "your@email.com",
      phone_label: "What number should I ring?",
      phone_placeholder: "777 ...",
      service_label: "What's roughly going on?",
      service_placeholder: "Choose what's burning...",
      message_label: "Describe it in your own words",
      message_placeholder: "Don't be afraid to elaborate. If it sparks, smokes, or just doesn't shine, I'm interested.",
      submit: "Send Inquiry",
      success_title: "Inquiry Sent!",
      success_desc: "Thank you for your interest. I will get back to you as soon as possible, usually within 24 hours.",
      options: {
        home: "Family House / Flat (Classic)",
        restaurant: "Restaurant / Gastro (Pro)",
        commercial: "Offices / Warehouse",
        repair: "Something broke (Emergency)",
        consultation: "Just planning (Consultation)",
        other: "Something Special"
      }
    },
    pricing: {
      title: "Indicative Pricing",
      subtitle: "No hidden fees. You always know what you're paying for.",
      headline_line1: "Fair Price",
      headline_line2: "Clear Upfront",
      hourly_rate: "Hourly Rate",
      hourly_desc: "For common repairs and installations",
      min_charge: "Min. charge 1 hour.",
      items: {
        socket: "Socket / Switch Installation",
        socket_desc: "Complete replacement (labor)",
        light: "Light Fixture Installation",
        box: "Breaker Box Connection (per module)",
        rev: "Revision (3-room flat)",
        rev_desc: "Including revision report",
        new_inst: "New Wiring (Studio Flat)",
        new_inst_desc: "Complete wiring incl. breaker box",
        transport: "Transport within Prague",
        transport_desc: "Arrival, consultation, measuring",
        free: "FREE"
      },
      vat_note: "I am not a VAT payer. Prices are final.",
      process: {
        title: "How does it work?",
        step1: { title: "Call Me", desc: "Tell me what you need. Emergency? I start immediately." },
        step2: { title: "I'll Arrive", desc: "I inspect the situation on-site and propose a solution." },
        step3: { title: "We Agree", desc: "You get a fixed price. No guessing, no surprises." }
      }
    },
    processSection: {
      eyebrow: "How it Works",
      title: "From Call to Lights On",
      steps: {
        contact: { title: "Contact", desc: "You call. If it's urgent, I handle it. Otherwise, we plan." },
        quote: { title: "Quote", desc: "I arrive, measure up. You get an exact price. No estimates." },
        work: { title: "Execution", desc: "I start on time. Have everything with me. Work clean." },
        handover: { title: "Handover", desc: "We test everything. I clean up. You pay only at the end." }
      }
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Satisfied Customers",
      subtitle: "are my business card.",
      reviews: [
        {
          id: 1,
          name: "Team Altro da Tony",
          role: "Italian Restaurant, Prague",
          text: "Jarda did the complete wiring for our restaurant. Anyone in gastro knows the kitchen is the heart and nothing can fail, or we stop. Jarda understands we need functional solutions, not excuses. Everything runs like clockwork.",
          highlight: true,
          link: "https://www.altrodatony.cz/"
        },
        {
          id: 2,
          name: "Petr Horák",
          role: "Apartment Reno, Žižkov",
          text: "I was afraid of cutting into the panel walls and the mess, but Mr. Soukup pleasantly surprised me. He cleaned up every day, no problems arose. When a complication with old wiring appeared, he called, explained options, and let me decide.",
          highlight: false
        },
        {
          id: 3,
          name: "Jana Veselá",
          role: "Family House, Čakovice",
          text: "We needed to redo the breaker box and pull electricity to a new pergola. The price quote was exact to the crown, the deadline too. No hidden fees or 'extra work' he wouldn't tell us about in advance. Highly recommended.",
          highlight: false
        }
      ]
    }
  }
};

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
  t: Translations['cz'];
} | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('cz');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'cz' ? 'en' : 'cz');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
