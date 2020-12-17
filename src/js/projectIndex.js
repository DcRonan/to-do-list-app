import * as el from './elements';

const showProject = () => {
  el.projectDiv.innerHTML = el.projects.map(task => task.title);
  el.projectDiv.classList = 'text-center';
}

export default showProject;
