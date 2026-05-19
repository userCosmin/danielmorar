import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { getArticleBySlug } from "../data/articles"
import { formatDate } from "../lib/utils"

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-heading text-2xl mb-4">Articol negăsit</h1>
            <Link to="/" className="text-moss hover:underline">
              Înapoi la pagina principală
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Daniel Morar</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.image} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:section" content={article.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 pt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[70vh] min-h-[500px]"
          >
            <div className="absolute inset-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/90" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="container-custom">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Înapoi la articole
                </Link>

                <span className="inline-block px-3 py-1 bg-moss/80 text-white text-xs uppercase tracking-wider mb-4">
                  {article.category}
                </span>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white max-w-4xl mb-6">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.date)}
                  </span>
                  {article.readingTime && (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readingTime} min citire
                    </span>
                  )}
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {article.mountains.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="container-custom py-16 md:py-24"
          >
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-stone">
                {article.content?.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-charcoal leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-stone-light/20">
                <a
                  href={article.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-moss hover:text-moss-light transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Vezi articolul original pe Muntii Nostri
                </a>
              </div>
            </div>
          </motion.article>
        </main>

        <Footer />
      </div>
    </>
  )
}