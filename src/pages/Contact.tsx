import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { EMAIL, MAILTO_HREF } from "../utils/contact";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: EMAIL,
    href: MAILTO_HREF,
  },
  {
    icon: FiPhone,
    label: "Teléfono",
    value: "+34 123 456 789",
    href: "tel:+34123456789",
  },
  {
    icon: FiMapPin,
    label: "Ubicación",
    value: "Madrid, España",
  },
];

const socials = [
  { icon: FiGithub, href: "https://github.com/CarlosAndres97", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/carlos-andres-soriano-gonzalez-4a17a7249?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(
        "https://casg-functions.netlify.app/.netlify/functions/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      let data: ApiResponse | null = null;
      const text = await response.text();
      if (text) {
        try {
          data = JSON.parse(text) as ApiResponse;
        } catch {
          throw new Error(
            "El servidor respondió con un formato inesperado. Inténtalo de nuevo en unos minutos."
          );
        }
      }

      if (!response.ok) {
        throw new Error(
          data?.error ??
            `Error ${response.status}: no se pudo contactar al servidor.`
        );
      }

      if (!data?.success) {
        throw new Error(data?.error ?? "Error al enviar el mensaje");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      const isNetworkError =
        err instanceof TypeError && err.message.includes("fetch");
      const message =
        err instanceof Error
          ? err.message
          : "Error al enviar el mensaje. Por favor, intenta más tarde.";
      setError(
        isNetworkError
          ? "No se pudo conectar con el servidor. Verifica tu conexión a internet e inténtalo de nuevo."
          : message
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-custom py-32">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="badge mb-4">Contacto</span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Hablemos <span className="gradient-text-static">juntos</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Envíame
          un mensaje y te responderé lo antes posible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="glass-card p-8">
            <h2 className="font-display text-2xl font-bold mb-6">
              Información de contacto
            </h2>
            <div className="space-y-5">
              {contactInfo.map((info) => {
                const Wrapper: keyof JSX.IntrinsicElements = info.href ? "a" : "div";
                return (
                  <Wrapper
                    key={info.label}
                    {...(info.href
                      ? { href: info.href }
                      : {})}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800/50 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                      <info.icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {info.label}
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="font-display text-lg font-bold mb-4">Sígueme</h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="glass-card p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold mb-6">
              Envíame un mensaje
            </h2>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                  <FiCheck className="text-green-600 dark:text-green-400" />
                </div>
                <p className="text-green-700 dark:text-green-400 text-sm">
                  ¡Mensaje enviado exitosamente! Te responderé pronto.
                </p>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center flex-shrink-0">
                  <FiAlertCircle className="text-red-600 dark:text-red-400" />
                </div>
                <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : ""
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : ""
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`input-field resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : ""
                  }`}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
                <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                  {formData.message.length} caracteres
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <FiSend />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
