import * as el from './elements';

const projectDiv = document.querySelector('#show-project');

const showProject = () => {
  projectDiv.innerHTML = el.projects.map(task => task.title);
}

export default showProject;
