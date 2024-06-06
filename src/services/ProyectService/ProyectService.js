let projects = []; // Esto simula una base de datos en memoria

class ProyectService {
  static getAllProjects() {
    return "Get all proyects";
  }

  static getProjectById(id) {
    const project = projects.find(proj => proj.id === parseInt(id));
    return Promise.resolve(project);
  }

  static createProject(projectData) {
    const newProject = { id: projects.length + 1, ...projectData };
    projects.push(newProject);
    return Promise.resolve(newProject);
  }

  static updateProject(id, projectData) {
    const index = projects.findIndex(proj => proj.id === parseInt(id));
    if (index === -1) {
      return Promise.resolve(null);
    }
    projects[index] = { id: parseInt(id), ...projectData };
    return Promise.resolve(projects[index]);
  }

  static deleteProject(id) {
    const index = projects.findIndex(proj => proj.id === parseInt(id));
    if (index === -1) {
      return Promise.resolve(false);
    }
    projects.splice(index, 1);
    return Promise.resolve(true);
  }
}

export default ProyectService;
