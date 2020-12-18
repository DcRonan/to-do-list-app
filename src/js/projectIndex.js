import * as el from './elements';

const showProjects = () => {
  const showProjectsDiv = document.createElement('div');
	const projectUl = document.createElement('ul');
	el.projects.forEach(project => {
		const eachProject = document.createElement('li');
		eachProject.textContent = project.title;
		projectUl.appendChild(eachProject);
	});

  projectUl.classList = 'text-center';
	showProjectsDiv.appendChild(projectUl);
	el.content.appendChild(showProjectsDiv);
}

export default showProjects;
