import express from 'express';
import proyectRouter from './src/api/router/ProyectRouter.js';

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar el router
app.use('/api/projects', proyectRouter);

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
