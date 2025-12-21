// Data pro poradnu (help hub / blog) – long-tail SEO

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: 'Poruchy' | 'Revize' | 'Rekonstrukce' | 'Spotřebiče' | 'Bezpečnost';
  intro: string;
  problem: {
    title: string;
    description: string;
  };
  causes: string[];
  whatToDo: {
    title: string;
    steps: string[];
  };
  whenToCall: {
    title: string;
    signs: string[];
  };
  prevention: {
    title: string;
    tips: string[];
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'vypadava-jistic',
    slug: 'vypadava-jistic-co-delat',
    title: 'Vypadává jistič – co dělat?',
    metaTitle: 'Vypadává jistič – příčiny a řešení | Poradna elektrikáře Praha',
    metaDescription: 'Proč vypadává jistič a co s tím? Příčiny, první pomoc, kdy volat elektrikáře. Poradna – Jaroslav Soukup, elektrikář Praha.',
    h1: 'Vypadává jistič – co dělat a kdy volat elektrikáře',
    category: 'Poruchy',
    intro: 'Vypadávání jističe je častý problém, který může mít řadu příčin – od přetížení obvodu až po zkrat. V tomto článku se dozvíte, jak problém diagnostikovat a kdy je nutné zavolat elektrikáře.',
    problem: {
      title: 'Co se děje?',
      description: 'Jistič „vypadl" (páčka je dole nebo uprostřed) a nejde zapnout zpět. Nebo jde zapnout, ale po chvíli znovu vypadne.'
    },
    causes: [
      'Přetížení obvodu (připojeno příliš mnoho spotřebičů najednou)',
      'Zkrat v obvodu (poškozený kabel, vadný spotřebič)',
      'Vadný jistič (stáří, mechanické poškození)',
      'Vlhkost v krabici nebo rozvaděči',
      'Špatně připojený vodič v rozvaděči (uvolněný kontakt)'
    ],
    whatToDo: {
      title: '🔧 Co dělat hned:',
      steps: [
        '1. Vypněte všechny spotřebiče v daném obvodu (zásuvky, vypínače)',
        '2. Zkuste zapnout jistič zpět (páčka nahoru)',
        '3. Pokud jde zapnout a drží → zapínejte spotřebiče postupně, jeden po druhém',
        '4. Pokud při zapnutí konkrétního spotřebiče jistič vypadne → problém je v tom spotřebiči (odpojte ho)',
        '5. Pokud jistič vypadá i bez spotřebičů → problém je v kabeláži nebo jističi (volejte elektrikáře)'
      ]
    },
    whenToCall: {
      title: '⚠️ Kdy volat elektrikáře:',
      signs: [
        'Jistič vypadá i při vypnutých spotřebičích',
        'Jistič nejde zapnout zpět (zablokovaný)',
        'Jistič je horký na dotek',
        'Vidíte stopy spáleniny na jističi nebo v rozvaděči',
        'Cítíte zápach spáleniny',
        'Nevíte, který obvod jistič ovládá (není označený)'
      ]
    },
    prevention: {
      title: '💡 Jak předejít vypadávání jističe:',
      tips: [
        'Nekombinujte výkonné spotřebiče na jednom obvodu (např. rychlovarná konvice + mikrovlnka + topení)',
        'Používejte spotřebiče s příkonem max. 3 500 W na jeden obvod (běžná zásuvka)',
        'Kontrolujte stav kabeláže (prasklá izolace, uvolněné zásuvky)',
        'Při rekonstrukci nebo přidávání nových spotřebičů konzultujte s elektrikářem (možná je potřeba nový obvod)',
        'Nechte si udělat revizi elektro (odhalí skryté závady)'
      ]
    },
    faq: [
      {
        question: 'Můžu si vyměnit jistič sám?',
        answer: 'Ne. Práce na rozvaděči smí provádět pouze elektrikář s oprávněním dle NV 194/2022. Hrozí úraz i zkrat.'
      },
      {
        question: 'Můžu místo jističe použít silnější?',
        answer: 'Ne! Jistič chrání kabeláž před přehřátím. Pokud použijete silnější jistič než je průřez kabelu, hrozí požár. Správný průřez kabelu = správný jistič (např. 1,5 mm² = max. 10 A).'
      },
      {
        question: 'Jak poznám, který jistič je pro jaký obvod?',
        answer: 'V rozvaděči by měly být jističe označené (kuchyň, obývák, koupelna...). Pokud nejsou, můžete si to zjistit vypínáním jističů jeden po druhém a kontrolou, co přestalo fungovat. Doporučuji označit si to fixou přímo na rozvaděči.'
      },
      {
        question: 'Jak rychle může elektrikář problém vyřešit?',
        answer: 'Záleží na příčině. Pokud je problém v jističi nebo kabeláži v rozvaděči, typicky 30–60 minut. Pokud je potřeba hledat zkrat v obvodu, tak déle (1–3 hodiny).'
      }
    ]
  },
  {
    id: 'nejde-zasuvka',
    slug: 'nejde-zasuvka',
    title: 'Nefunguje zásuvka – příčiny a řešení',
    metaTitle: 'Nefunguje zásuvka – co dělat? | Poradna elektrikáře Praha',
    metaDescription: 'Nefunguje zásuvka? Příčiny, diagnostika, kdy volat elektrikáře. Poradna – Jaroslav Soukup, elektrikář Praha.',
    h1: 'Nefunguje zásuvka – příčiny a co s tím',
    category: 'Poruchy',
    intro: 'Nefunkční zásuvka je častý problém, který může mít jednoduchou příčinu (vypadlý jistič) i složitější (zkrat v krabici). Pojďme si projít, jak problém diagnostikovat.',
    problem: {
      title: 'Co se děje?',
      description: 'Zásuvka nereaguje – spotřebič se nerozsvítí, telefon se nenabíjí. Ostatní zásuvky v místnosti mohou fungovat nebo také ne.'
    },
    causes: [
      'Vypadl jistič v rozvaděči',
      'Uvolněný vodič v zásuvce (špatný kontakt)',
      'Spálené kontakty v zásuvce',
      'Prasklá vložka zásuvky',
      'Zkrat v krabici',
      'Vadné vedení (prasklý kabel ve stěně)'
    ],
    whatToDo: {
      title: '🔧 Co dělat hned:',
      steps: [
        '1. Zkontrolujte rozvaděč – nevypadl jistič?',
        '2. Zkuste jiný spotřebič v té samé zásuvce (ověříte, zda je problém v zásuvce nebo spotřebiči)',
        '3. Zkuste jiné zásuvky v místnosti (zjistíte, zda nefunguje jen jedna nebo celý obvod)',
        '4. Pokud nefunguje celý obvod a jistič nevypadl → zavolejte elektrikáře',
        '5. Pokud nefunguje jen jedna zásuvka → pravděpodobně problém v zásuvce (uvolněný vodič, spálené kontakty)'
      ]
    },
    whenToCall: {
      title: '⚠️ Kdy volat elektrikáře:',
      signs: [
        'Zásuvka vůbec nefunguje (a jistič nevypadl)',
        'Zásuvka je horká na dotek',
        'Zásuvka jiskří při zapojování vidlice',
        'Cítíte zápach spáleniny',
        'Zásuvka je uvolněná (vypadává ze stěny)',
        'Dotyk na zásuvku „štípe" (chybějící uzemnění)'
      ]
    },
    prevention: {
      title: '💡 Jak předejít problémům se zásuvkami:',
      tips: [
        'Netahejte za kabel při vytahování vidlice (tahejte za vidlici)',
        'Nekombinujte výkonné spotřebiče na jedné zásuvce (rozbočovač)',
        'Kontrolujte stav zásuvek (uvolněné, horké, prasklé → vyměnit)',
        'Pokud zásuvka jiskří → ihned vypnout jistič a volat elektrikáře',
        'Při rekonstrukci použijte kvalitní zásuvky (ABB, Schneider, Legrand)'
      ]
    },
    faq: [
      {
        question: 'Můžu si opravit zásuvku sám?',
        answer: 'Dle NV 194/2022 musí práce na elektroinstalaci provádět osoba s oprávněním (elektrikář). Navíc je to rizikové – hrozí zkrat nebo úraz.'
      },
      {
        question: 'Jak dlouho oprava trvá?',
        answer: 'Výměna nebo oprava zásuvky typicky 15–30 minut. Pokud je potřeba táhnout nový kabel, tak déle.'
      },
      {
        question: 'Kolik stojí oprava zásuvky?',
        answer: 'Oprava kontaktu zásuvky: 600–900 Kč. Výměna zásuvky: 800–1 200 Kč. Cena zahrnuje materiál a práci.'
      }
    ]
  },
  {
    id: 'chranic-vypadava',
    slug: 'proudovy-chranic-vypadava',
    title: 'Proudový chránič vypadává – příčiny',
    metaTitle: 'Vypadává proudový chránič (RCD) – příčiny a řešení | Poradna',
    metaDescription: 'Proč vypadává proudový chránič (RCD)? Příčiny, diagnostika, kdy volat elektrikáře. Poradna elektrikáře Praha.',
    h1: 'Proudový chránič vypadává – proč a co s tím',
    category: 'Poruchy',
    intro: 'Proudový chránič (RCD) chrání před úrazem elektrickým proudem. Pokud vypadává, signalizuje to únik proudu – buď v kabeláži, nebo v některém spotřebiči. Pojďme si projít, jak problém najít.',
    problem: {
      title: 'Co se děje?',
      description: 'Proudový chránič (tlačítko TEST v rozvaděči) vypadl a nejde zapnout zpět. Nebo se dá zapnout, ale po chvíli znovu vypadne.'
    },
    causes: [
      'Vadný spotřebič (únik proudu do kostry)',
      'Vlhkost v kabeláži nebo zásuvce (zejména koupelna, sklep)',
      'Poškozená izolace kabelu (stáří, hlodavci)',
      'Vadný RCD chránič (stáří, mechanické poškození)',
      'Špatně připojený vodič v rozvaděči'
    ],
    whatToDo: {
      title: '🔧 Co dělat hned:',
      steps: [
        '1. Vypněte všechny spotřebiče (zejména v koupelně, kuchyni)',
        '2. Zkuste zapnout RCD zpět',
        '3. Pokud jde zapnout a drží → zapínejte spotřebiče postupně, jeden po druhém',
        '4. Pokud při zapnutí konkrétního spotřebiče RCD vypadne → problém je v tom spotřebiči (pračka, bojler, myčka)',
        '5. Pokud RCD vypadá i bez spotřebičů → problém je v kabeláži (volejte elektrikáře)'
      ]
    },
    whenToCall: {
      title: '⚠️ Kdy volat elektrikáře:',
      signs: [
        'RCD vypadá i při vypnutých spotřebičích',
        'RCD nejde zapnout zpět (zablokovaný)',
        'RCD je horký na dotek',
        'Vidíte stopy vlhkosti v rozvaděči',
        'Cítíte zápach spáleniny',
        'RCD vypadává jen v určitou dobu (např. v noci – mohlo by jít o bojler)'
      ]
    },
    prevention: {
      title: '💡 Jak předejít vypadávání RCD:',
      tips: [
        'Kontrolujte stav spotřebičů (pračka, myčka, bojler) – zejména těch ve vlhkém prostředí',
        'Nekombinujte výkonné spotřebiče s poškozenou izolací',
        'Při rekonstrukci kontrolujte stav kabeláže (vlhkost, poškození)',
        'Nechte si udělat revizi elektro (měření izolace odhalí skryté závady)',
        'Testujte RCD každých 6 měsíců (tlačítko TEST v rozvaděči – musí vypadnout)'
      ]
    },
    faq: [
      {
        question: 'Co je to proudový chránič (RCD)?',
        answer: 'Jistič, který chrání před úrazem elektrickým proudem. Reaguje na „unikající proud" (např. při dotyku na vadný spotřebič). Podle NV 194/2022 je povinný.'
      },
      {
        question: 'Můžu RCD přemostit nebo vypnout?',
        answer: 'Ne! RCD chrání před úrazem (může zachránit život). Pokud vypadává, je to signál problému – je potřeba najít příčinu, ne chránič vypnout.'
      },
      {
        question: 'Jak rychle může elektrikář problém vyřešit?',
        answer: 'Záleží na příčině. Pokud je problém v jednom spotřebiči, diagnostika trvá 30–60 minut. Pokud je potřeba měřit celý obvod, tak déle (1–3 hodiny).'
      }
    ]
  },
  {
    id: 'zapach-spaleniny',
    slug: 'zapach-spaleniny-zasuvka',
    title: 'Zápach spáleniny u zásuvky – co dělat',
    metaTitle: 'Zápach spáleniny u zásuvky – první pomoc | Poradna elektrikáře',
    metaDescription: 'Cítíte zápach spáleniny u zásuvky nebo rozvaděče? Co dělat okamžitě, kdy volat elektrikáře. Poradna – Praha.',
    h1: 'Zápach spáleniny u zásuvky nebo rozvaděče – okamžitá reakce',
    category: 'Bezpečnost',
    intro: 'Zápach spáleniny v blízkosti zásuvky, vypínače nebo rozvaděče je vážným varováním – může jít o tající izolaci, zkrat nebo přehřátý kontakt. V tomto článku se dozvíte, jak reagovat.',
    problem: {
      title: 'Co se děje?',
      description: 'Cítíte charakteristický zápach tající plastové izolace – může připomínat spálenou gumu nebo plastovou hračku. Zápach může být v místnosti se zásuvkou, rozvaděčem nebo v okolí spotřebiče.'
    },
    causes: [
      'Přehřátý kontakt (uvolněný vodič v zásuvce nebo rozvaděči)',
      'Zkrat (poškozená izolace, dotyk vodičů)',
      'Přetížený obvod (příliš mnoho spotřebičů)',
      'Vadný spotřebič (zkrat uvnitř)',
      'Špatně připojený kabel (špatná montáž, nekvalitní práce)'
    ],
    whatToDo: {
      title: '🚨 Co dělat OKAMŽITĚ:',
      steps: [
        '1. VYPNĚTE hlavní jistič v rozvaděči (úplně odpojte elektřinu)',
        '2. Pokud vidíte kouř nebo plamínky → evakuujte a volejte hasiče (150)',
        '3. Pokud je „jen" zápach → nechte místnost vyvětrat, NIC NEZAPÍNEJTE',
        '4. Zkontrolujte rozvaděč – hledejte stopy spáleniny (černé skvrny, roztavený plast)',
        '5. ZAVOLEJTE ELEKTRIKÁŘE – neřešte to sami, hrozí požár nebo úraz',
        '6. Do příjezdu elektrikáře nechte elektřinu vypnutou (pokud je to možné)'
      ]
    },
    whenToCall: {
      title: '⚠️ VOLAT ELEKTRIKÁŘE HNED:',
      signs: [
        'Jakýkoliv zápach spáleniny u elektroinstalace',
        'Horká zásuvka, vypínač nebo rozvaděč',
        'Viditelné stopy spáleniny (černé skvrny, roztavený plast)',
        'Kouř nebo plamínky',
        'Jiskření ze zásuvky nebo rozvaděče'
      ]
    },
    prevention: {
      title: '💡 Jak předejít přehřátí a požáru:',
      tips: [
        'Nekombinujte výkonné spotřebiče na jednom rozbočovači',
        'Kontrolujte stav zásuvek (horké, uvolněné → vyměnit)',
        'Při rekonstrukci použijte kvalitní materiál a elektrikáře',
        'Nechte si udělat revizi elektro (odhalí přehřáté kontakty termokamerou)',
        'Instalujte přepěťovou ochranu (chrání před zkratem při bouřce)'
      ]
    },
    faq: [
      {
        question: 'Můžu to ignorovat, když už zápach vymizel?',
        answer: 'Ne! Zápach spáleniny signalizuje, že došlo k přehřátí nebo zkratu. Problém se může opakovat a způsobit požár. Vždy nechte zkontrolovat elektrikářem.'
      },
      {
        question: 'Můžu si zkontrolovat rozvaděč sám?',
        answer: 'Můžete se PODÍVAT (nevypínat jističe, nedotýkat se vodičů!), jestli nevidíte stopy spáleniny. Ale kontrolu a opravu nechte na elektrikáři.'
      },
      {
        question: 'Jak rychle může elektrikář přijet?',
        answer: 'U havárie (jiskry, kouř, zápach) upřednostňuji výjezd – typicky do 60 minut v Praze.'
      }
    ]
  },
  {
    id: 'revize-kdy',
    slug: 'revize-elektro-kdy-je-potreba',
    title: 'Revize elektro – kdy je potřeba?',
    metaTitle: 'Kdy je potřeba revize elektro? | Poradna elektrikáře Praha',
    metaDescription: 'Kdy musíte mít revizi elektroinstalace? Legislativa, povinnosti, interval revizí. Poradna – Jaroslav Soukup, elektrikář Praha.',
    h1: 'Kdy je potřeba revize elektroinstalace?',
    category: 'Revize',
    intro: 'Revize elektroinstalace není jen formalita – odhalí skryté závady, které mohou ohrozit vaše zdraví nebo majetek. V tomto článku se dozvíte, kdy je revize povinná a kdy ji doporučuji.',
    problem: {
      title: 'Co je to revize elektro?',
      description: 'Revize je periodická kontrola stavu elektroinstalace (měření, prohlídka, protokol). Provádí ji elektrikář s oprávněním dle NV 194/2022.'
    },
    causes: [
      'Legislativní povinnost (NV 194/2022)',
      'Požadavek pojišťovny (podmínka pojištění nemovitosti)',
      'Požadavek banky (hypotéka)',
      'Součást dokumentace při prodeji nemovitosti',
      'Bezpečnost (odhalení skrytých závad)'
    ],
    whatToDo: {
      title: '📋 Kdy je revize POVINNÁ:',
      steps: [
        '1. Po dokončení nové elektroinstalace (rekonstrukce, novostavba)',
        '2. Periodicky – každých 5 let u obytných budov (byty, RD)',
        '3. Každé 2–3 roky u firem a provozoven',
        '4. Každoročně u objektů se zvláštním režimem (zdravotnictví, wellness)',
        '5. Po havárii (požár, zatopení rozvaděče)',
        '6. Při prodeji nemovitosti (součást dokumentace)',
        '7. Na požádání pojišťovny nebo banky (hypotéka)'
      ]
    },
    whenToCall: {
      title: '✅ Kdy je VHODNÉ udělat revizi (i když není povinná):',
      signs: [
        'Kupujete starší byt nebo dům (chcete znát stav elektro)',
        'Plánujete rekonstrukci (revize odhalí, co je potřeba vyměnit)',
        'Často vám vypadává proud (revize najde příčinu)',
        'Máte starou instalaci (hliníkové vodiče, pojistky)',
        'Chcete se ujistit, že je elektro bezpečné (máte malé děti)'
      ]
    },
    prevention: {
      title: '💡 Co odhalí revize elektro:',
      tips: [
        'Závady kategorie A – bezprostřední nebezpečí (vypnout hned)',
        'Závady kategorie B – závady k odstranění (opravit do 6 měsíců)',
        'Závady kategorie C – doporučení (není nutné hned řešit)',
        'Příklady závad: uvolněné zásuvky, chybějící RCD, hliníkové vodiče, přetížený rozvaděč, chybějící uzemnění'
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
        question: 'Kolik stojí revize?',
        answer: 'Revize bytu 2+kk: od 1 800 Kč. Revize RD do 150 m²: od 3 500 Kč. Cena zahrnuje měření, protokol a konzultaci.'
      }
    ]
  }
];
