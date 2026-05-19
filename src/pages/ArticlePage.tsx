import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Clock, Calendar, MapPin, ExternalLink, X, Route, Mountain, Clock3, TrendingUp } from "lucide-react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { getArticleBySlug } from "../data/articles"
import { formatDate } from "../lib/utils"

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

  const renderContent = (content: string) => {
    const sections = content.split("## ")
    return sections.map((section, index) => {
      if (index === 0) return null
      
      const [title, ...bodyParts] = section.split("\n")
      const body = bodyParts.join("\n")
      
      const paragraphs = body.split("\n\n").filter(p => p.trim())
      
      return (
        <section key={index} className="mb-10">
          <h2 className="font-heading text-2xl text-charcoal mb-4 pb-2 border-b border-fog">{title}</h2>
          <div className="space-y-4">
            {paragraphs.map((para, pIndex) => {
              if (para.startsWith("### ")) {
                return (
                  <h3 key={pIndex} className="font-heading text-xl text-charcoal mt-6 mb-3">
                    {para.replace("### ", "")}
                  </h3>
                )
              }
              if (para.startsWith("- ")) {
                const items = para.split("\n").filter(p => p.startsWith("- "))
                return (
                  <ul key={pIndex} className="list-disc list-inside space-y-2 text-charcoal/80 ml-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={pIndex} className="text-charcoal/80 leading-relaxed">{para}</p>
              )
            })}
          </div>
        </section>
      )
    })
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
            {article.trail && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-3xl mx-auto mb-12 p-6 bg-fog rounded-none border-l-4 border-moss"
              >
                <h3 className="font-heading text-lg text-charcoal mb-4 flex items-center gap-2">
                  <Route className="w-5 h-5 text-moss" />
                  Informații Traseu
                </h3>
                <p className="font-medium text-charcoal mb-4">{article.trail.name}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-stone-light" />
                    <span className="text-charcoal">{article.trail.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-stone-light" />
                    <span className="text-charcoal">{article.trail.elevation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock3 className="w-4 h-4 text-stone-light" />
                    <span className="text-charcoal">{article.trail.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-rust/10 text-rust text-xs">{article.trail.difficulty}</span>
                  </div>
                </div>
                {article.trail.marks && article.trail.marks.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-stone-light/20">
                    <p className="text-xs text-stone-light mb-2">Marcaje:</p>
                    <div className="flex flex-wrap gap-2">
                      {article.trail.marks.map((mark, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-charcoal text-white">{mark}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-stone">
                {renderContent(article.content || "")}
              </div>

              {article.gallery && article.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-16"
                >
                  <h3 className="font-heading text-2xl text-charcoal mb-8 text-center">Galerie Foto</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {article.gallery.slice(0, 12).map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="aspect-square overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                      >
                        <img
                          src={img}
                          alt={`Galerie imagine ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

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

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white p-2"
                onClick={() => setSelectedImage(null)}
                aria-label="Close gallery"
              >
                <X className="w-8 h-8" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Galerie"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}