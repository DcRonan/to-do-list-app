import '../css/style.css';
import Project from './projects';
import * as el from './elements';
import showAndDeleteToDo from './toDoIndex';
import showProjects from './projectIndex';
import newToDoItem from './newToDo';

el.content.removeChild(el.toDoForm);
el.content.removeChild(el.projectForm);
el.projectAndTaskBtnDiv.removeChild(el.projectAndTaskBtn);

el.projects.forEach((project) => {
  const option = document.createElement('option');
  option.textContent = project.title;
  el.projectToDo.appendChild(option);
});

el.numOfTasks.textContent = el.toDos.length;

el.priority.forEach((priority) => {
  const option = document.createElement('option');
  option.setAttribute('value', priority);
  option.textContent = priority;
  el.getPriority.appendChild(option);
});

el.addToDo.addEventListener('click', () => {
  el.content.innerHTML = '';
  el.content.appendChild(el.toDoForm);
  el.projectAndTaskBtnDiv.removeChild(el.projectAndTaskBtn);
});

el.addProject.addEventListener('click', () => {
  el.content.innerHTML = '';
  el.content.appendChild(el.projectForm);
  el.projectAndTaskBtnDiv.removeChild(el.projectAndTaskBtn);
});

el.listProjects.addEventListener('click', () => {
  el.content.innerHTML = '';
  showProjects(el);
});

el.toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  el.content.innerHTML = '';
  newToDoItem(el);
  let parent = document.createElement('div');
  parent.setAttribute('id', 'to-do-list');
  el.content.appendChild(parent);
  parent = document.querySelector('#to-do-list');
  parent.innerHTML = '';
  parent.appendChild(showAndDeleteToDo());
  el.toDoForm.reset();
  el.numOfTasks.textContent = el.toDos.length;
});

el.projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const project = new Project(el.projectTitle.value);
  el.projects.push(project);
  localStorage.setItem('projects', JSON.stringify(el.projects));
  const option = document.createElement('option');
  option.setAttribute('value', project.title);
  option.textContent = project.title;
  el.projectToDo.appendChild(option);
  el.projectForm.reset();
  el.content.removeChild(el.projectForm);
  showProjects(el);
});

el.openToDos.addEventListener('click', () => {
  el.content.innerHTML = '';
  el.content.appendChild(showAndDeleteToDo());
});

el.addNewBtn.addEventListener('click', () => {
  el.projectAndTaskBtnDiv.appendChild(el.projectAndTaskBtn);
});
