// Data pro jednotlivé služby - kompletní informace pro SEO a konverze

export interface Service {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroTitle: string;
  heroSubtitle: string;
  forWhom: string[];
  symptoms: {
    title: string;
    items: string[];
  };
  causes: string[];
  risks: {
    title: string;
    items: string[];
  };
  process: {
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  pricing: {
    title: string;
    basePrice: string;
    description: string;
    factors: string[];
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  testimonials?: Array<{
    text: string;
    author: string;
    location: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'elektropohotovost',
    slug: 'elektropohotovost-praha-24-7',
    title: 'Elektropohotovost Praha 24/7',
    metaTitle: 'Elektropohotovost Praha 24/7 – Nonstop výjezd | Jaroslav Soukup',
    metaDescription: 'Havarijní elektropohotovost Praha nonstop. Výpadek elektřiny, zkrat, jiskření? Volejte 777 889 581. Rychlý výjezd, transparentní ceny, pojištění.',
    h1: 'Elektropohotovost Praha – Nonstop havarijní výjezdy',
    heroTitle: 'Pohotovost 24/7',
    heroSubtitle: 'Bez elektřiny? Jiskří to? Zavolejte – řešíme hned',
    forWhom: ['Byty a rodinné domy', 'Paneláky a novostavby', 'Firmy a provozovny', 'Restaurace a hotely'],
    symptoms: {
      title: 'Kdy nás volat:',
      items: [
        'Úplný výpadek elektřiny v bytě nebo domě',
        'Opakovaně vypadává hlavní jistič',
        'Jiskření ze zásuvky nebo vypínače',
        'Zápach spáleniny u rozvaděče',
        'Dotyk na spotřebič „štípe" (nebezpečí úrazu)',
        'Prasklý proudový chránič nebo jistič',
        'Zaplavený rozvaděč (po havárii vody)'
      ]
    },
    causes: [
      'Přetížení obvodu (více spotřebičů najednou)',
      'Zkrat v instalaci nebo spotřebiči',
      'Poškození izolace kabelu (stáří, vlhkost, hlodavci)',
      'Vadný proudový chránič nebo jistič',
      'Chyba po rekonstrukci nebo po „kutilské" opravě'
    ],
    risks: {
      title: '⚠️ Kdy je to nebezpečné – vypněte hlavní jistič a volejte hned:',
      items: [
        'Viditelné jiskry, plamínky nebo kouř',
        'Intenzivní zápach spáleniny (tající izolace)',
        'Horká zásuvka, vypínač nebo rozvaděč',
        'Dotyk na kovové části spotřebičů „štípe"',
        'Zaplavený rozvaděč (nebezpečí zkratu)'
      ]
    },
    process: {
      title: 'Jak probíhá havarijní zásah:',
      steps: [
        {
          title: '1. Zavoláte',
          description: 'Popíšete problém, já vyhodnotím urgenci a potvrdím čas dojezdu (typicky 30–90 min dle lokality a vytížení)'
        },
        {
          title: '2. Rychlá diagnostika',
          description: 'Na místě zjistím příčinu – měřením, kontrolou obvodu, prověřením rozvaděče'
        },
        {
          title: '3. Bezpečnostní opatření',
          description: 'Pokud je riziko, vypínám obvod a zajišťuji, aby nedošlo k úrazu nebo požáru'
        },
        {
          title: '4. Oprava',
          description: 'Odstraním závadu – výměna jističe, oprava kabeláže, izolace spojů. Vše podle NV 194/2022'
        },
        {
          title: '5. Test a předání',
          description: 'Zkouším funkci, měřím, předávám revizní záznam (pokud je potřeba)'
        }
      ]
    },
    pricing: {
      title: 'Orientační ceny havarijní služby',
      basePrice: 'od 1 500 Kč',
      description: 'Finální cena závisí na:',
      factors: [
        'Čas výjezdu (pracovní doba / víkend / noc)',
        'Typ závady a náročnost diagnostiky',
        'Materiál (jistič, kabel, chrániče...)',
        'Vzdálenost (Praha centrum vs. okolí)',
        'Ceny vždy potvrzuji předem – žádná „černá díra"'
      ]
    },
    faq: [
      {
        question: 'Jak rychle dokážete přijet?',
        answer: 'V Praze typicky 30–90 minut od zavolání, záleží na aktuálním vytížení a lokalitě. U havárie (jiskry, kouř) vždy upřednostňuji.'
      },
      {
        question: 'Kolik to bude stát?',
        answer: 'Záleží na typu závady a čase výjezdu. Základní havarijní výjezd od 1 500 Kč (+ materiál). Cenu potvrzujem předem, po diagnostice na místě.'
      },
      {
        question: 'Mám vypnout elektřinu, než přijedete?',
        answer: 'Pokud jiskří, kouří nebo cítíte zápach spáleniny – ANO, vypněte hlavní jistič v rozvaděči. Jinak to není nutné, zjistím příčinu měřením.'
      },
      {
        question: 'Jezdíte i v noci a o víkendu?',
        answer: 'Ano, elektropohotovost je nonstop. V noci a o víkendu platí příplatek, který vždy oznámím předem.'
      },
      {
        question: 'Co když je problém ve společných prostorách paneláku?',
        answer: 'Pokud jde o hlavní stoupačku nebo společný rozvaděč, je potřeba kontaktovat správu domu. Pokud je závada ve vašem bytě (za elektroměrem), vyřeším to.'
      },
      {
        question: 'Dáte mi doklad pro pojišťovnu?',
        answer: 'Ano, vždy vystavuji fakturu a na požádání i protokol o opravě (revizní záznam), který lze předložit pojišťovně.'
      }
    ],
    testimonials: [
      {
        text: 'V neděli odpoledne vypadl proud, nevěděli jsme, co dělat. Pan Soukup přijel za hodinu, za 20 minut měl opraven jistič. Férová cena, žádné překvapení.',
        author: 'Martin K.',
        location: 'Praha 4 – Pankrác'
      },
      {
        text: 'Jiskřilo mi to ze zásuvky u pračky, měla jsem strach. Jaroslav přijel ještě ten večer, vypnul obvod, našel zkrat a opravil. Konečně můžu klidně spát.',
        author: 'Jana P.',
        location: 'Praha 6 – Dejvice'
      }
    ]
  },
  {
    id: 'revize',
    slug: 'revize-elektro-praha',
    title: 'Revize elektro Praha',
    metaTitle: 'Revize elektroinstalace Praha – Revizní zprávy dle NV 194/2022',
    metaDescription: 'Revize elektro Praha pro byty, domy, firmy. Revizní zpráva dle NV 194/2022, pojištění, hypotéka, prodej. Volejte 777 889 581.',
    h1: 'Revize elektroinstalace Praha – Revizní zprávy',
    heroTitle: 'Revize elektro',
    heroSubtitle: 'Pro pojišťovnu, hypotéku, prodej i pravidelnou kontrolu',
    forWhom: ['Majitelé bytů a domů', 'Prodávající nemovitosti', 'Firmy a provozovny', 'Developeři a stavebníci'],
    symptoms: {
      title: 'Kdy je revize potřeba:',
      items: [
        'Kupujete byt nebo dům (podmínka hypotéky nebo pojištění)',
        'Prodáváte nemovitost (část dokumentace)',
        'Po rekonstrukci elektroinstalace',
        'Pravidelná revize (po 5 letech u obytných budov, častěji u firem)',
        'Po havárii (zatopení rozvaděče, požár)',
        'Při nabytí majetku (pozůstalost, dědictví)',
        'Pro provozovny, gastronomie, wellness (každé 2–3 roky)'
      ]
    },
    causes: [
      'Legislativní povinnost dle NV 194/2022',
      'Požadavek pojišťovny (podmínka pojištění nemovitosti)',
      'Požadavek banky při schvalování hypotéky',
      'Bezpečnost – odhalení skrytých závad před havárií',
      'Součást dokumentace při prodeji nemovitosti'
    ],
    risks: {
      title: '⚠️ Co hrozí bez platné revize:',
      items: [
        'Odmítnutí pojistného plnění při škodě (požár, zkrat)',
        'Pokuta při kontrole (živnostník, firma)',
        'Neprodejnost nemovitosti (chybějící dokumentace)',
        'Riziko úrazu elektrickým proudem (stará instalace bez kontroly)'
      ]
    },
    process: {
      title: 'Jak probíhá revize elektro:',
      steps: [
        {
          title: '1. Objednávka',
          description: 'Domluvíme termín (typicky do 7 dnů) a já potvrdím rozsah revize a cenu'
        },
        {
          title: '2. Prohlídka a měření',
          description: 'Na místě prověřím rozvaděč, obvody, zásuvky, jističe, uzemnění. Měřím izolační odpor, proud, funkci chráničů (RCD)'
        },
        {
          title: '3. Hodnocení stavu',
          description: 'Zjištěné závady klasifikuji podle závažnosti (A – bezprostřední nebezpečí, B – závady k odstranění, C – doporučení)'
        },
        {
          title: '4. Revizní zpráva',
          description: 'Vystavuji protokol o revizi s výsledky měření, seznamem závad a razítkem. Platnost 5 let (u obytných budov)'
        },
        {
          title: '5. Oprava závad (volitelně)',
          description: 'Pokud najdu závady, můžu je hned opravit nebo vás nasměruji, co je potřeba vyřešit před další revizí'
        }
      ]
    },
    pricing: {
      title: 'Ceny revizí elektro',
      basePrice: 'od 1 800 Kč',
      description: 'Cena revize závisí na:',
      factors: [
        'Velikost objektu (byt 1+kk vs. rodinný dům s dílnou)',
        'Stav dokumentace (máte schéma rozvaděče?)',
        'Stáří instalace (moderní rozvaděč vs. staré pojistky)',
        'Urgence (standardní termín vs. expresní revize)',
        'Revize bytu 2+kk: od 1 800 Kč',
        'Revize RD do 150 m²: od 3 500 Kč',
        'Revize provozovny: od 2 500 Kč (dle rozsahu)'
      ]
    },
    faq: [
      {
        question: 'Jak dlouho revize trvá?',
        answer: 'Byt 2+kk typicky 1,5–2 hodiny. Rodinný dům 3–4 hodiny. Záleží na rozsahu instalace a stavu dokumentace.'
      },
      {
        question: 'Kdy dostanu revizní zprávu?',
        answer: 'Protokol vyhotovuji ještě týž den nebo do 2 dnů (elektronicky i v papírové formě). V případě urgence (hypotéka) můžu dodat i v den revize.'
      },
      {
        question: 'Co když revize odhalí závady?',
        answer: 'Závady klasifikuji (A, B, C). Ty nejzávažnější (A) je nutné opravit ihned. Méně kritické (B, C) můžete řešit postupně. Pokud chcete, opravím je hned na místě.'
      },
      {
        question: 'Potřebuji revizi pro hypotéku?',
        answer: 'Většina bank dnes požaduje revizní zprávu jako součást dokumentace k nemovitosti. Ověřte si to u svého bankéře – ale typicky ano.'
      },
      {
        question: 'Platí revize i pro pojišťovnu?',
        answer: 'Ano. Některé pojišťovny vyžadují platnou revizní zprávu jako podmínku pojištění nemovitosti (nebo snížení pojistného).'
      },
      {
        question: 'Jak často je potřeba revizi opakovat?',
        answer: 'Dle NV 194/2022: u obytných budov každých 5 let. U firem a provozoven častěji (2–3 roky), u objektů se zvláštním režimem (wellness, zdravotnictví) každoročně.'
      }
    ],
    testimonials: [
      {
        text: 'Potřeboval jsem revizi kvůli prodeji bytu. Pan Soukup byl rychlý, profesionální, zprávu jsem měl do 2 dnů. Kupující byl spokojen.',
        author: 'Petr V.',
        location: 'Praha 10 – Strašnice'
      }
    ]
  },
  {
    id: 'opravy',
    slug: 'opravy-zasuvky-vypinace',
    title: 'Opravy zásuvek a vypínačů',
    metaTitle: 'Oprava zásuvek a vypínačů Praha – Nefunguje zásuvka? | Jaroslav Soukup',
    metaDescription: 'Nefungující zásuvka, poškozený vypínač, uvolněná zásuvka? Oprava i výměna – Praha a okolí. Volejte 777 889 581.',
    h1: 'Oprava a výměna zásuvek a vypínačů Praha',
    heroTitle: 'Opravy zásuvek a vypínačů',
    heroSubtitle: 'Nefunguje? Jiskří? Vyměníme rychle a bezpečně',
    forWhom: ['Byty', 'Rodinné domy', 'Kanceláře', 'Obchody a provozovny'],
    symptoms: {
      title: 'Typické příznaky závady:',
      items: [
        'Zásuvka vůbec nefunguje (spotřebič se nerozsvítí)',
        'Uvolněná zásuvka nebo vypínač (vypadávají ze stěny)',
        'Jiskry při zapojování vidlice',
        'Spálená nebo roztavená zásuvka',
        'Vypínač „kliká", ale světlo se nerozsvítí',
        'Dotyk na zásuvku „štípe"',
        'Zápach spáleniny u zásuvky'
      ]
    },
    causes: [
      'Uvolněný kontakt (špatné připojení vodiče)',
      'Spálené kontakty (přetížení, stáří)',
      'Prasklá vložka zásuvky',
      'Zkrat v krabici',
      'Mechanické poškození (špatná montáž, náraz)'
    ],
    risks: {
      title: '⚠️ Kdy je to nebezpečné – zavolejte elektrikáře:',
      items: [
        'Viditelné jiskry',
        'Horká zásuvka nebo vypínač',
        'Zápach spáleniny',
        'Dotyk „štípe" (chybějící uzemnění nebo zkrat)',
        'Kouř z krabice'
      ]
    },
    process: {
      title: 'Jak probíhá oprava:',
      steps: [
        {
          title: '1. Zavoláte',
          description: 'Popíšete problém, domluvíme termín (často i týž den)'
        },
        {
          title: '2. Diagnostika',
          description: 'Vypnu obvod, rozeberu zásuvku/vypínač, zjistím příčinu'
        },
        {
          title: '3. Oprava nebo výměna',
          description: 'Opravím kontakty, vyměním vložku nebo celou zásuvku. Pokud je potřeba, vyměním i vypínač nebo krabici'
        },
        {
          title: '4. Test',
          description: 'Zapnu obvod, zkouším funkci, měřím (pokud je podezření na zkrat)'
        }
      ]
    },
    pricing: {
      title: 'Orientační ceny',
      basePrice: 'od 600 Kč',
      description: 'Typické ceny:',
      factors: [
        'Oprava kontaktu zásuvky: 600–900 Kč',
        'Výměna zásuvky: 800–1 200 Kč',
        'Výměna vypínače: 700–1 000 Kč',
        'Přidání nové zásuvky (+ kabeláž): od 1 500 Kč',
        'Cena vždy zahrnuje materiál, práci a konzultaci'
      ]
    },
    faq: [
      {
        question: 'Můžu si opravit zásuvku sám?',
        answer: 'Dle NV 194/2022 musí práce na elektroinstalaci provádět osoba s vyhláškou 50/1978 (elektrikář). Navíc je to rizikové – hrozí zkrat nebo úraz.'
      },
      {
        question: 'Jak rychle to opravíte?',
        answer: 'Výměna nebo oprava zásuvky typicky 15–30 minut. Pokud je potřeba táhnout nový kabel, tak déle.'
      },
      {
        question: 'Můžete zásuvku přemístit?',
        answer: 'Ano, pokud půjde dotáhnout kabel. Jinak musím frézovat drážku a vést nový kabel. To prodlouží práci a cenu.'
      },
      {
        question: 'Jakou zásuvku doporučujete?',
        answer: 'Pro byty doporučuji standardní značky (ABB, Schneider, Legrand). Pokud máte design interiér, můžeme použít designové rámečky.'
      }
    ]
  },
  {
    id: 'rozvadec',
    slug: 'rozvadec-jistice-proudovy-chranic',
    title: 'Rozvaděč, jističe, proudový chránič',
    metaTitle: 'Výměna rozvaděče a jističů Praha – Modernizace elektro | Jaroslav Soukup',
    metaDescription: 'Výměna rozvaděče, jističů, proudových chráničů. Starý rozvaděč s pojistkami? Modernizace elektro Praha. Volejte 777 889 581.',
    h1: 'Výměna rozvaděče, jističů a chráničů Praha',
    heroTitle: 'Rozvaděč, jističe, chrániče',
    heroSubtitle: 'Modernizace starého rozvaděče i výměna jednotlivých jističů',
    forWhom: ['Byty s pojistkami', 'Starší rodinné domy', 'Paneláky po rekonstrukci', 'Firmy'],
    symptoms: {
      title: 'Kdy řešit rozvaděč:',
      items: [
        'Máte ještě staré pojistky (ne jističe)',
        'Rozvaděč nemá proudový chránič (RCD)',
        'Často vám „vypadává proud" (přetížení)',
        'Jistič se nedá zapnout zpět',
        'Chcete přidat obvod (kuchyň, dílna, tepelné čerpadlo)',
        'Rozvaděč je přeplněný (chaos kabelů)',
        'Vyžaduje to pojišťovna nebo banka (při revizi)'
      ]
    },
    causes: [
      'Stáří instalace (pojistky místo jističů)',
      'Nevyhovující rozvaděč (chybí RCD, podhodnocené jističe)',
      'Nárůst spotřeby (nové spotřebiče, elektromobil)',
      'Legislativa (NV 194/2022 vyžaduje RCD)',
      'Bezpečnost (starý rozvaděč neochrání před úrazem)'
    ],
    risks: {
      title: '⚠️ Rizika starého rozvaděče:',
      items: [
        'Úraz elektrickým proudem (chybí RCD)',
        'Požár (přetížený obvod, spálené pojistky)',
        'Odmítnutí pojistného plnění při škodě',
        'Neprojde revize (nutná pro prodej, hypotéku, pojištění)'
      ]
    },
    process: {
      title: 'Jak probíhá výměna rozvaděče:',
      steps: [
        {
          title: '1. Konzultace',
          description: 'Prohlídka stávajícího rozvaděče, návrh řešení (počet obvodů, typ jističů, RCD)'
        },
        {
          title: '2. Návrh a cenová nabídka',
          description: 'Stanovím rozsah práce, materiál (rozvaděč, jističe, RCD), termín a cenu'
        },
        {
          title: '3. Montáž',
          description: 'Vypnu hlavní jistič, odpojím staré vedení, nainstaluji nový rozvaděč, připojím obvody, označím'
        },
        {
          title: '4. Test a revize',
          description: 'Zkouším funkci, měřím, vystavím revizní záznam. Elektřina vypnutá typicky 3–6 hodin'
        }
      ]
    },
    pricing: {
      title: 'Orientační ceny',
      basePrice: 'od 5 000 Kč',
      description: 'Typické ceny:',
      factors: [
        'Výměna jednoho jističe: 800–1 500 Kč',
        'Výměna rozvaděče v bytě (1místný, s RCD): od 5 000 Kč',
        'Výměna rozvaděče v RD (3–5 obvodů): od 12 000 Kč',
        'Rozšíření rozvaděče (nový obvod): od 3 000 Kč',
        'Cena vždy zahrnuje materiál, práci, revizi a protokol'
      ]
    },
    faq: [
      {
        question: 'Můžu si vyměnit jistič sám?',
        answer: 'Ne. Práce na rozvaděči smí provádět pouze elektrikář s oprávněním dle NV 194/2022. Hrozí úraz i zkrat.'
      },
      {
        question: 'Jak dlouho trvá výměna rozvaděče?',
        answer: 'Výměna rozvaděče v bytě typicky 3–6 hodin (podle počtu obvodů). Elektřina bude po většinu doby vypnutá.'
      },
      {
        question: 'Co je to RCD (proudový chránič)?',
        answer: 'Jistič, který chrání před úrazem elektrickým proudem. Reaguje na „unikající proud" (např. při dotyku na vadný spotřebič). Podle NV 194/2022 je povinný.'
      },
      {
        question: 'Můžete rozšířit rozvaděč o nový obvod?',
        answer: 'Ano, pokud je ve stávajícím rozvaděči místo a příkon domu to umožní. Jinak je nutné řešit nový (větší) rozvaděč.'
      },
      {
        question: 'Potřebuji nový rozvaděč na elektromobil?',
        answer: 'Záleží na typu wallboxu a příkonu vašeho domu. Často stačí přidat samostatný obvod s jističem, ale u starších domů může být nutné řešit i připojení nebo rozvaděč.'
      }
    ]
  },
  {
    id: 'rekonstrukce',
    slug: 'rekonstrukce-elektroinstalace-byt-dum',
    title: 'Rekonstrukce elektroinstalace bytu/domu',
    metaTitle: 'Rekonstrukce elektroinstalace Praha – Kompletní výměna elektro',
    metaDescription: 'Rekonstrukce elektroinstalace bytu, domu. Kompletní výměna kabeláže, rozvaděče, zásuvek. Praha a okolí. Volejte 777 889 581.',
    h1: 'Kompletní rekonstrukce elektroinstalace Praha',
    heroTitle: 'Rekonstrukce elektro',
    heroSubtitle: 'Nová kabeláž, rozvaděč, zásuvky. Pro byt i dům',
    forWhom: ['Rekonstrukce bytu', 'Rekonstrukce rodinného domu', 'Nová výstavba (elektro část)', 'Developerské projekty'],
    symptoms: {
      title: 'Kdy řešit kompletní rekonstrukci:',
      items: [
        'Kupujete starší byt nebo dům k rekonstrukci',
        'Máte starou instalaci s hliníkovým vedením',
        'Chcete přidat zásuvky, obvody, venkovní osvětlení',
        'Měníte dispozice (stěny, kuchyň)',
        'Nevyhovuje revize (závady kategorie A)',
        'Chcete moderní smart home (stmívače, ovládání)',
        'Připravujete nemovitost na prodej'
      ]
    },
    causes: [
      'Stáří instalace (hliníkové vodiče, staré pojistky)',
      'Změna dispozic (bourání stěn, nová kuchyň)',
      'Zvýšená spotřeba (moderní spotřebiče, klimatizace)',
      'Požadavky na pohodlí (více zásuvek, LED osvětlení, smart home)',
      'Legislativa (nová instalace musí splňovat NV 194/2022)'
    ],
    risks: {
      title: '⚠️ Rizika staré instalace:',
      items: [
        'Požár (hliníkové vodiče, přetížení)',
        'Úraz (chybí uzemnění, RCD)',
        'Nefunkční spotřebiče (kolísání napětí)',
        'Odmítnutí pojištění nebo hypotéky (nevyhovuje revize)'
      ]
    },
    process: {
      title: 'Jak probíhá rekonstrukce elektro:',
      steps: [
        {
          title: '1. Obhlídka a návrh',
          description: 'Prohlídka objektu, konzultace požadavků (kde zásuvky, vypínače, osvětlení), návrh schématu'
        },
        {
          title: '2. Projekt a cena',
          description: 'Vypracuji schéma rozvaděče, seznam materiálu, harmonogram a cenovou nabídku'
        },
        {
          title: '3. Demolice a příprava',
          description: 'Demontáž staré instalace, frézování drážek (pokud není bourání celého bytu)'
        },
        {
          title: '4. Montáž nové instalace',
          description: 'Pokládka kabelů (CYKYm 3× 1,5 nebo 2,5 mm²), montáž krabic, rozvaděče, uzemnění'
        },
        {
          title: '5. Zapojení a test',
          description: 'Připojení zásuvek, vypínačů, svítidel. Revize, měření, zkouška funkce. Předání protokolu'
        }
      ]
    },
    pricing: {
      title: 'Orientační ceny rekonstrukce',
      basePrice: 'od 25 000 Kč',
      description: 'Typické ceny (byt):',
      factors: [
        'Byt 1+kk (35–45 m²): 25 000–40 000 Kč',
        'Byt 2+kk (55–65 m²): 40 000–60 000 Kč',
        'Byt 3+1 (75–85 m²): 60 000–85 000 Kč',
        'Rodinný dům (120–150 m²): od 120 000 Kč',
        'Cena závisí na: počtu obvodů, frézování, designu (smart home), termínu',
        'Vždy dodávám rozpis materiálu a prací'
      ]
    },
    faq: [
      {
        question: 'Jak dlouho rekonstrukce trvá?',
        answer: 'Byt 2+kk: 5–7 pracovních dnů. Rodinný dům: 3–4 týdny (dle rozsahu). Harmonogram vždy upřesním po obhlídce.'
      },
      {
        question: 'Musím mít projekt?',
        answer: 'Pro rodinné domy často ano (dle stavebního úřadu). Pro byty většinou stačí schéma rozvaděče, které vypracuji já.'
      },
      {
        question: 'Frézujete drážky nebo použijete lišty?',
        answer: 'Dle vaší volby. Frézování je estetičtější (zapravíme do stěny), ale prašné. Lišty jsou rychlejší a levnější, ale viditelné.'
      },
      {
        question: 'Můžete dodat i zásuvky a vypínače?',
        answer: 'Ano. Standardně používám kvalitní značky (ABB, Schneider), ale můžete si vybrat i design sérii (Gira, Jung...).'
      },
      {
        question: 'Zahrnuje cena i revizi?',
        answer: 'Ano. Po dokončení rekonstrukce provádím revizi a vystavuji protokol (nutné pro kolaudaci, prodej, pojištění).'
      },
      {
        question: 'Můžete zapojit smart home?',
        answer: 'Ano, instaluji stmívače, chytré vypínače, ovládání přes telefon (Loxone, KNX, nebo jednoduché Wi-Fi řešení).'
      }
    ]
  },
  {
    id: 'pripojeni',
    slug: 'pripojeni-spotrebicu-varna-deska-trouba',
    title: 'Připojení spotřebičů – varná deska, trouba',
    metaTitle: 'Připojení varné desky a trouby Praha – Elektrikář | Jaroslav Soukup',
    metaDescription: 'Připojení varné desky, trouby, myčky, pračky. Bezpečně a dle norem. Praha a okolí. Volejte 777 889 581.',
    h1: 'Připojení spotřebičů – varná deska, trouba, myčka',
    heroTitle: 'Připojení spotřebičů',
    heroSubtitle: 'Varná deska, trouba, myčka – bezpečně a dle norem',
    forWhom: ['Nová kuchyně', 'Výměna spotřebičů', 'Rekonstrukce bytu', 'Novostavby'],
    symptoms: {
      title: 'Kdy potřebujete elektrikáře:',
      items: [
        'Kupujete novou varnou desku nebo troubu',
        'Měníte spotřebič za výkonnější (např. indukce)',
        'Kuchyňská linka je na jiném místě (chybí přípojka)',
        'Spotřebič má jiný typ připojení než stávající zásuvka',
        'Nemáte samostatný obvod pro varnou desku',
        'Chcete bezpečně připojit myčku, pračku, sušičku',
        'Potřebujete poradit, jaký spotřebič zvolit (příkon)'
      ]
    },
    causes: [
      'Vysoký příkon spotřebičů (indukce 7–9 kW, trouba 3 kW)',
      'Nutnost samostatného obvodu (dle NV 194/2022)',
      'Riziko přetížení (pokud zapojíte do běžné zásuvky)',
      'Změna dispozic kuchyně (stěhování linky)',
      'Bezpečnost (nesprávné zapojení = požár, zkrat)'
    ],
    risks: {
      title: '⚠️ Rizika nesprávného zapojení:',
      items: [
        'Požár (přetížený kabel, roztavená zásuvka)',
        'Zkrat (vadné připojení)',
        'Poškození spotřebiče (kolísání napětí)',
        'Úraz elektrickým proudem (chybí uzemnění)',
        'Ztráta záruky na spotřebič (připojeno nekvalifikovaně)'
      ]
    },
    process: {
      title: 'Jak probíhá připojení:',
      steps: [
        {
          title: '1. Konzultace',
          description: 'Zjistím typ spotřebiče, příkon, typ přípojky (zásuvka, pevné připojení, kabel z rozvaděče)'
        },
        {
          title: '2. Kontrola obvodu',
          description: 'Ověřím, zda stávající obvod unese příkon (jistič, průřez kabelu). Pokud ne, navrhu řešení (nový obvod)'
        },
        {
          title: '3. Zapojení',
          description: 'Připojím spotřebič podle návodu výrobce, zkontoluji uzemnění, připojím na samostatný jistič (pokud je potřeba)'
        },
        {
          title: '4. Test',
          description: 'Zkouším funkci, měřím proud, kontroluji, zda spotřebič funguje správně a bezpečně'
        }
      ]
    },
    pricing: {
      title: 'Orientační ceny',
      basePrice: 'od 1 200 Kč',
      description: 'Typické ceny:',
      factors: [
        'Připojení trouby (stávající zásuvka): 1 200–1 800 Kč',
        'Připojení varné desky (pevné připojení): 1 500–2 500 Kč',
        'Vytvoření nového obvodu pro spotřebič: od 3 500 Kč',
        'Připojení myčky, pračky: 1 000–1 500 Kč',
        'Cena zahrnuje materiál (zásuvka, konektor, jistič), práci a konzultaci'
      ]
    },
    faq: [
      {
        question: 'Můžu zapojit indukční desku do běžné zásuvky?',
        answer: 'Ne. Indukce má příkon 7–9 kW, běžná zásuvka unese max. 3,5 kW. Musí mít samostatný obvod s kabelem min. 2,5 mm² (často 4 mm²) a jističem 32 A.'
      },
      {
        question: 'Potřebuji samostatný obvod pro troubu?',
        answer: 'Záleží na příkonu. Trouby do 3 kW lze zapojit do běžné zásuvky (pokud tam není nic dalšího). Výkonnější trouby potřebují samostatný obvod.'
      },
      {
        question: 'Připojíte i zabudovanou myčku nebo pračku?',
        answer: 'Ano. Myčka i pračka mají typicky příkon 2–3 kW, stačí běžná zásuvka. Ale musí mít uzemnění (PE) a být v dosahu vody (+ RCD v rozvaděči).'
      },
      {
        question: 'Jak rychle to zvládnete?',
        answer: 'Pokud je přípojka na místě, připojení spotřebiče trvá 30–60 minut. Pokud je potřeba táhnout nový kabel, tak 2–4 hodiny.'
      },
      {
        question: 'Můžete poradit, jaký spotřebič koupit?',
        answer: 'Ano. Pokud víte, jaká je vaše instalace (průřez kabelu, jistič), můžu vám říct, jaký maximální příkon spotřebiče zvolit.'
      }
    ]
  },
  {
    id: 'osvetleni',
    slug: 'osvetleni-led-svitidla-instalace',
    title: 'Osvětlení – LED svítidla, instalace',
    metaTitle: 'Instalace LED osvětlení Praha – Svítidla, pásky, stmívače',
    metaDescription: 'Instalace LED osvětlení, svítidel, pásků, stmívačů. Interiér i exteriér. Praha a okolí. Volejte 777 889 581.',
    h1: 'Instalace LED osvětlení a svítidel Praha',
    heroTitle: 'Osvětlení a LED',
    heroSubtitle: 'Svítidla, LED pásky, stmívače, venkovní osvětlení',
    forWhom: ['Byty a domy', 'Kanceláře', 'Obchody a showroomy', 'Restaurace'],
    symptoms: {
      title: 'Kdy řešit osvětlení:',
      items: [
        'Chcete vyměnit staré žárovky za úsporné LED',
        'Instalace nových svítidel (lustr, bodovky, LED pásky)',
        'Venkovní osvětlení (terasa, vjezd, zahrada)',
        'Stmívače, chytré ovládání (telefon, hlasově)',
        'Přidání světel (nad pracovní desku, zrcadlo)',
        'Rekonstrukce interiéru (nový koncept osvětlení)',
        'Bezpečnostní osvětlení (pohybový senzor, kamera)'
      ]
    },
    causes: [
      'Úspora energie (LED vs. klasické žárovky)',
      'Estetika (moderní design svítidel)',
      'Funkčnost (více světel, lepší pracovní osvětlení)',
      'Bezpečnost (venkovní osvětlení, pohybové senzory)',
      'Pohodlí (stmívače, chytré ovládání)'
    ],
    risks: {
      title: '⚠️ Pozor při instalaci osvětlení:',
      items: [
        'Nesprávné zapojení = zkrat (zejména u LED pásků)',
        'Použití nekvalitních LED zdrojů (blikání, krátká životnost)',
        'Přetížení stmívače (nekompatibilita s LED)',
        'Venkovní svítidla bez krytí IP (zkrat při dešti)'
      ]
    },
    process: {
      title: 'Jak probíhá instalace osvětlení:',
      steps: [
        {
          title: '1. Konzultace',
          description: 'Probereme vaše představy (typ svítidel, umístění, stmívače, chytré ovládání)'
        },
        {
          title: '2. Návrh řešení',
          description: 'Navrhu rozmístění světel, typ svítidel, výkon, kabeláž. Můžu doporučit konkrétní modely'
        },
        {
          title: '3. Instalace',
          description: 'Položím kabeláž (pokud je potřeba), nainstaluji svítidla, vypínače, stmívače, zapojím'
        },
        {
          title: '4. Nastavení a test',
          description: 'Nastavím stmívače (pokud jsou), zkouším funkci, předám ovládání'
        }
      ]
    },
    pricing: {
      title: 'Orientační ceny',
      basePrice: 'od 800 Kč',
      description: 'Typické ceny:',
      factors: [
        'Instalace lustru: 800–1 500 Kč',
        'Instalace bodových LED svítidel (4–6 ks): 2 500–4 000 Kč',
        'Instalace LED pásku (kuchyň, ložnice): od 2 000 Kč',
        'Instalace stmívače: 1 500–2 500 Kč',
        'Venkovní osvětlení (terasa, vjezd): od 3 000 Kč',
        'Cena zahrnuje materiál (kabel, konektory), práci a konzultaci'
      ]
    },
    faq: [
      {
        question: 'Můžete dodat i svítidla?',
        answer: 'Můžu poradit a doporučit konkrétní modely, ale preferuji, když si je zákazník vybere a objedná sám (máte tak širší výběr a kontrolu nad cenou).'
      },
      {
        question: 'Jak vybrat správný LED zdroj?',
        answer: 'Záleží na typu svítidla a účelu. Pro obývák 2700–3000 K (teplá bílá), pro kuchyň 4000 K (neutrální), pro dílnu 6000 K (studená). Můžu poradit.'
      },
      {
        question: 'Můžete nainstalovat chytrá LED?',
        answer: 'Ano, instaluji chytré žárovky (Philips Hue, Yeelight), LED pásky s ovládáním přes Wi-Fi nebo chytré vypínače (Shelly, Sonoff).'
      },
      {
        question: 'Funguje každý stmívač s LED?',
        answer: 'Ne. Klasické stmívače (pro žárovky) často nefungují s LED. Musí být stmívač kompatibilní s LED (dimovatelné LED zdroje). Můžu doporučit správný model.'
      },
      {
        question: 'Jak instalovat venkovní osvětlení?',
        answer: 'Venkovní svítidla musí mít krytí min. IP44 (ochrana proti stříkající vodě). Kabeláž vést v chráničce nebo zakopat. Pokud jde o terasu nebo vjezd, doporučuji pohybový senzor.'
      }
    ]
  },
  {
    id: 'prepetova-ochrana',
    slug: 'prepetova-ochrana-svody',
    title: 'Přepěťová ochrana a svody',
    metaTitle: 'Přepěťová ochrana Praha – Ochrana před bouřkou | Jaroslav Soukup',
    metaDescription: 'Instalace přepěťové ochrany, bleskosvody. Ochrana elektro před bouřkou. Praha a okolí. Volejte 777 889 581.',
    h1: 'Přepěťová ochrana a bleskosvody Praha',
    heroTitle: 'Přepěťová ochrana',
    heroSubtitle: 'Ochraňte elektro před bouřkou a přepětím',
    forWhom: ['Rodinné domy', 'Firmy a servery', 'Citlivá elektronika', 'Novostavby'],
    symptoms: {
      title: 'Kdy řešit přepěťovou ochranu:',
      items: [
        'Máte rodinný dům (bez bleskosvodu)',
        'Často vypadává elektronika po bouřce',
        'Máte citlivou techniku (servery, audio, smart home)',
        'Stavíte nový dům (povinnost dle norem)',
        'V okolí jsou časté bouřky (venkov, kopce)',
        'Máte fotovoltaiku nebo tepelné čerpadlo',
        'Chcete se vyhnout riziku požáru'
      ]
    },
    causes: [
      'Blesk do domu nebo blízkého okolí',
      'Indukované přepětí (blesk do vedení NN)',
      'Spínací přepětí (zapnutí velkého spotřebiče)',
      'Chybějící bleskosvod nebo přepěťová ochrana'
    ],
    risks: {
      title: '⚠️ Co hrozí bez přepěťové ochrany:',
      items: [
        'Zničení elektroniky (TV, PC, router, smart home)',
        'Požár (přepětí v rozvaděči)',
        'Úraz (dotyk na vadný spotřebič po bouřce)',
        'Škoda na fotovoltaice, tepelném čerpadle'
      ]
    },
    process: {
      title: 'Jak probíhá instalace přepěťové ochrany:',
      steps: [
        {
          title: '1. Konzultace',
          description: 'Zjistím typ objektu, riziko (lokalita, výška budovy), citlivost elektro'
        },
        {
          title: '2. Návrh ochrany',
          description: 'Navrhu typ přepěťové ochrany (stupeň 1+2 v rozvaděči, stupeň 3 u citlivých spotřebičů), umístění'
        },
        {
          title: '3. Instalace',
          description: 'Nainstaluji přepěťovou ochranu v rozvaděči, připojím uzemnění, otestuji funkci'
        },
        {
          title: '4. Revize',
          description: 'Protokol o instalaci (nutné pro pojišťovnu, prodej)'
        }
      ]
    },
    pricing: {
      title: 'Orientační ceny',
      basePrice: 'od 3 500 Kč',
      description: 'Typické ceny:',
      factors: [
        'Přepěťová ochrana do rozvaděče (1+2): 3 500–6 000 Kč',
        'Přepěťová ochrana pro citlivou elektroniku (3): 1 500–2 500 Kč',
        'Kontrola uzemnění + měření: 1 500 Kč',
        'Instalace externího bleskosvodu (tyč, svody): od 25 000 Kč',
        'Cena zahrnuje materiál, práci a revizi'
      ]
    },
    faq: [
      {
        question: 'Potřebuji přepěťovou ochranu, když mám bleskosvod?',
        answer: 'Ano. Bleskosvod odvede blesk do země, ale nezabrání indukovanému přepětí v kabelech. Přepěťová ochrana v rozvaděči ochrání elektroniku.'
      },
      {
        question: 'Funguje přepěťová ochrana vícekrát?',
        answer: 'Ano, moderní přepěťové ochrany (varistorové) vydrží desítky přepětí. Ale po silném zásahu blesku může být nutná výměna (kontrola po bouřce).'
      },
      {
        question: 'Můžu si koupit přepěťovou ochranu v prodejně?',
        answer: 'Do zásuvky ano (zásuvková přepěťová ochrana), ale ta chrání jen jeden spotřebič. Pro celý dům je potřeba ochrana v rozvaděči (stupeň 1+2) – tu musí instalovat elektrikář.'
      },
      {
        question: 'Musím mít uzemnění?',
        answer: 'Ano, bez uzemnění přepěťová ochrana nefunguje. Pokud nemáte uzemňovací pásek, můžu ho doinstalov at (uzemňovací tyč).'
      },
      {
        question: 'Jak poznám, že přepěťová ochrana funguje?',
        answer: 'Moderní ochrany mají indikátor (zelená LED = OK, červená = výměna). Po každé velké bouřce doporučuji kontrolu.'
      }
    ]
  }
];
