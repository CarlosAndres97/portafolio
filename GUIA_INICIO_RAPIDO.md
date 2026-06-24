# Guía de Inicio Rápido

## Empezar

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Agregar contenido

Edita los archivos en `src/data/`:

- `projects.ts` — array de proyectos
- `blogPosts.ts` — array de posts
- `about.ts` — `skillCategories` y `experiences`

## Build

```bash
npm run build
npm run preview
```

## Deploy

Tras `npm run build`, sube el contenido de `dist/` a tu hosting estático preferido (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).