# Portafolio Web - React + Vite

Portafolio web profesional construido con React, TypeScript y Vite.

## Quick Start

### Requisitos
- Node.js 18+

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

## Estructura

```
portafolio/
├── src/
│   ├── components/           # Componentes reutilizables
│   ├── pages/                # Páginas
│   ├── data/                 # Datos estáticos (projects, blogPosts, about)
│   ├── context/              # ThemeContext
│   ├── hooks/                # useTheme
│   └── types/                # Interfaces TypeScript
├── public/
├── package.json
└── vite.config.ts
```

## Agregar contenido

Edita los archivos en `src/data/`:

- **`projects.ts`** — añade objetos `Project` al array
- **`blogPosts.ts`** — añade objetos `BlogPost` al array
- **`about.ts`** — modifica skills/experiencias

TypeScript validará la estructura automáticamente.

## Features

- Responsive design
- Dark/Light mode
- Galería de proyectos con búsqueda y filtros
- Blog con búsqueda por tags
- Formulario de contacto
- Descarga de CV
- SEO friendly
- Performance optimizado

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Framer Motion

## Deployment

El proyecto genera estáticos en `dist/` tras `npm run build`. Compatible con:

- **Vercel** — `vercel deploy`
- **Netlify** — drag & drop de `dist/` o conecta el repo
- **GitHub Pages** — sube el contenido de `dist/`
- **Cloudflare Pages**

## Licencia

MIT