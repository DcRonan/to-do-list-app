import * as el from './elements';

const showProjects = () => {
  const showProjectsDiv = document.createElement('div');
	el.content.appendChild(showProjectsDiv);
	const projectUl = document.createElement('ul');
	showProjectsDiv.appendChild(projectUl);
	const eachProject = document.createElement('li');
	showProjectsDiv.appendChild(eachProject);
	eachProject.innerHTML = el.projects.map(task => task.title);
  eachProject.classList = 'text-center';
}

export default showProjects;
