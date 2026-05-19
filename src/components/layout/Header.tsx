import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mountain } from "lucide-react"
import { Button } from "../ui/Button"
import { cn } from "../../lib/utils"

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/#destinations", label: "Destinații" },
  { href: "/#latest", label: "Articole" },
  { href: "/#gallery", label: "Galerie" },
  { href: "/#about", label: "Despre" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Mountain
              className={cn(
                "w-8 h-8 transition-colors duration-300",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            />
            <span
              className={cn(
                "font-heading text-xl font-semibold tracking-tight transition-colors duration-300",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            >
              Daniel Morar
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-moss",
                  isScrolled ? "text-charcoal" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              isScrolled ? "text-charcoal" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-cream z-50 md:hidden"
          >
            <div className="container-custom py-6">
              <div className="flex items-center justify-between mb-12">
                <Link to="/" className="flex items-center gap-2">
                  <Mountain className="w-8 h-8 text-charcoal" />
                  <span className="font-heading text-xl font-semibold">
                    Daniel Morar
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="font-heading text-2xl text-charcoal hover:text-moss transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}