import { useTheme } from "../context/ThemeContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect, MouseEvent } from "react";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/projects", label: "Proyectos" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "Sobre mí" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    to: string
  ) => {
    e.preventDefault();
    if (location.pathname === to) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate(to);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-gray-200/20 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="group flex items-center gap-2.5 font-display text-2xl font-extrabold"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white shadow-lg">
                <span className="text-lg font-black">CS</span>
              </div>
            </div>
            <span className="hidden sm:inline gradient-text-static">
              Carlos.dev
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={(e) => handleNavClick(e, item.to)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary-500 rounded-full" />
                  )}
                </Link>
              );
            })}
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-2" />
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contacto
            </Link>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:rotate-12"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom pb-6">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-4 shadow-xl">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={(e) => handleNavClick(e, item.to)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      isActive
                        ? "bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={(e) => handleNavClick(e, "/contact")}
                className="mt-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-xl text-center shadow-lg shadow-primary-500/30"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
