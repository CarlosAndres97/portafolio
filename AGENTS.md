# AGENTS.md - Portafolio Web

## Project Overview
- **Type**: Pure React project (no monorepo, no backend)
- **Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **Contact form**: posts to external Netlify function at `https://casg-functions.netlify.app/.netlify/functions/send-email`
- **Build Tool**: Vite
- **Deployment**: Static hosting (Vercel, Netlify, GitHub Pages, etc.)

## Key Commands

### Development
```bash
npm run dev          # Vite dev server on port 3000
```

### Build
```bash
npm run build        # TypeScript check + Vite production build
```

### Preview production
```bash
npm run preview      # Vite preview server
```

## Project Structure

```
portafolio/
├── src/
│   ├── components/       # Reusable components (Navbar, Footer, Spinner, ErrorBoundary, ScrollToTop)
│   ├── pages/            # Page components (Home, Projects, Blog, About, Contact, NotFound, etc.)
│   ├── data/             # Static data (projects, blogPosts, about)
│   ├── context/          # React Context (ThemeContext)
│   ├── hooks/            # Custom hooks (useTheme)
│   └── types/            # TypeScript interfaces (Project, BlogPost)
├── netlify/
│   └── functions/
│       └── send-email.ts # Serverless function source (CORS-enabled)
├── netlify.toml          # Netlify deploy config for the function
├── public/               # Static assets
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Data Model

All content lives in `src/data/`:
- **`projects.ts`** — array of `Project` (the `_id` field is used in the route `/projects/:id`)
- **`blogPosts.ts`** — array of `BlogPost` (the `slug` field is used in the route `/blog/:slug`)
- **`about.ts`** — `skillCategories` and `experiences` for the About page

## Adding New Content

To add a project or blog post, simply edit the corresponding `.ts` file and add a new object to the array. No build step or backend needed — TypeScript will validate the structure on save.

## Contact Form Integration

The form in `src/pages/Contact.tsx` posts JSON to:

```
https://casg-functions.netlify.app/.netlify/functions/send-email
```

The function lives in `netlify/functions/send-email.ts` of this repo and is deployed to Netlify under the project name `casg-functions`.

### Required Netlify environment variables
- `MAILER_SERVICE` — e.g. `gmail`
- `MAILER_EMAIL` — sender email (must match the SMTP user)
- `MAILER_SECRET_KEY` — app password (NOT regular password; for Gmail use [App Passwords](https://myaccount.google.com/apppasswords))
- `ADMIN_EMAIL` — recipient email (where messages are sent)
- `ALLOWED_ORIGIN` — optional, default `*`. For production, restrict to your portfolio domain.

### Redeploying the function

```bash
npm install -g netlify-cli
netlify login
netlify link               # one-time, points to casg-functions project
netlify deploy --prod --functions=netlify/functions
```

Or push to the linked Git repo (if connected) and Netlify will deploy automatically.

## TypeScript Configuration
- **Target**: ES2020, strict mode, ESNext modules, React JSX
- Enforces: `noImplicitReturns`

## Notes

- The project uses **static data arrays** for projects and blog posts. There is no database, no admin panel, no CRUD UI.
- Dark/light theme is persisted in `localStorage` and respects `prefers-color-scheme`.
- All routes use React Router v6 with lazy-loaded pages via `React.lazy`.