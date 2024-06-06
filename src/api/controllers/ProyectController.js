import ProyectService from '../../services/ProyectService/ProyectService.js';

class ProyectController {
  static async getAllProjects(req, res) {
    try {
      const projects = await ProyectService.getAllProjects();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getProjectById(req, res) {
    try {
      const project = await ProyectService.getProjectById(req.params.id);
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createProject(req, res) {
    try {
      const project = await ProyectService.createProject(req.body);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateProject(req, res) {
    try {
      const project = await ProyectService.updateProject(req.params.id, req.body);
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteProject(req, res) {
    try {
      const success = await ProyectService.deleteProject(req.params.id);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ProyectController;