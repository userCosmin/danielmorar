import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check } from "lucide-react"
import { Button } from "../ui/Button"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section className="section-padding bg-moss text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=20')",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            Abonează-te la Aventuri
          </h2>
          <p className="text-white/70 mb-8">
            Primește cele mai recente articole și povești din munți direct în
            inboxul tău. Fără spam, doaraventuri autentice.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email-ul tău"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
              required
            />
            <Button
              type="submit"
              variant="default"
              className="bg-white text-moss hover:bg-fog whitespace-nowrap"
            >
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Abonat!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Abonează-te
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-white/50 mt-4">
            Te poți dezabona oricând. Nu vom partaja email-ul tău.
          </p>
        </motion.div>
      </div>
    </section>
  )
}