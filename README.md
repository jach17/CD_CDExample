# testMicro

Este es un microservicio básico desarrollado con Node.js y Express. Proporciona una API REST para gestionar proyectos.

## Requisitos

- Node.js (v16 o superior)
- Docker (v20 o superior)

## Estructura del Proyecto

<!-- "my-api"
├── "index.js"
├── "package.json"
├── "package-lock.json"
├── "Dockerfile"
├── ".dockerignore"
├── "src"
│ ├── "api"
│ │ ├── "controller"
│ │ │ └── "ProyectController.js"
│ │ ├── "router"
│ │ │ └── "ProyectRouter.js"
│ └── "services"
│ └── "ProyectService.js"
-->

## Instalación

1. Clona el repositorio:

   ```bash
   "git clone https://github.com/tu-usuario/testMicro.git"
   "cd testMicro"

   ```

2. Instala las dependencias
   "npm install"

## Ejecutar Localmente

Para ejecutar la aplicación localmente, usa el siguiente comando:
"npm run dev"

# Usar Docker

## Construir la Imagen Docker

Para construir la imagen Docker, ejecuta:
"docker build -t my-api ."

## Ejecutar el Contenedor

Para ejecutar el contenedor, usa el siguiente comando:
"docker run -p 3000:3000 my-api"

La aplicación estará disponible en http://localhost:3000.

# Endpoints de la API

GET /api/projects - Obtiene todos los proyectos
GET /api/projects/:id - Obtiene un proyecto por ID
POST /api/projects - Crea un nuevo proyecto
PUT /api/projects/:id - Actualiza un proyecto existente
DELETE /api/projects/:id - Elimina un proyecto
etc
