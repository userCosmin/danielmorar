import { motion } from "framer-motion"
import { destinations } from "../../data/destinations"
import { MapPin } from "lucide-react"

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="section-padding bg-charcoal text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1 bg-moss/20 text-moss-light text-sm uppercase tracking-wider mb-4">
            Destinații Recomandate
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            Explorează Munții României
          </h2>
          <p className="text-fog/60 max-w-2xl mx-auto">
            Descoperă cele mai spectaculoase regiuni montane, fiecare cu
            peisaje și trasee unice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex items-center gap-1 text-xs text-moss-light uppercase tracking-wider mb-2">
                  <MapPin className="w-3 h-3" />
                  {destination.region}
                </span>
                <h3 className="font-heading text-2xl mb-2 group-hover:text-moss-light transition-colors">
                  {destination.name}
                </h3>
                <p className="text-fog/70 text-sm line-clamp-2">
                  {destination.description}
                </p>
                <span className="inline-block mt-3 text-xs text-fog/50">
                  {destination.articleCount} articole
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}