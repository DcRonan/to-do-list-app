import '../css/style.css';
import Project from './projects';
import * as el from './elements';
import showToDo from './toDoIndex';
import showProject from './projectIndex';
import {newToDoItem, formProjectData} from './newToDo';

showProject();
formProjectData();

el.toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newToDoItem();
  showToDo();
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
