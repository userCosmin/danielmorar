import { motion } from "framer-motion"
import { MapPin, Mountain, Calendar, Heart } from "lucide-react"

const stats = [
  { value: "1500+", label: "km parcurși", icon: MapPin },
  { value: "85+", label: "vârfuri atinse", icon: Mountain },
  { value: "15+", label: "ani de drumeție", icon: Calendar },
  { value: "133", label: "articole scrise", icon: Heart },
]

export function AboutExplorer() {
  return (
    <section id="about" className="section-padding bg-fog">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
                alt="Morar Daniel - Hiker"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-cream p-6 shadow-xl max-w-[200px]">
              <p className="font-heading text-3xl text-charcoal">15+</p>
              <p className="text-sm text-stone-light">ani de pasiune</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 bg-moss/10 text-moss text-sm uppercase tracking-wider mb-4">
              Despre Explorer
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Pasiunea pentru munți
            </h2>
            <div className="space-y-4 text-stone-light mb-8">
              <p>
                Numele meu este <strong className="text-charcoal">Morar Daniel</strong> și
                de peste 15 ani explorez Munții României, documentând adventures
                memorabile și descoperind locuri ascunse.
              </p>
              <p>
                Fiecare drumeție este o oportunitate de a reconecta cu natura,
                de a descoperi peisaje spectaculose și de a împărtăși experiențe
                autentice cu cei pasionați de munți.
              </p>
              <p>
                Prin acest jurnal, îmi propun să inspir și pe alții să descopere
                frumusețea României montane, de la crestele Retezatului la
                peșterile Apusenilor.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-stone-light/20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-moss" />
                  <p className="font-heading text-2xl md:text-3xl text-charcoal">
                    {stat.value}
                  </p>
                  <p className="text-xs text-stone-light">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}