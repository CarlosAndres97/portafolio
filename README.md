# Portafolio Web - React + Vite

Portafolio web profesional construido con React, TypeScript y Vite. El formulario de contacto envía emails a través de una Netlify serverless function desplegada externamente.

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
│   ├── data/                 # Datos estáticos (projects, 
├── public/
└── package.json
```

## Formulario de contacto

El formulario en `src/pages/Contact.tsx` hace POST a:

```
https://casg-functions.netlify.app/.netlify/functions/send-email
```

La función está en `netlify/functions/send-email.ts` y se deploya al proyecto Netlify `casg-functions`.



```

## Features

- Responsive design
- Dark/Light mode
- Galería de proyectos con búsqueda y filtros

- Formulario de contacto funcional
- Descarga de CV
- SEO friendly
- Performance optimizado

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Framer Motion

## Licencia

MIT