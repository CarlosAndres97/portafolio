import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import { useState } from "react";
import { EMAIL, MAILTO_HREF } from "../utils/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative mt-20 bg-gray-50 dark:bg-gray-950 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="container-custom py-16">
       

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 font-display text-xl font-extrabold mb-4"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white shadow-lg">
                <span className="text-sm font-black">CS</span>
              </div>
              <span className="gradient-text-static">Carlos Andres Soriano | Dev</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Desarrollador web full stack apasionado por crear experiencias
              digitales excepcionales.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Inicio" },
                { to: "/projects", label: "Proyectos" },
                { to: "/about", label: "Sobre mí" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <FiArrowUpRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li>Desarrollo Web</li>
              <li>Aplicaciones SPA</li>
              <li>APIs REST</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={MAILTO_HREF}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Contáctame
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Bogotá, Colombia
              </li>
             
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {currentYear} Carlos Soriano. Hecho con{" "}
            <span className="text-red-500">♥</span> y mucho café.
          </p>
          <div className="flex items-center gap-2">
            {[
              { icon: FiGithub, href: "https://github.com/CarlosAndres97", label: "GitHub" },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/carlos-andres-soriano-gonzalez-4a17a7249?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                label: "LinkedIn",
              },
              { icon: FiMail, href: MAILTO_HREF, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-br hover:from-primary-600 hover:to-accent-600 hover:text-white hover:border-transparent hover:scale-110 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
