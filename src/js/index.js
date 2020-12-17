import '../css/style.css';
import ToDoItem from './toDoItems';
import Project from './projects';
import * as el from './elements';

const defaultProject = new Project('Work');

el.defaultOption.setAttribute('value', defaultProject.title);
el.defaultOption.textContent = defaultProject.title;
el.projectToDo.appendChild(el.defaultOption);

el.toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const toDo = new ToDoItem(
    el.titleInput.value,
    el.descInput.value,
    el.dueInput.value,
    el.priorityInput.value,
    el.noteInput.value,
    el.checkInput.value
  );
  projects.forEach((project) => {
    if (project.title === el.projectToDo.value) {
      toDo.project = project;
    }
  });
  el.toDos.push(toDo);
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
