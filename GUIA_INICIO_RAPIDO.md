# Guía de Inicio Rápido

## ✅ Estado actual

- ✅ Frontend React 18 + TypeScript + Vite + Tailwind CSS
- ✅ Datos estáticos en `frontend/src/data/` (proyectos, blog, about)
- ✅ Serverless function para envío de emails (`frontend/api/send-email.ts`)
- ✅ Dark/Light mode persistente
- ✅ TypeScript strict mode

## 🚀 Empezar

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## 📧 Probar el formulario localmente

Por defecto, el frontend hace `POST /api/send-email`. Para probarlo localmente necesitas la CLI de Vercel:

```bash
npm install -g vercel
vercel link
vercel env pull frontend/.env.local   # crea .env.local con MAILER_*
npm start                            # ejecuta `vercel dev`
```

`vercel dev` levanta tanto el frontend como la serverless function.

### Configurar Gmail App Password

1. Ve a https://myaccount.google.com/apppasswords
2. Crea una contraseña de aplicación
3. Usa esos valores en tu `.env.local`:
   ```
   MAILER_SERVICE=gmail
   MAILER_EMAIL=tu@gmail.com
   MAILER_SECRET_KEY=xxxx xxxx xxxx xxxx
   ADMIN_EMAIL=tu@gmail.com
   ```

## 📝 Agregar contenido

Edita los archivos en `frontend/src/data/`:

- `projects.ts` — array de proyectos (campos: `_id`, `title`, `description`, `image`, `technologies`, `link?`, `github?`, `createdAt`)
- `blogPosts.ts` — array de posts (campos: `_id`, `title`, `slug`, `content` HTML, `excerpt`, `image`, `tags`, `createdAt`, `updatedAt`)
- `about.ts` — `skillCategories` y `experiences`

## 🚀 Deploy a Vercel

1. Sube a GitHub
2. Conecta el repo en [Vercel](https://vercel.com)
3. **Root Directory**: `frontend/`
4. Variables de entorno: `MAILER_SERVICE`, `MAILER_EMAIL`, `MAILER_SECRET_KEY`, `ADMIN_EMAIL`
5. Deploy

## 🛠️ Solución de problemas

**El formulario no envía emails localmente**
- Instala Vercel CLI: `npm install -g vercel`
- Usa `npm start` (no `npm run dev`) para que la API funcione

**Build falla por TypeScript**
- Revisa que los tipos en `data/*.ts` coincidan con `types/index.ts`

**Puerto 3000 ocupado**
- Vite elegirá otro puerto automáticamente. Mira la consola.
