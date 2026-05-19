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
## Traseul Valea Galda – Piatra Cetii – Muntele Plaiului – Modolești

Traseul Valea Galda – Piatra Cetii – Muntele Plaiului – Modolești este unul dintre cele mai spectaculoase și solicitante parcursuri din estul Munților Trascău, combinând urcușuri susținute cu puncte de belvedere impresionante asupra Văii Galda și Cheilor Întregalde. De-a lungul celor aproape 12 kilometri, drumeția traversează culmi împădurite, platouri carstice presărate cu doline și masive calcaroase izolate, având ca punct central masivul Piatra Cetii.

Diferența relativ mare de nivel și porțiunile abrupte recomandă traseul drumeților deja acomodați cu efortul, răsplata fiind panorame largi, zone sălbatice bine conservate și unele dintre cele mai interesante forme carstice din Trascău.

## Valea Galda – Dealul Răicanilor

Punctul de pornire al traseului este pe Valea Galdei, de pe DJ107K (Galda de Jos – Întregalde), la aproximativ 1 km în amonte de Pensiunea Floare de Colț, din Poiana Galdei. Altitudinea de plecare este de circa 450 m, chiar din dreptul unui izvor situat între șosea și cursul Văii Galda.

Urcarea începe abrupt, pe o culme împădurită ce urcă pieptiș către Șaua Doștina (890 m), aflată pe Dealul Răicanilor. Marcajul care însoțește această culme este Banda Roșie, magistrala ce traversează Munții Trascăului pe întreaga lor lungime.

Pe Dealul Răicanilor, Banda Roșie intersectează marcajul Triunghi Roșu, care va fi urmat în continuare peste Piatra Cetii, până la Modolești.

## Dealul Răicanilor – Vârful Piatra Cetii

Din Șaua Doștina, poteca se îndreaptă spre NV, având permanent în față pereții estici ai Pietrei Cetii. Traseul traversează terenurile unei gospodării, apoi începe un urcuș abrupt prin pădure, către Vârful Piatra Cetii.

În partea finală, poteca ajunge în poiana de pe platoul superior al acestui spectaculos masiv. De pe platou poate fi vizitată intrarea în Avenul din Piatra Cetii. Atenție: avenul nu este îngrădit, iar apropierea de deschidere trebuie făcută cu prudență, pentru a evita căderea în gol.

Piatra Cetii constituie un excelent punct de belvedere în toate direcțiile. De aici se deschid priveliști spre Piatra Bulzului, Piatra Craivii, Munții Cindrel, Munții Parâng, Munții Retezat, Masivul Bucegi-Vulcan, Detunata, Vârful Bihor, Muntele Mare, Munții Șureanu și Munții Făgărașului.

## Vârful Piatra Cetii – Cătunul Tecșești

De la intrarea în aven, poteca se îndreaptă spre marginea vestică a platoului, de unde începe o coborâre abruptă prin pădure, până într-o șa din care se deschide perspectiva asupra zonei centrale a satului Tecșești, cu Cheile Rameauțului și partea superioară a Rezervației Scărița Belioara în fundal.

De aici urmează o nouă coborâre abruptă printr-o poiană, apoi continuă prin pădure, pe o pantă moderată, până la singura gospodărie din Tecșești situată la baza Pietrei Cetii.

## Cătunul Tecșești – Muntele Plaiului

Din dreptul gospodăriei, unde ne putem reface rezerva de apă, poteca pornește spre vest pe un drumeag de pământ. Urcă ușor în serpentine printr-o pădure tânără și ajunge la un frumos punct de belvedere situat sub Vârful Gorunu (1.120 m).

Traseul ocolește apoi vârful pe versantul estic, continuă pe cel sudic și străbate un platou carstic, în mare parte despădurit, presărat cu doline, menținând direcția spre vest, către Muntele Plaiului.

Chiar înainte ca poteca să pătrundă din nou în pădurea ce acoperă partea centrală a Muntelui Plaiului, se deschide un spectaculos punct de belvedere asupra Văii Galda, în apropierea Cheilor Întregalde.

## Muntele Plaiului – Modolești

De la punctul de belvedere, poteca traversează pădurea, mai întâi printr-o zonă cu pini, apoi printr-un amestec de foioase și fag, ieșind ulterior într-o succesiune de poieni, unde marcajul devine mai dificil de urmărit.

Acest punct este situat la aproximativ 300 de metri deasupra talvegului râului Galda, la altitudinea de 870 m. De aici pot fi admirate numeroase arcade și grote de pe ambii versanți ai cheii, iar în depărtare, spre est, se disting Piatra Bulzului de la Poiana Galdei și deschiderea văii către Depresiunea Transilvaniei.

După revenirea la poteca principală, traseul continuă spre vest, în direcția unei șuri. De aici începe coborârea prin zone cu vegetație arbustivă și pajiști, până la intersecția DJ107K cu drumul asfaltat Modolești – Dealul Geoagiului.

