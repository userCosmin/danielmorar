import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Clock, Calendar } from "lucide-react"
import { Article } from "../../data/articles"
import { formatDate } from "../../lib/utils"

interface ArticleCardProps {
  article: Article
  index?: number
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <Link to={`/article/${article.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden mb-4">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal/80 backdrop-blur-sm text-xs text-white uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4 text-xs text-stone-light">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(article.date)}
            </span>
            {article.readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readingTime} min
              </span>
            )}
          </div>

          <h3 className="font-heading text-xl text-charcoal group-hover:text-moss transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          <p className="text-sm text-stone-light line-clamp-2">
            {article.summary}
          </p>

          <span className="inline-flex items-center text-sm font-medium text-charcoal group-hover:text-moss transition-colors duration-300">
            Citește mai mult
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
          </span>
        </div>
      </Link>
    </motion.article>
  )
}