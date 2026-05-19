import { Link } from "react-router-dom"
import { Mountain, Instagram, Facebook, Youtube, Mail } from "lucide-react"

const footerLinks = {
  explore: [
    { href: "/#latest", label: "Articole" },
    { href: "/#destinations", label: "Destinații" },
    { href: "/#gallery", label: "Galerie" },
  ],
  connect: [
    { href: "#", label: "Contact" },
    { href: "#", label: "Colaborări" },
    { href: "#", label: "Newsletter" },
  ],
}

const socialLinks = [
  {
    href: "https://www.instagram.com/muntii.nostri",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/harta.muntii.nostri",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.youtube.com/@Muntii_Nostri",
    icon: Youtube,
    label: "YouTube",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Mountain className="w-8 h-8 text-fog group-hover:text-moss-light transition-colors" />
              <span className="font-heading text-xl font-semibold tracking-tight">
                Daniel Morar
              </span>
            </Link>
            <p className="text-fog/70 max-w-md mb-6">
              Povești din munții României. Jurnal de drumeție și Aventuri autentice prin cele mai spectaculoase trasee montane.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-fog/20 rounded-full hover:border-moss-light hover:bg-moss-light/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-fog" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Explorează</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-fog/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Conectează-te</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-fog/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="mailto:daniel.morar@example.com"
              className="flex items-center gap-2 mt-6 text-fog/70 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">daniel.morar@example.com</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-fog/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-fog/50 text-sm">
            © {currentYear} Daniel Morar. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6 text-sm text-fog/50">
            <Link to="#" className="hover:text-white transition-colors">
              Termeni
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}