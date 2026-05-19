import { motion } from "framer-motion"
import { getLatestArticles } from "../../data/articles"
import { ArticleCard } from "../cards/ArticleCard"

export function LatestAdventures() {
  const articles = getLatestArticles(3)

  return (
    <section id="latest" className="section-padding bg-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1 bg-moss/10 text-moss text-sm uppercase tracking-wider mb-4">
            Ultimele Aventuri
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            Povești din Drumeție
          </h2>
          <p className="text-stone-light max-w-2xl mx-auto">
            Descoperă cele mai recente aventuri montane, explorări și experiențe
            din Munții României.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://muntii-nostri.ro/user/Morar%20Daniel/?tab=articles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-charcoal font-medium hover:text-moss transition-colors duration-300"
          >
            Vezi toate articolele
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}