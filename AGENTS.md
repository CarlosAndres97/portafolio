# AGENTS.md - Portafolio Web

## Project Overview
- **Type**: Single workspace (npm workspaces) containing the frontend
- **Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **API**: Vercel serverless function for contact email (nodemailer)
- **Build Tool**: Vite
- **Deployment**: Vercel (recommended) - auto-detects `/api` directory as serverless functions

## Key Commands

### Development
```bash
npm run dev          # Runs Vite dev server on port 3000
npm run dev --workspace=frontend
```

### Build
```bash
npm run build        # TypeScript check + Vite production build
```

### Preview production
```bash
npm run preview      # Vite preview server
```

### Local email testing (Vercel dev)
```bash
npm start            # Runs `vercel dev` (requires Vercel CLI installed globally)
```

## Project Structure

```
portafolio/
├── frontend/                 # Main workspace (the React app + API)
│   ├── api/
│   │   └── send-email.ts     # Vercel serverless function (nodemailer)
│   ├── src/
│   │   ├── components/       # Reusable components (Navbar, Footer, Spinner, ErrorBoundary, ScrollToTop)
│   │   ├── pages/            # Page components (Home, Projects, Blog, About, Contact, NotFound, etc.)
│   │   ├── data/             # Static data (projects, blogPosts, about)
│   │   ├── context/          # React Context (ThemeContext)
│   │   ├── hooks/            # Custom hooks (useTheme)
│   │   └── types/            # TypeScript interfaces (Project, BlogPost)
│   ├── public/               # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── package.json              # Workspace root (delegates to frontend)
```

## Data Model

All content lives in `frontend/src/data/`:
- **`projects.ts`** — array of `Project` (the `_id` field is used in the route `/projects/:id`)
- **`blogPosts.ts`** — array of `BlogPost` (the `slug` field is used in the route `/blog/:slug`)
- **`about.ts`** — `skillCategories` and `experiences` for the About page

## Adding New Content

To add a project or blog post, simply edit the corresponding `.ts` file and add a new object to the array. No build step or backend needed — TypeScript will validate the structure on save.

## Environment Variables

### Production (Vercel Dashboard)
Set these in your Vercel project settings:
- `MAILER_SERVICE` — e.g. `gmail`
- `MAILER_EMAIL` — sender email (e.g. `tu@gmail.com`)
- `MAILER_SECRET_KEY` — app password (NOT regular password; for Gmail, use [App Passwords](https://myaccount.google.com/apppasswords))
- `ADMIN_EMAIL` — recipient email (where contact messages are sent)

### Local Development (`frontend/.env.local`)
Same variables as above. Required only when testing email sending locally with `vercel dev`.

## TypeScript Configuration
- **Target**: ES2020, strict mode, ESNext modules, React JSX
- Enforces: `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`

## API Endpoint
- `POST /api/send-email` — Contact form submission. Validates `name`, `email`, `message`, sends via nodemailer.

## Notes

- The frontend uses **static data arrays** for projects and blog posts. There is no database, no admin panel, no CRUD UI.
- The form submission is the only dynamic backend interaction, handled by a Vercel serverless function.
- Dark/light theme is persisted in `localStorage` and respects `prefers-color-scheme`.
- All routes use React Router v6 with lazy-loaded pages via `React.lazy`.
