export interface Article {
  id: string
  slug: string
  title: string
  summary: string
  content?: string
  image: string
  date: string
  category: string
  readingTime?: number
  source: string
  mountains: string[]
  gallery?: string[]
  trail?: {
    name: string
    distance: string
    elevation: string
    duration: string
    difficulty: string
    marks: string[]
  }
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "prin-zapezile-de-mai-spre-varful-custura-bucurei",
    title: "Prin zăpezile de mai spre Vârful Custura Bucurei",
    summary: "O drumeție de final de primăvară în Munții Retezat, urcând spre Vârful Bucura prin Curmătura Bucurei, printre peisaje spectaculoase și amintiri ale Cabanei Gențiana",
    content: `
## Memento – Cabana Gențiana

Un articol a cărui redactare s-a suprapus, din păcate, peste una dintre cele mai triste zile pentru iubitorii Munților Retezat: Cabana Gențiana nu mai este, a fost mistuită de flăcări în noaptea de 8 spre 9 mai. La finalul articolului i-am dedicat câteva gânduri și câteva fotografii adunate de-a lungul anilor, mici fragmente de memorie din locul care a însemnat atât de mult pentru generații de oameni ai muntelui.

## Retezatul la final de primăvară

În luna mai, Retezatul se află în plină tranziție: de la iarna cu nopți lungi și geroase, când mantia albă a zăpezii cobora până la poalele masivului, spre perioada în care zilele se lungesc vizibil, iar limita inferioară a zăpezii urcă tot mai sus, retrăgându-se treptat și rămânând, peste vară, doar în ungherele cele mai adăpostite ale circurilor glaciare.

Luna mai este poate cea mai spectaculoasă pentru contrastele ei: iarnă și primăvară coexistă în același peisaj, de la câmpurile galbene de rapiță de la poalele masivului până la crestele alpine încă acoperite de zăpadă.

## Vârful Bucura (2433 m)

Vârful Bucura (2433 m) se află pe creasta principală a Retezatului, într-o poziție privilegiată, dominând trei mari complexe glaciare.

Spre vest se întinde complexul Gemenele, un sanctuar aproape intangibil al masivului, întrucât se află în Rezervația Științifică Gemenele, cea mai strict protejată zonă din Parcul Național Retezat și una dintre cele mai valoroase rezervații naturale din România.

Spre nord se desfășoară Complexul Pietrele, cu cele două văi glaciare vizibile de aici, Valea Pietrele și Valea Stânișoarei.

Spre sud-est se află Complexul Bucura, recunoscut pentru salba sa de lacuri glaciare.

Vârful Bucura reprezintă, de asemenea, un punct de legătură între trei vârfuri emblematice: Retezat la nord-vest, Judele la sud-vest și Peleaga la vest.

## Despre siguranța traseului ales

În condiții de risc de avalanșă, decizia de a urca pe munte este crucială. Cea mai sigură opțiune rămâne amânarea turei până la stabilizarea zăpezii; alternativ, se poate alege un traseu care minimizează expunerea - pe culmi, muchii sau pante moderate, evitând văile și culoarele de avalanșă.

Traseul prezentat în acest articol nu reprezintă o invitație de a parcurge zone periculoase sau rute care depășesc nivelul de experiență al fiecăruia.

Este bine cunoscut faptul că accesul pe creasta principală a Retezatului, în condiții de iarnă, nu este recomandat prin Curmătura Bucurei; varianta mai sigură de urcare rămâne prin Șaua Custura Bucurei.

### Despre echipamentul necesar în astfel de ture

- **bocanci impermeabili** și îmbrăcăminte tehnică în straturi: haine termice, respirabile și rezistente la vânt și umezeală;
- **colțari** (sau colțari ușori de tură), utili pe pantele înghețate;
- **piolet** și **bețe de trekking**, pentru stabilitate pe terenul înzăpezit;
- **parazăpezi**, care împiedică pătrunderea zăpezii în bocanci;
- **ochelari de soare** și **cremă cu protecție UV**, esențiale în zilele cu reflexii puternice din zăpadă;
- **hartă sau GPS cu traseul descărcat**, pentru orientare;
- **cagulă, mănuși călduroase** și un **termos cu băutură caldă**, binevenite în condițiile de altitudine și vânt.

## Poiana Cârnic – Cabana Gențiana – Curmătura Bucurei – Vârful Bucura

### Caseta tehnică

- **Distanța**: 19 km
- **Diferența de altitudine**: 1480 m
- **Timp**: 9-11 ore pentru dus-întors
- **Marcaje**: Bandă Albastră, Triunghi Albastru, Bandă Roșie
- **Punct de rehidratare**: Cabana Gențiana

### Descrierea traseului

#### Poiana Cârnic – Curba Soacrei, 1 oră

Traseul pornește din parcarea de la Poiana Cârnic, situată la altitudinea de cca 1040 m. Se urmează marcajul Bandă Albastră de pe pietrosul drum forestier care merge spre Cabana Pietrele. După cca 3,3 km se ajunge la bifurcația cu marcajul Triunghi Albastru, cel care duce spre Cabana Gențiana, loc cunoscut sub denumirea de „Curba Soacrei".

#### Curba Soacrei - Cabana Gențiana, 1 oră

Se traversează spre stânga puntea peste repezișurile și bulboanele cristaline ale pârâului Stânișoara, iar după aproximativ 200 m se intersectează marcajul Triunghi Roșu (Cabana Pietrele – Lacul Galeș – Vârful Mare). După circa 25 de minute se ajunge la Cascada Maria Magdalena, aflată la aproximativ 4 km de la Poiana Cârnic (1,2 km de Cabana Gențiana).

Traseul continuă pe potecă, iar după aproximativ 300 m se ajunge la intersecția cu poteca marcată cu Triunghi Galben. Aici se află un indicator turistic care arată direcția și timpul estimat până în Șaua Pelegii (2½–3 ore). Se urmează în continuare marcajul Triunghi Albastru, iar după câteva minute se reîntâlnește marcajul Bandă Albastră, împreună cu un indicator care anunță că mai sunt aproximativ 30 de minute până la Cabana Gențiana.

#### Cabana Gențiana – Lacul Pietrele, 1 oră

De la Cabana Gențiana vom urma în amonte marcajul Bandă Albastră, trecând puntea peste Valea Pietrele, pe la Bordul Tomii și în final vom face un scurt popas la Lacul Pietrele.

#### Lacul Pietrele – Șaua Curmătura Bucurei, 1 oră

Se continuă pe poteca ce ocolește lacul pe partea estică, și urmând direcția generală spre sud, fie luând ca reper stâlpii turistici, fie având ca reper general punctul prin care se dorește urcarea în creastă, în funcție de condițiile stratului de zăpadă și a existenței cornișelor. La baza pantei care conduce spre șa este recomandată montarea colțarilor.

#### Șaua Curmătura Bucurei – Vârful Bucura, 1¼h

Din Curmătura Bucurei, traseul își schimbă direcția spre vest, urmând îndeaproape muchia, dar evitând cornișele formate deasupra abrupturilor nordice. Din dreptul Vârfului Bucura II, direcția se orientează ușor spre sud-vest, până la atingerea cotei maxime a turei, de 2433 m, pe Vârful Bucura.

Vârful Bucura oferă un excelent punct de belvedere în toate direcțiile. Se deschid priveliști spre Munții Godeanu cu Vârful Gugu, spre Vârful Mare, spre Munții Piule și Oslea, spre lacul Știrbu, spre Munții Țarcu-Petreanu, spre Vârful Judele și spre Vârful Retezat.

Întoarcerea se face pe același traseu sau, opțional, în funcție de experiența participanților și de buna cunoaștere a masivului, pe o altă rută.

## Cabana Gențiana

Oare unde se duc cabanele după ce ard? Unde or fi acum vechile cabane de la Mălăiești, Omu, Ciucaș, Bâlea, Suru, Pietrele, Buta sau Gențiana? Ne place să credem că nu dispar cu adevărat, ci se retrag undeva dincolo de crestele văzute, într-un ținut tainic al munților, acolo unde ajung și oamenii care le-au iubit cândva și care au urcat spre ele ani la rând. Poate că există un loc al cabanelor pierdute, unde sobele ard din nou liniștit, ferestrele luminează în noapte, ghidând pașii turiștilor obosiți, iar mesele sunt pline de glasurile celor care au iubit muntele.

Cabana Gențiana, situată la circa 1670 m altitudine pe Valea Pietrele din Retezat, a fost una dintre cele mai iubite cabane alpine din Carpații românești și un important punct de plecare spre Bucura, Peleaga sau Vârful Retezat. Ridicată în apropierea vechilor trasee turistice dezvoltate încă din perioada interbelică, cabana și-a păstrat mult timp caracterul rustic și atmosfera autentică a turismului montan de altădată, fiind preferată de generații de drumeți și alpiniști.

În mai 2026, Cabana Gențiana a fost distrusă complet de un incendiu, dispariția ei provocând un puternic impact emoțional în rândul iubitorilor muntelui și fiind percepută ca pierderea unuia dintre simbolurile Retezatului.

## Retezatul – Muntele-școală

Munții Retezat sunt un adevărat munte-școală, poate mai mult decât oricare alt masiv din țară, spunând povestea ghețarilor de odinioară. Potecile lor păstrează amintirea pașilor unor mari geografi, precum Emmanuel de Martonne, cel care a descifrat aici vechile „rune" ale acestei istorii glaciare: morenele, blocurile eratice, berbecii glaciari și striurile săpate în stâncă de ghețarii dispăruți.`,
    image: "https://muntii-nostri.ro/media/articles/DSC_3897.JPG",
    date: "2026-05-09",
    category: "Povestiri",
    readingTime: 15,
    source: "https://muntii-nostri.ro/article/prin-zapezile-de-mai-spre-varful-custura-bucurei/",
    mountains: ["Munții Retezat"],
    trail: {
      name: "Poiana Cârnic – Cabana Gențiana – Curmătura Bucurei – Vârful Bucura",
      distance: "19 km",
      elevation: "1480 m",
      duration: "9-11 ore",
      difficulty: "Dificil",
      marks: ["Bandă Albastră", "Triunghi Albastru", "Bandă Roșie"]
    },
    gallery: [
      "https://muntii-nostri.ro/media/ck_uploads/DSC_9302.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3848.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3850.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3350.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_1611.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3088.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4164.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3860.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_2183.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_0173.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3935.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3805.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4216.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4230.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4227.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3808.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3809.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3811.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3813.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3816.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3820.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3829.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3836.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4206.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3851.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3862.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3894.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3941.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3942.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3944.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3958.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3968.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3981.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_3982.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4000.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4006.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4021.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4023.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4031.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4036.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4043.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4062.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4075.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4097.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4103.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4106.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4186-2.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4184_1.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4207.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4208.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4226.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4066.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4158.JPG"
    ]
  },
  {
    id: "2",
    slug: "drumetie-spre-piule-la-granita-dintre-primavara-si-iarna",
    title: "Drumeție spre Piule, la granița dintre primăvară și iarnă",
    summary: "O drumeție de primăvară spre Vârful Piule, printre covoare de brândușe și zăpezile încă persistente",
    content: `
O drumeție de primăvară spre Vârful Piule, printre covoare de brândușe și zăpezile încă persistente. La sfârșitul lunii aprilie, Munții Răscăciunei oferă o priveliște deosebită - unde florile de primăvară întâlnesc ultimele urme ale iernii.

Traseul începe din satul Rășinar, urcând printr-o pădure de fag și brad. Pe măsură ce urcăm, brândușele (Crocus reticulatus) apar în tot mai multe grupuri, colorând versanții în violet și albastru.

La aproximativ 1800m, zăpada devine prezentă constant. Ultimele săptămâni au adus ninsori în zona alpină, așa că poteca este parțial acoperită. Este o experiență unică - să vezi cum primăvara și iarna se întâlnesc în același peisaj.

Vârful Piule (2021m) oferă o panoramă extraordinară spre Munții Godeanu și spre creasta principală a Răscăciunei. Contrastul dintre albastrul cerului, albul zăpezii și violetul florilor creează o imagine de neuitat.`,
    image: "https://muntii-nostri.ro/media/articles/DSC_3201.JPG",
    date: "2026-04-30",
    category: "Recomandări",
    readingTime: 6,
    source: "https://muntii-nostri.ro/article/drumetie-spre-piule-la-granita-dintre-primavara-si/",
    mountains: ["Munții Răscăciunei"]
  },
  {
    id: "3",
    slug: "la-pas-spre-piatra-cetii-si-cheile-intregalde",
    title: "La pas spre Piatra Cetii și Cheile Întregalde",
    summary: "O drumeție peste Piatra Cetii și plaiurile carstice ale Trascăului, încheiată cu o panoramă spectaculoasă asupra Cheilor Întregalde",
    content: `
O drumeție peste Piatra Cetii și plaiurile carstice ale Trascăului, încheiată cu o panoramă spectaculoasă asupra Cheilor Întregalde. Munții Trascăului oferă una dintre cele mai spectaculoase trasee din Apuseni.

Dimineața devreme, pornim din satul Întregalde. Prima parte a traseului urcă printr-o pădure de stejar și carpen, apoi printr-o fâșie de fag. Pe măsură ce ne apropiem de Piatra Cetii, vegetația devine mai sparță, expunând roca calcaroasă caracteristică.

Piatra Cetății (1234m) este un masiv calcaros impresionant, cu pereți verticali și vârfuri ascuțite. Creasta oferă priveliști spectaculoase spre toate direcțiile. În această zi de primăvară, norii joși crează o atmosferă dramatică.

Din vârf, coborâm spre Cheile Întregalde. Aceasta este una dintre cele mai spectaculoase chei din România - o defileu de 3 km cu pereți de piatră care ating 200-300m înălțime. La final, o panoramă extraordinară răsfață privirea.`,
    image: "https://muntii-nostri.ro/media/articles/DSC_5622.JPG",
    date: "2026-04-10",
    category: "Recomandări",
    readingTime: 7,
    source: "https://muntii-nostri.ro/article/la-pas-spre-piatra-cetii-si-cheile-intregalde/",
    mountains: ["Munții Trascăului", "Cheile Întregalde"]
  }
]

export const getLatestArticles = (count: number = 3): Article[] => {
  return [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, count)
}

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug)
}