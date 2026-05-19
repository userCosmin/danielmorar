import { Link } from "react-router-dom"
import { Mountain, Mail } from "lucide-react"

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
    label: "Instagram",
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    href: "https://www.facebook.com/harta.muntii.nostri",
    label: "Facebook",
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    href: "https://www.youtube.com/@Muntii_Nostri",
    label: "YouTube",
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
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
                  {social.svg}
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