## Piatra Cetii

Ansamblul calcaros al Pietrei Cetii are o desfășurare aproximativ NE–SV, perpendiculară pe interfluviul principal delimitat de râurile Galda la sud și Cetea la nord. Face parte din banda estică de calcare a Trascăului, alături de Vârful Prisecii, Cheile Mănăstirii și Vârful Pleșii.

Masivul este alcătuit din trei compartimente distincte:

**Piatra Cetii** – sectorul nordic, cu aspect de cupolă calcaroasă și altitudinea maximă de 1.233 m. Versanții vestici și nordici sunt împăduriți, iar spre sud apar stâncării cu vegetație arbustivă; la sud de vârf se află Avenul din Piatra Cetii.

**La Călugări** – creastă calcaroasă îngustă și crenelată, alcătuită din turnuri separate de strungi și hornuri. Versantul estic formează un perete abrupt de peste 150 m, iar cel vestic este parțial împădurit.

**Piatra Înaltă** – un ultim turn calcaros situat în partea sudică a crestei.

## Cheile Întregalde

Cheile Întregalde sunt situate în estul Munților Trascău, pe valea râului Galda, în județul Alba, reprezentând unul dintre cele mai pitorești sectoare calcaroase din această unitate montană. Formate prin adâncirea cursului de apă în calcarele jurasice ale culmii Ciumerna–Bedeleu, ele prezintă un relief spectaculos, cu abrupturi, turnuri stâncoase și versanți puternic fragmentați.

Diferența de nivel dintre fundul văii și culmile învecinate depășește frecvent câteva sute de metri, iar versanții adăpostesc numeroase forme carstice, precum grote, arcade naturale și stâncării ruiniforme.

Substratul calcaros favorizează dezvoltarea unui relief carstic variat, cu doline și suprafețe carstificate, iar vegetația este dominată de păduri de fag și amestecuri de foioase, cu apariții de pin și pajiști xerofile. Cheile adăpostesc o floră calcicolă valoroasă, fiind cunoscute și pentru prezența florii-de-colț la altitudini neobișnuit de joase. Prin relieful abrupt și cadrul natural bine conservat, Cheile Întregalde constituie o arie de interes geomorfologic, peisagistic și botanic deosebit.

## La final

Parcursul dintre Valea Galda și Modolești încheie o drumeție variată, în care Piatra Cetii și Cheile Întregalde oferă reperele cele mai spectaculoase. Alternanța dintre urcușuri susținute, platouri carstice și puncte cu belvederi largi conturează un traseu reprezentativ pentru Trascăul central, unde relieful calcaros și peisajul pastoral se îmbină armonios. Deși nu este un traseu lung, diferența de nivel și porțiunile abrupte îi conferă un caracter energic, răsplătit constant de priveliști ample și de sentimentul de izolare specific culmilor mai puțin umblate.`,
    image: "https://muntii-nostri.ro/media/articles/DSC_5622.JPG",
    date: "2026-04-10",
    category: "Recomandări",
    readingTime: 12,
    source: "https://muntii-nostri.ro/article/la-pas-spre-piatra-cetii-si-cheile-intregalde/",
    mountains: ["Munții Trascăului", "Cheile Întregalde"],
    trail: {
      name: "Valea Galda – Piatra Cetii – Muntele Plaiului – Modolești",
      distance: "11,7 km",
      elevation: "1.180 m",
      duration: "6-7 ore",
      difficulty: "Mediu-Dificil",
      marks: ["Bandă Roșie", "Triunghi Roșu"]
    },
    gallery: [
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5443-1.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_4704.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/10258809_684765228226321_8953054105182230255_o.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5147.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5594.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5599.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5610.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5611.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5617.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5621.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5626.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5629.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5648.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5658.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5664.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5668.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5679.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5685_1.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5690_1.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5697.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5698.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5700.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5703.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5707_2.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5709.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5712.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5713_1.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5715.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5719.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5718.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5720.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5728.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5730.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5733.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5743.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5751.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5753.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5754.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5755.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5756.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5764_2.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5770.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5771.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5775.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5783.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5784.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5792.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5793.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5798.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5802_1.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5804.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5811.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5818.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5820.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5822_jp6I68y.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5824-2_FbLbh7P.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5827_WSie5pq.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5836_zck6ini.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5837.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5846.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5850.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5851.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5853.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5856.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/16A%23_E16prel.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5147_VOiR7wH.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_8604-1.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_0257.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_7412.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/60_vovvIuU.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/62_5akks6a.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/83_v4YEDk2.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5981_V2J22dZ.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/68_dW62hvy.jpg",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5619.JPG",
      "https://muntii-nostri.ro/media/ck_uploads/DSC_5719_shKS3Kb.JPG"
    ]
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