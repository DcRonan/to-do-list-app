import * as el from './elements';
import ToDoItem from './toDoItems';

const formProjectData = () => {
  el.defaultOption.setAttribute('value', el.defaultProject.title);
  el.defaultOption.textContent = el.defaultProject.title;
  el.projectToDo.appendChild(el.defaultOption);
};

const newToDoItem = () => {
  const toDo = new ToDoItem(
    el.titleInput.value,
    el.descInput.value,
    el.dueInput.value,
    el.getPriority.value === 'disabled' ? el.getPriority.value = 'Low' : el.getPriority.value,
    el.noteInput.value,
    el.checkInput.value,
  );

  el.projects.forEach((project) => {
    if (project.title === el.projectToDo.value) {
      toDo.project = project;
    }
  });

  el.toDos.push(toDo);
};

export { newToDoItem, formProjectData };
