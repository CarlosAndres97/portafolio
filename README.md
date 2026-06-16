# Portafolio Web - React Frontend + Node/Express Backend

Portafolio web profesional con arquitectura fullstack moderna.

## 🚀 Quick Start

### Requisitos previos
- Node.js 18+ 
- npm o yarn
- MongoDB (cloud o local)

### Instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repo>
cd portafolio
```

2. **Instalar dependencias globales**
```bash
npm install
```

3. **Configurar variables de entorno**

Backend (`.env`):
```bash
cp backend/.env.example backend/.env
# Edita backend/.env con tus credenciales de MongoDB
```

Frontend (`.env.local`):
```bash
echo "VITE_API_URL=http://localhost:5000/api" > frontend/.env.local
```

4. **Instalar dependencias de cada workspace**
```bash
npm install --workspace=frontend
npm install --workspace=backend
```

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📁 Estructura del Proyecto

```
portafolio/
├── frontend/              # Aplicación React
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   ├── pages/        # Páginas de la app
│   │   ├── services/     # API calls
│   │   ├── context/      # React Context (tema)
│   │   └── types/        # TypeScript interfaces
│   ├── public/           # Assets estáticos
│   └── vite.config.ts
│
├── backend/               # Servidor Node/Express
│   ├── src/
│   │   ├── routes/       # Rutas API
│   │   ├── controllers/  # Lógica de negocio
│   │   ├── models/       # Esquemas Mongoose
│   │   ├── middleware/   # Middlewares
│   │   ├── config/       # Configuración
│   │   └── server.ts     # Punto de entrada
│   ├── .env.example
│   └── tsconfig.json
│
└── package.json          # Workspace configuration
```

## 🔌 APIs Disponibles

### Proyectos
- `GET /api/projects` - Obtener todos los proyectos
- `GET /api/projects/:id` - Obtener proyecto por ID
- `POST /api/projects` - Crear nuevo proyecto
- `DELETE /api/projects/:id` - Eliminar proyecto

### Blog
- `GET /api/blog` - Obtener todos los artículos
- `GET /api/blog/:slug` - Obtener artículo por slug
- `POST /api/blog` - Crear nuevo artículo
- `DELETE /api/blog/:id` - Eliminar artículo

### Contacto
- `POST /api/contact` - Enviar mensaje de contacto

## 🎨 Features

✅ Responsive design (mobile-first)
✅ Dark/Light mode
✅ Galería de proyectos
✅ Blog con artículos
✅ Formulario de contacto
✅ Descarga de CV
✅ Integración de redes sociales
✅ SEO friendly
✅ Performance optimizado

## 📦 Stack

**Frontend:**
- React.js + TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Axios
- Framer Motion

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- TypeScript
- CORS

## 🚀 Deployment

### Frontend (Vercel)
1. Push a GitHub
2. Conectar repositorio en Vercel
3. Variables de entorno: `VITE_API_URL`

### Backend (Render)
1. Push a GitHub
2. Crear servicio en Render
3. Variables de entorno: `MONGODB_URI`, `PORT`, etc.

## 📝 TODO

- [ ] Autenticación admin
- [ ] Panel de administración
- [ ] Búsqueda en blog
- [ ] Paginación
- [ ] Email notifications
- [ ] Analytics
- [ ] Sitemap & robots.txt

## 📄 Licencia

MIT

## 👤 Autor

Tu nombre - [LinkedIn](https://linkedin.com) | [GitHub](https://github.com)
