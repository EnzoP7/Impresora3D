import { motion } from 'framer-motion';
import { Printer, Instagram, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const footerLinks = [
  {
    title: 'Servicios',
    links: ['Impresión FDM', 'Impresión Resina', 'Diseño 3D', 'Prototipado'],
  },
  {
    title: 'Empresa',
    links: ['Nosotros', 'Blog', 'Contacto', 'FAQ'],
  },
  {
    title: 'Legal',
    links: ['Privacidad', 'Términos', 'Cookies'],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4 md:px-8">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#hero"
              className="flex items-center gap-2 text-white font-bold text-xl mb-6 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Printer className="w-6 h-6" />
              </div>
              <span>
                Print<span className="text-accent">3D</span>
              </span>
            </motion.a>
            <p className="text-white/50 mb-6 max-w-sm leading-relaxed">
              Transformamos tus ideas en realidad con tecnología de impresión 3D de última
              generación. Calidad, precisión y rapidez garantizada.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hola@print3d.com"
                className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hola@print3d.com</span>
              </a>
              <a
                href="tel:+34612345678"
                className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+34 612 345 678</span>
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Print3D. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
