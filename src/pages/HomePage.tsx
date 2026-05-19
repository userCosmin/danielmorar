import { Helmet } from "react-helmet-async"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { HeroHome } from "../components/sections/HeroHome"
import { LatestAdventures } from "../components/sections/LatestAdventures"
import { FeaturedDestinations } from "../components/sections/FeaturedDestinations"
import { AboutExplorer } from "../components/sections/AboutExplorer"
import { Gallery } from "../components/sections/Gallery"
import { Newsletter } from "../components/sections/Newsletter"

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Daniel Morar | Povești din Munții României</title>
        <meta
          name="description"
          content="Jurnal de drumeție și Aventuri autentice prin Munții României. Descoperă trasee spectaculoase, povești din Retezat, Apuseni și alți munți."
        />
        <meta
          name="keywords"
          content="drumetii Romania, trasee montane, aventuri montane, hiking Romania, Muntii Apuseni, jurnal de calatorie, trasee turistice"
        />
        <meta property="og:title" content="Daniel Morar | Povești din Munții României" />
        <meta
          property="og:description"
          content="Jurnal de drumeție și Aventuri autentice prin Munții României."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
        />
        <meta property="og:locale" content="ro_RO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daniel Morar | Povești din Munții României" />
        <meta
          name="twitter:description"
          content="Jurnal de drumeție și Aventuri autentice prin Munții României."
        />
        <link rel="canonical" href="https://danielmorar.com" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <HeroHome />
          <LatestAdventures />
          <FeaturedDestinations />
          <AboutExplorer />
          <Gallery />
          <Newsletter />
        </main>

        <Footer />
      </div>
    </>
  )
}