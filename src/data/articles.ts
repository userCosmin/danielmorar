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
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "prin-zapezile-de-mai-spre-varful-custura-bucurei",
    title: "Prin zăpezile de mai spre Vârful Custura Bucurei",
    summary: "O drumeție de final de primăvară în Munții Retezat, urcând spre Vârful Bucura prin Curmătura Bucurei",
    content: `
O drumeție de final de primăvară în Munții Retezat, urcând spre Vârful Bucura prin Curmătura Bucurei. În ciuda calendarului care arată已经五月，山上仍然覆盖着厚厚的积雪。踏上这条经典路线，从Bucura湖出发，沿着被雪覆盖的小径向上攀登。

随着海拔升高，空气变得更加清新凉爽。周围是绵延起伏的山峰和被雪覆盖的松林。到达Curmătura Bucura山口后，视野豁然开朗，可以看到Retezat山脉壮观的景象。

继续向上，海拔2200米处的积雪更加深厚。每一步都需要仔细选择路线，避开可能隐藏的裂缝。阳光照射在雪地上，反射出耀眼的光芒。

终于到达Vârful Custura Bucurei（海拔2489米），站在山顶可以俯瞰整个Retezat山脉，包括Lacul Buhău和周围的群峰。这是一个难忘的时刻，证明了即使在五月，高山徒步仍然可以带来难忘的体验。`,
    image: "https://muntii-nostri.ro/media/articles/DSC_3897.JPG",
    date: "2026-05-09",
    category: "Povestiri",
    readingTime: 8,
    source: "https://muntii-nostri.ro/article/prin-zapezile-de-mai-spre-varful-custura-bucurei/",
    mountains: ["Munții Retezat"]
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