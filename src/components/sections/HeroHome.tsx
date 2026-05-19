import { motion } from "framer-motion"
import { ArrowDown, Mountain } from "lucide-react"
import { Button } from "../ui/Button"

export function HeroHome() {
  const scrollToContent = () => {
    const latestSection = document.getElementById("latest")
    if (latestSection) {
      latestSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-transparent to-charcoal/20" />

      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
          >
            <Mountain className="w-4 h-4 text-fog" />
            <span className="text-sm text-fog tracking-wide uppercase">
              Jurnal de Drumeție
            </span>
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Povești din munți.
            <br />
            <span className="text-fog/80">Drumuri uitate.</span>
            <br />
            Aventuri autentice.
          </h1>

          <p className="text-lg md:text-xl text-fog/80 max-w-2xl mx-auto mb-10">
            Descoperă trasee spectaculoase prin Munții României. Aventuri
            autentice, peisaje virgine și povești din cele mai frumoase locuri
            ale țării.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContent}
              variant="default"
              size="lg"
              className="bg-white text-charcoal hover:bg-fog"
            >
              Explorează Aventurile
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal"
            >
              Despre Mine
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  )
}