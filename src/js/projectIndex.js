import * as el from './elements';

const showProjects = () => {
  const showProjectsDiv = document.createElement('div');
  const projectUl = document.createElement('ul');
  el.projects.forEach((project) => {
    const eachProject = document.createElement('li');
    eachProject.addEventListener('click', () => {
      const projectToDos = el.toDos.filter((toDo) => toDo.project === project);
      const projectToDosDiv = document.createElement('ul');
      projectToDos.forEach((toDo) => {
        const toDoDiv = document.createElement('li');
        toDoDiv.innerHTML = `<p>${toDo.title}</p><p>${toDo.description}</p>`;
        projectToDosDiv.appendChild(toDoDiv);
      });
      el.content.innerHTML = '';
      el.content.appendChild(projectToDosDiv);
    });
    eachProject.textContent = project.title;
    projectUl.appendChild(eachProject);
  });

  projectUl.classList = 'text-center';
  showProjectsDiv.appendChild(projectUl);
  el.content.appendChild(showProjectsDiv);
};

export default showProjects;
