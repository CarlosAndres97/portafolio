import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-20 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Desarrollador web apasionado por crear soluciones innovadoras.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-600 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-primary-600 transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-600 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover:text-primary-600 transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} Mi Portafolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
