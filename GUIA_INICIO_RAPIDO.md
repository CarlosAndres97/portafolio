# Portafolio Web - Guía de Inicio Rápido

## Estado Actual

✅ **Completado:**
- Estructura monorepo configurada
- Frontend React + TypeScript + Vite + Tailwind CSS
- Backend Node.js/Express + MongoDB + TypeScript
- Modelos, controladores, rutas API
- Componentes de interfaz (Navbar, Footer, Pages)
- Sistema de tema oscuro/claro
- Validación TypeScript

⏳ **En Progreso:**
- Instalación de npm packages (se está ejecutando)

## Pasos Siguientes

### 1. Esperar a que npm install se complete
El proceso de instalación está en progreso. Puede tomar 5-10 minutos dependiendo de tu velocidad de internet.

### 2. Iniciar MongoDB
Necesitas tener MongoDB en ejecución:

**Opción A: MongoDB Atlas (Cloud - Recomendado)**
- Ve a https://www.mongodb.com/cloud/atlas
- Crea una cuenta gratuita
- Crea un cluster gratuito
- Obtén la cadena de conexión URI
- Actualiza `backend/.env` con tu URI

**Opción B: MongoDB Local (Requiere instalación)
```bash
# Windows con MongoDB instalado
mongod
```

### 3. Configurar Variables de Entorno

**Backend** (`backend/.env` - ya está creado):
```
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/portafolio?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
JWT_SECRET=tu_secret_key_aqui
```

**Frontend** (`frontend/.env.local` - ya está creado):
```
VITE_API_URL=http://localhost:5000/api
```

### 4. Ejecutar en Desarrollo

Una vez npm install termine:

```bash
# En la raíz del proyecto
npm run dev
```

Esto iniciará simultáneamente:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### 5. Probar la Aplicación

1. Abre http://localhost:3000 en tu navegador
2. Navega por las diferentes secciones:
   - Home / Inicio
   - Projects / Proyectos
   - Blog
   - About / Sobre mí
   - Contact / Contacto

3. Prueba el tema oscuro/claro con el botón en el navbar

### 6. Agregar Datos (Opcional)

Puedes usar Postman o Insomnia para agregar datos a través de las APIs:

```bash
POST http://localhost:5000/api/projects
Content-Type: application/json

{
  "title": "Mi Primer Proyecto",
  "description": "Descripción del proyecto",
  "image": "https://via.placeholder.com/400",
  "technologies": ["React", "Node.js", "MongoDB"],
  "link": "https://demo.example.com",
  "github": "https://github.com/usuario/proyecto"
}
```

## Archivos Importantes

- `frontend/src/App.tsx` - Componente raíz y rutas
- `frontend/src/context/ThemeContext.tsx` - Sistema de tema
- `frontend/src/services/api.ts` - Cliente HTTP Axios
- `backend/src/server.ts` - Servidor Express
- `backend/src/models/` - Esquemas MongoDB
- `backend/src/routes/` - Definición de APIs

## Próximos Pasos (No Inmediatos)

1. **Agregar autenticación admin** para crear/editar contenido
2. **Integrar con servicio de emails** (Nodemailer configurado)
3. **Desplegar en producción**:
   - Frontend → Vercel
   - Backend → Render
   - Dominio personalizado
4. **Agregar blog con más funcionalidades** (búsqueda, filtros)
5. **Configurar analytics**

## Solución de Problemas

**Si npm install sigue fallando:**
1. Elimina todos los `node_modules` y `package-lock.json`
2. Ejecuta: `npm cache clean --force`
3. Vuelve a intentar: `npm install`

**Si MongoDB connection falla:**
1. Verifica que MongoDB esté ejecutándose
2. Revisa tu URI de conexión en `.env`
3. Asegúrate de que tu IP esté en la whitelist (si usas Atlas)

**Puerto ya en uso:**
```bash
# Cambiar puerto backend en backend/.env
PORT=5001

# O matar el proceso que está usando el puerto
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

¡Tu portafolio web está casi listo! 🚀

**¿Preguntas?** Consulta los archivos README.md en las carpetas frontend/ y backend/
