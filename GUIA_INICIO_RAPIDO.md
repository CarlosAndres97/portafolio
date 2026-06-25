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

## Formulario de contacto

Ya está conectado a `https://casg-functions.netlify.app/.netlify/functions/send-email`. No necesitas levantar ningún backend local.

Para cambiar el destino de los mensajes, modifica la URL en `src/pages/Contact.tsx:103` o redespliega la función.

## Build

```bash
npm run build
npm run preview
```

## Deploy del frontend

Tras `npm run build`, sube el contenido de `dist/` a tu hosting estático preferido (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## Redesplegar la función de email

Si modificas `netlify/functions/send-email.ts`:

```bash
npm install -g netlify-cli
netlify login
netlify link                              # apunta al proyecto casg-functions
netlify deploy --prod --functions=netlify/functions
```

Las variables `MAILER_*` se configuran en Netlify dashboard → Site settings → Environment variables.