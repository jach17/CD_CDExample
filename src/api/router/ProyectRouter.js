import { Router } from 'express';
import ProyectController from '../controllers/ProyectController.js';

const router = Router();

router.get('/', ProyectController.getAllProjects);
router.get('/:id', ProyectController.getProjectById);
router.post('/', ProyectController.createProject);
router.put('/:id', ProyectController.updateProject);
router.delete('/:id', ProyectController.deleteProject);

export default router;
