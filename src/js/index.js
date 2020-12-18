import '../css/style.css';
import Project from './projects';
import * as el from './elements';
import showToDo from './toDoIndex';
import showProjects from './projectIndex';

import { newToDoItem, formProjectData } from './newToDo';

el.content.removeChild(el.toDoForm);
el.content.removeChild(el.projectForm);

formProjectData();

el.addToDo.addEventListener('click', () => {
  el.content.innerHTML = '';
  el.content.appendChild(el.toDoForm);
});

el.addProject.addEventListener('click', () => {
  el.content.innerHTML = '';
  el.content.appendChild(el.projectForm);
});

el.listProjects.addEventListener('click', () => {
  el.content.innerHTML = '';
  showProjects();
});

el.toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newToDoItem();
  let parent = document.createElement('div');
  parent.setAttribute('id', 'to-do-list');
  el.content.appendChild(parent);
  parent = document.querySelector('#to-do-list');
  parent.innerHTML = '';
  parent.appendChild(showToDo())
});

el.projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const project = new Project(el.projectTitle.value);
  el.projects.push(project);
  const option = document.createElement('option');
  option.setAttribute('value', project.title);
  option.textContent = project.title;
  el.projectToDo.appendChild(option);
});

el.openToDos.addEventListener('click', () => {
  el.content.innerHTML = '';
  el.content.appendChild(showToDo());
});