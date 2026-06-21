# Portafolio Web - React + Vercel Serverless

Portafolio web profesional construido con React, TypeScript y Vite. El envío de correos del formulario de contacto se maneja con una Vercel serverless function (nodemailer).

## 🚀 Quick Start

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
git clone <tu-repo>
cd portafolio
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre http://localhost:3000

### Build de producción

```bash
npm run build
npm run preview
```

## 📁 Estructura

```
portafolio/
├── frontend/
│   ├── api/
│   │   └── send-email.ts          # Vercel serverless function
│   ├── src/
│   │   ├── components/           # Componentes reutilizables
│   │   ├── pages/                # Páginas
│   │   ├── data/                 # Datos estáticos (projects, blogPosts, about)
│   │   ├── context/              # ThemeContext
│   │   ├── hooks/                # useTheme
│   │   └── types/                # Interfaces TypeScript
│   ├── public/
│   └── vite.config.ts
└── package.json
```

## ✏️ Agregar contenido

Edita los archivos en `frontend/src/data/`:

- **`projects.ts`** — añade objetos `Project` al array
- **`blogPosts.ts`** — añade objetos `BlogPost` al array
- **`about.ts`** — modifica skills/experiencias

TypeScript validará la estructura automáticamente.

## 📧 Configurar envío de emails

### Producción (Vercel)

En el dashboard de Vercel, configura:

| Variable | Descripción | Ejemplo |
|---|---|---|
| `MAILER_SERVICE` | Servicio SMTP | `gmail` |
| `MAILER_EMAIL` | Email remitente | `tu@gmail.com` |
| `MAILER_SECRET_KEY` | App Password (no tu contraseña) | `xxxx xxxx xxxx xxxx` |
| `ADMIN_EMAIL` | Destinatario de mensajes | `tu@gmail.com` |

Para Gmail: [App Passwords](https://myaccount.google.com/apppasswords)

### Local (con Vercel CLI)

```bash
npm install -g vercel
vercel link
vercel env pull frontend/.env.local
npm start
```

`npm start` ejecuta `vercel dev` que levanta frontend + API en conjunto.

## 🎨 Features

- ✅ Responsive design
- ✅ Dark/Light mode
- ✅ Galería de proyectos con búsqueda y filtros
- ✅ Blog con búsqueda por tags
- ✅ Formulario de contacto funcional
- ✅ Descarga de CV
- ✅ SEO friendly
- ✅ Performance optimizado

## 📦 Stack

- **React 18** + **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router v6**
- **Framer Motion**
- **Nodemailer** (serverless function)

## 🚀 Deploy

### Vercel (recomendado)

1. Push a GitHub
2. Conecta el repositorio en [Vercel](https://vercel.com)
3. Configura el **Root Directory** como `frontend/`
4. Añade las variables de entorno (`MAILER_*`)
5. Deploy

La función `/api/send-email` se detecta automáticamente.

## 📄 Licencia

MIT
