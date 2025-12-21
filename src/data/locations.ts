// Data pro lokality – service area landing pages

export interface Location {
  id: string;
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroTitle: string;
  heroSubtitle: string;
  area: string; // Praha 1–10 nebo Okolí
  arrivalTime: string;
  parking: string;
  buildingTypes: string[];
  commonIssues: Array<{
    title: string;
    description: string;
  }>;
  caseStudies: Array<{
    title: string;
    location: string;
    problem: string;
    solution: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const pragueDistricts: Location[] = [
  {
    id: 'praha-1',
    slug: 'elektrikar-praha-1',
    name: 'Praha 1',
    metaTitle: 'Elektrikář Praha 1 – Staré Město, Nové Město, Malá Strana',
    metaDescription: 'Elektrikář Praha 1 – výjezd, opravy, revize. Staré Město, Nové Město, Malá Strana. Volejte 777 889 581.',
    h1: 'Elektrikář Praha 1 – výjezd, opravy, revize',
    heroTitle: 'Elektrikář Praha 1',
    heroSubtitle: 'Staré Město, Nové Město, Malá Strana, Josefov',
    area: 'Praha 1',
    arrivalTime: '20–60 minut',
    parking: 'Často omezené (modré zóny), preferuji brzké ráno nebo odpoledne',
    buildingTypes: ['Historické domy', 'Cihlové stavby', 'Přestavěné byty', 'Podkrovní byty', 'Komerční prostory'],
    commonIssues: [
      {
        title: 'Stará elektroinstalace',
        description: 'Hodně domů má původní hliníkové vodiče nebo staré pojistky – nutná rekonstrukce při výměně bytového jádra'
      },
      {
        title: 'Podkrovní byty',
        description: 'Často nedostatečný příkon, nutnost řešit rozvaděč a obvody při rekonstrukci (klimatizace, kuchyně)'
      },
      {
        title: 'Historické objekty',
        description: 'Omezení při rekonstrukci (památková ochrana), nutné šetrné řešení kabeláže (často lišty místo frézování)'
      },
      {
        title: 'Komerční prostory',
        description: 'Kavárny, obchody, kanceláře – časté přidávání obvodů, LED osvětlení, revize'
      },
      {
        title: 'Výpadky chráničů',
        description: 'Vlhkost (půdy, sklepy) = častý problém s RCD'
      }
    ],
    caseStudies: [
      {
        title: 'Rekonstrukce podkrovního bytu',
        location: 'Malá Strana',
        problem: 'Stará instalace s pojistkami, nízký příkon, nutnost přidat obvody pro klimatizaci a kuchyň',
        solution: 'Kompletní výměna rozvaděče, nové obvody (3× 16 A + 1× 25 A pro indukci), LED osvětlení, revize. 5 dní práce.'
      },
      {
        title: 'Havarijní výjezd – vypadl proud',
        location: 'Nové Město, Vodičkova',
        problem: 'Vypadl hlavní jistič, podezření na zkrat v kuchyni',
        solution: 'Zjištěn zkrat v myčce (zaplavený kabel). Odpojení myčky, oprava kabeláže, test. 90 minut.'
      },
      {
        title: 'Revize elektro pro prodej bytu',
        location: 'Staré Město',
        problem: 'Majitel prodával byt, banka požadovala revizní zprávu',
        solution: 'Provedena revize, nalezeno 5 závad kategorie B (uvolněné zásuvky, chybějící RCD). Oprava + revizní zpráva. 1 den.'
      }
    ],
    faq: [
      {
        question: 'Jak rychle přijedete na Prahu 1?',
        answer: 'Typicky 20–60 minut od zavolání, záleží na dopravní situaci a zóně parkování. U havárie (jiskry, kouř) vždy upřednostňuji.'
      },
      {
        question: 'Řešíte i elektro v památkově chráněných domech?',
        answer: 'Ano, ale s ohledem na požadavky památkové péče (často nelze frézovat, řešíme kabeláž v lištách nebo pod podlahou).'
      },
      {
        question: 'Můžete opravit elektro v kavárně nebo obchodě?',
        answer: 'Ano, dělám elektro pro komerční prostory (kavárny, obchody, kanceláře). Revize, opravy, přidání obvodů, LED osvětlení.'
      },
      {
        question: 'Kolik stojí výjezd na Prahu 1?',
        answer: 'Ceny jsou stejné jako pro celou Prahu. Základní výjezd + práce od 1 000 Kč (dle typu zakázky). Parkování v modrých zónách řeším sám.'
      }
    ]
  },
  {
    id: 'praha-4',
    slug: 'elektrikar-praha-4',
    name: 'Praha 4',
    metaTitle: 'Elektrikář Praha 4 – Pankrác, Nusle, Podolí, Braník, Krč',
    metaDescription: 'Elektrikář Praha 4 – výjezd, opravy, revize. Pankrác, Nusle, Podolí, Braník, Krč. Volejte 777 889 581.',
    h1: 'Elektrikář Praha 4 – výjezd, opravy, revize',
    heroTitle: 'Elektrikář Praha 4',
    heroSubtitle: 'Pankrác, Nusle, Podolí, Braník, Krč, Lhotka',
    area: 'Praha 4',
    arrivalTime: '30–90 minut',
    parking: 'Mix (paneláky: obtížné, RD: OK)',
    buildingTypes: ['Paneláky (Pankrác, Krč, Nusle)', 'Rodinné domy (Braník, Podolí)', 'Novostavby (Pankrác City)', 'Vilové čtvrti (Podolí)'],
    commonIssues: [
      {
        title: 'Paneláky – staré Al vodiče',
        description: 'Hodně bytů má původní hliníkovou kabeláž z 70.–80. let – nutná výměna při rekonstrukci'
      },
      {
        title: 'Opakovaně vypadá chránič (RCD)',
        description: 'Časté u panelákových bytů – příčina: vlhkost, stará izolace, vadný spotřebič'
      },
      {
        title: 'Rozvaděč přeplněný',
        description: 'Přidávání spotřebičů (myčka, pračka, indukce) = přetížení původního rozvaděče'
      },
      {
        title: 'Připojení kuchyně',
        description: 'Časté: výměna za indukční desku nebo vestavné spotřebiče – nutnost samostatného obvodu'
      },
      {
        title: 'Revize elektro',
        description: 'Před prodejem bytu nebo při hypotéce – najdu často 3–5 drobných závad (uvolněné zásuvky, chybějící RCD)'
      }
    ],
    caseStudies: [
      {
        title: 'Panelákový byt – výměna rozvaděče',
        location: 'Pankrác',
        problem: 'Starý rozvaděč s pojistkami, chybí RCD, častě vypadává proud při zapnutí myčky',
        solution: 'Výměna rozvaděče (3 obvody + RCD 30 mA), kontrola Al kabeláže, revize. 4 hodiny práce.'
      },
      {
        title: 'Rodinný dům – přidání obvodu',
        location: 'Braník',
        problem: 'Majitel chtěl přidat obvod pro garáž (tepelné čerpadlo na ohřev vody)',
        solution: 'Nový obvod 3× 2,5 mm² z rozvaděče do garáže, jistič 16 A, zásuvka. 2,5 hodiny.'
      },
      {
        title: 'Oprava po zatopení',
        location: 'Krč',
        problem: 'Soused zatopil byt, rozvaděč se zaplavil, vypadl proud',
        solution: 'Vysoušení rozvaděče, kontrola jističů, výměna 2 chráničů (poškozené vodou), test. 3 hodiny.'
      }
    ],
    faq: [
      {
        question: 'Jak rychle přijedete na Prahu 4?',
        answer: 'Typicky 30–90 minut od zavolání, záleží na aktuálním vytížení a lokalitě (Pankrác rychleji, Lhotka déle).'
      },
      {
        question: 'Děláte rekonstrukce v panelácích?',
        answer: 'Ano, často. Výměna rozvaděče, přidání obvodů, připojení kuchyně, revize. Znám specifika panelákových bytů (Al vodiče, společné stoupačky).'
      },
      {
        question: 'Můžete vyřešit problém se společným rozvaděčem v chodbě?',
        answer: 'Pokud jde o váš bytový rozvaděč (za elektroměrem), ano. Pokud o hlavní stoupačku, musíte kontaktovat správu domu (ČEZ Distribuce nebo SVJ).'
      },
      {
        question: 'Kolik stojí výměna rozvaděče v paneláku?',
        answer: 'Typicky 5 000–8 000 Kč (rozvaděč 3 obvody + RCD + práce + revize). Záleží na rozsahu (počet obvodů, Al nebo Cu kabeláž).'
      }
    ]
  },
  {
    id: 'praha-6',
    slug: 'elektrikar-praha-6',
    name: 'Praha 6',
    metaTitle: 'Elektrikář Praha 6 – Dejvice, Vokovice, Bubeneč, Střešovice',
    metaDescription: 'Elektrikář Praha 6 – výjezd, opravy, revize. Dejvice, Vokovice, Bubeneč, Střešovice. Volejte 777 889 581.',
    h1: 'Elektrikář Praha 6 – výjezd, opravy, revize',
    heroTitle: 'Elektrikář Praha 6',
    heroSubtitle: 'Dejvice, Vokovice, Bubeneč, Střešovice, Liboc',
    area: 'Praha 6',
    arrivalTime: '30–90 minut',
    parking: 'Mix (vilové čtvrti: OK, Dejvice: modré zóny)',
    buildingTypes: ['Vilové čtvrti (Hanspaulka, Ořechovka)', 'Bytové domy (Dejvice, Vokovice)', 'Novostavby (Veleslavín)', 'Historické vily (Bubeneč)'],
    commonIssues: [
      {
        title: 'Rekonstrukce vil a RD',
        description: 'Často kompletní výměna elektro (stará instalace, přidání obvodů, smart home, venkovní osvětlení)'
      },
      {
        title: 'Připojení tepelných čerpadel',
        description: 'U RD časté – nutnost samostatného obvodu (3×16 A až 3×32 A)'
      },
      {
        title: 'Venkovní osvětlení',
        description: 'Terasy, zahrady, vjezdy – LED, pohybové senzory'
      },
      {
        title: 'Opravy po bouřce',
        description: 'RD na kopcích (Hanspaulka) – častější riziko přepětí, nutnost přepěťové ochrany'
      },
      {
        title: 'Revize elektro',
        description: 'Pro prodej, hypotéku nebo pojištění vil'
      }
    ],
    caseStudies: [
      {
        title: 'Rekonstrukce elektro ve vile',
        location: 'Hanspaulka',
        problem: 'Kompletní rekonstrukce (150 m²), stará instalace, požadavek na smart home a venkovní osvětlení',
        solution: 'Nová kabeláž, rozvaděč (8 obvodů), LED osvětlení, stmívače, smart vypínače (Shelly), venkovní LED. 3 týdny práce.'
      },
      {
        title: 'Připojení tepelného čerpadla',
        location: 'Střešovice',
        problem: 'Majitel chtěl připojit TČ vzduch-voda (12 kW)',
        solution: 'Nový obvod 3× 4 mm² (25 A), přepěťová ochrana, test. 4 hodiny.'
      },
      {
        title: 'Oprava po bouřce',
        location: 'Ořechovka',
        problem: 'Po bouřce vypadl rozvaděč, přestal fungovat smart home',
        solution: 'Zjištěn zkrat v přepěťové ochraně (poškozená bleskem), výměna, reset smart vypínačů. 2 hodiny.'
      }
    ],
    faq: [
      {
        question: 'Děláte elektro do rodinných domů a vil?',
        answer: 'Ano, to je můj hlavní obor. Rekonstrukce elektro, smart home, venkovní osvětlení, tepelná čerpadla, fotovoltaika (připojení).'
      },
      {
        question: 'Můžete nainstalovat chytrý dům?',
        answer: 'Ano, instaluji smart home (Loxone, KNX, nebo jednoduché Wi-Fi řešení – Shelly, Sonoff). Stmívače, ovládání osvětlení, žaluzií, topení.'
      },
      {
        question: 'Jak dlouho trvá rekonstrukce elektro v RD?',
        answer: 'Záleží na rozsahu. Dům 120–150 m² typicky 3–4 týdny (včetně víkendů). Pokud není bourání, může to být rychlejší (vedení v lištách).'
      },
      {
        question: 'Kolik stojí kompletní rekonstrukce elektro v RD?',
        answer: 'Dům 120–150 m² od 120 000 Kč (kabeláž, rozvaděč, zásuvky, LED osvětlení, revize). Cena závisí na počtu obvodů, smart home, venkovním osvětlení.'
      }
    ]
  },
  {
    id: 'praha-10',
    slug: 'elektrikar-praha-10',
    name: 'Praha 10',
    metaTitle: 'Elektrikář Praha 10 – Vršovice, Strašnice, Malešice, Hostivař',
    metaDescription: 'Elektrikář Praha 10 – výjezd, opravy, revize. Vršovice, Strašnice, Malešice, Hostivař. Volejte 777 889 581.',
    h1: 'Elektrikář Praha 10 – výjezd, opravy, revize',
    heroTitle: 'Elektrikář Praha 10',
    heroSubtitle: 'Vršovice, Strašnice, Malešice, Hostivař, Záběhlice',
    area: 'Praha 10',
    arrivalTime: '30–90 minut',
    parking: 'Mix (paneláky: obtížné, RD: OK)',
    buildingTypes: ['Paneláky (Malešice, Hostivař)', 'Rodinné domy (Strašnice, Záběhlice)', 'Bytové domy (Vršovice)', 'Novostavby (Malešice)'],
    commonIssues: [
      {
        title: 'Paneláky – staré rozvaděče',
        description: 'Hodně bytů má původní rozvaděče s pojistkami – nutná výměna při rekonstrukci nebo revizi'
      },
      {
        title: 'Připojení kuchyně',
        description: 'Časté: výměna za indukční desku nebo vestavné spotřebiče'
      },
      {
        title: 'Revize elektro',
        description: 'Před prodejem bytu nebo při hypotéce'
      },
      {
        title: 'Opravy zásuvek',
        description: 'Časté volání: nefungující zásuvka, uvolněný vypínač'
      },
      {
        title: 'Rozvaděč bez RCD',
        description: 'Starší byty nemají proudový chránič – nutnost doinstalovat (podmínka revize)'
      }
    ],
    caseStudies: [
      {
        title: 'Výměna rozvaděče v paneláku',
        location: 'Malešice',
        problem: 'Starý rozvaděč s pojistkami, chybí RCD, majitel chtěl revizi před prodejem',
        solution: 'Výměna rozvaděče (3 obvody + RCD), kontrola Al kabeláže, revize. Nalezeny 2 drobné závady (uvolněné zásuvky) – opraveno. 5 hodin.'
      },
      {
        title: 'Připojení indukční desky',
        location: 'Vršovice',
        problem: 'Majitelka koupila indukční desku (7 kW), ale měla jen běžnou zásuvku',
        solution: 'Nový obvod z rozvaděče (3× 2,5 mm², jistič 25 A), pevné připojení desky, test. 3 hodiny.'
      },
      {
        title: 'Havarijní výjezd – vypadává chránič',
        location: 'Hostivař',
        problem: 'Opakovaně vypadal RCD, majitel nevěděl proč',
        solution: 'Měřením zjištěn únik proudu v pračce (vlhkost). Odpojení pračky, test obvodu, doporučení servisu pračky. 1,5 hodiny.'
      }
    ],
    faq: [
      {
        question: 'Jak rychle přijedete na Prahu 10?',
        answer: 'Typicky 30–90 minut od zavolání, záleží na lokalitě (Vršovice rychleji, Hostivař déle).'
      },
      {
        question: 'Děláte revize elektro v panelácích?',
        answer: 'Ano, často. Revize bytu včetně opravy závad (uvolněné zásuvky, chybějící RCD, kontrola Al kabeláže). Revizní zpráva do 2 dnů.'
      },
      {
        question: 'Můžete připojit indukční desku v paneláku?',
        answer: 'Ano, pokud je v rozvaděči místo na nový jistič a kabeláž to unese. Často stačí dotáhnout nový kabel z rozvaděče (3× 2,5 mm²).'
      },
      {
        question: 'Kolik stojí výměna rozvaděče?',
        answer: 'V bytě typicky 5 000–8 000 Kč (rozvaděč 3 obvody + RCD + práce + revize). Záleží na rozsahu.'
      }
    ]
  }
];

export const surroundingAreas: Location[] = [
  {
    id: 'cernosice',
    slug: 'elektrikar-cernosice',
    name: 'Černošice',
    metaTitle: 'Elektrikář Černošice – výjezd, opravy, revize | Jaroslav Soukup',
    metaDescription: 'Elektrikář Černošice a okolí – výjezd, opravy, revize. Volejte 777 889 581. Rychlý dojezd z Prahy.',
    h1: 'Elektrikář Černošice – výjezd, opravy, revize',
    heroTitle: 'Elektrikář Černošice',
    heroSubtitle: 'Rychlý výjezd z Prahy – elektro pro rodinné domy a byty',
    area: 'Okolí Prahy (Západní Středočeský kraj)',
    arrivalTime: '40–100 minut',
    parking: 'Dobrá dostupnost',
    buildingTypes: ['Rodinné domy', 'Vilové čtvrti', 'Novostavby', 'Rekreační chalupy'],
    commonIssues: [
      {
        title: 'Rekonstrukce elektro v RD',
        description: 'Často kompletní výměna elektro (staré chalupy, přestavby, přístavby)'
      },
      {
        title: 'Tepelná čerpadla',
        description: 'Připojení TČ vzduch-voda, fotovoltaika'
      },
      {
        title: 'Venkovní osvětlení',
        description: 'Zahrady, terasy, vjezdy, bazény'
      },
      {
        title: 'Přepěťová ochrana',
        description: 'Rodinné domy na kopcích – vyšší riziko bouřky'
      },
      {
        title: 'Revize elektro',
        description: 'Pro prodej, hypotéku, pojištění'
      }
    ],
    caseStudies: [
      {
        title: 'Rekonstrukce elektro v RD',
        location: 'Černošice',
        problem: 'Kompletní rekonstrukce (120 m²), stará instalace, požadavek na smart home',
        solution: 'Nová kabeláž, rozvaděč (6 obvodů), LED osvětlení, stmívače, venkovní LED. 2,5 týdne práce.'
      }
    ],
    faq: [
      {
        question: 'Jezdíte do Černošic?',
        answer: 'Ano, pravidelně. Dojezd typicky 40–100 minut z Prahy (podle vytížení dopravy).'
      },
      {
        question: 'Účtujete příplatek za výjezd mimo Prahu?',
        answer: 'Minimální (cca +300–500 Kč dle vzdálenosti). U větších zakázek (rekonstrukce) bez příplatku.'
      }
    ]
  },
  {
    id: 'ricany',
    slug: 'elektrikar-ricany',
    name: 'Říčany',
    metaTitle: 'Elektrikář Říčany – výjezd, opravy, revize | Jaroslav Soukup',
    metaDescription: 'Elektrikář Říčany a okolí – výjezd, opravy, revize. Volejte 777 889 581.',
    h1: 'Elektrikář Říčany – výjezd, opravy, revize',
    heroTitle: 'Elektrikář Říčany',
    heroSubtitle: 'Elektro pro rodinné domy a byty – rychlý výjezd',
    area: 'Okolí Prahy (Východní Středočeský kraj)',
    arrivalTime: '50–110 minut',
    parking: 'Dobrá dostupnost',
    buildingTypes: ['Rodinné domy', 'Novostavby', 'Bytové domy', 'Rekreační objekty'],
    commonIssues: [
      {
        title: 'Rekonstrukce elektro',
        description: 'Kompletní výměna elektro v RD, chalupy'
      },
      {
        title: 'Tepelná čerpadla a fotovoltaika',
        description: 'Připojení TČ, FV, wallbox (elektromobil)'
      },
      {
        title: 'Venkovní osvětlení',
        description: 'Zahrady, vjezdy, bazény'
      },
      {
        title: 'Revize elektro',
        description: 'Pro prodej, hypotéku'
      },
      {
        title: 'Opravy po bouřce',
        description: 'Přepěťová ochrana, bleskosvody'
      }
    ],
    caseStudies: [],
    faq: [
      {
        question: 'Jezdíte do Říčan?',
        answer: 'Ano. Dojezd typicky 50–110 minut z Prahy.'
      },
      {
        question: 'Účtujete příplatek za výjezd?',
        answer: 'Minimální (cca +500 Kč dle vzdálenosti). U rekonstrukcí bez příplatku.'
      }
    ]
  }
];

export const allLocations = [...pragueDistricts, ...surroundingAreas];
