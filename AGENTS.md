# AGENTS.md - Portafolio Web

## Project Overview
- **Type**: Monorepo (npm workspaces)
- **Stack**: React + TypeScript (frontend) / Node.js + Express + MongoDB (backend)
- **Build Tool**: Vite (frontend), TypeScript + tsx (backend)

## Key Commands

### Development
```bash
npm run dev          # Runs frontend (port 3000) + backend (port 5000) concurrently
npm run dev --workspace=frontend   # Frontend only
npm run dev --workspace=backend    # Backend only
```

### Build
```bash
npm run build        # Builds both workspaces (frontend first, then backend)
npm run build --workspace=frontend  # Frontend only (tsc + vite build)
npm run build --workspace=backend   # Backend only (tsc)
```

### Production
```bash
npm start            # Starts backend production server
```

## Project Structure

```
portafolio/
├── frontend/           # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── services/   # API calls
│   │   ├── context/    # React Context (theme)
│   │   └── types/      # TypeScript interfaces
│   └── vite.config.ts
│
├── backend/            # Express + MongoDB + Mongoose
│   ├── src/
│   │   ├── routes/     # API routes
│   │   ├── controllers/ # Business logic
│   │   ├── models/     # Mongoose schemas
│   │   ├── middleware/  # Middlewares
│   │   ├── config/     # Configuration
│   │   └── server.ts   # Entry point
│   └── tsconfig.json
│
└── package.json        # Workspace root
```

## Environment Variables

### Backend (.env)
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 5000)

### Frontend (.env.local)
- `VITE_API_URL` - Backend API URL (default: http://localhost:5000/api)

## TypeScript Configuration
- **Backend**: ES2020 target, strict mode, ESM modules
- **Frontend**: ES2020 target, strict mode, ESMNext modules, React JSX
- Both configs enforce: `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`

## Important Notes

- **TypeScript Strict Mode**: Both frontend and backend have strict TypeScript configuration with `noUnusedLocals` and `noUnusedParameters` enabled
- **ESM Modules**: Both workspaces use `"type": "module"` in package.json
- **Backend Dev Server**: Uses `tsx watch` for hot-reloading during development
- **Frontend Dev Server**: Uses Vite with React plugin

## API Endpoints
- `GET/POST /api/projects` - Projects CRUD
- `GET/POST /api/blog` - Blog posts CRUD
- `POST /api/contact` - Contact form submission
