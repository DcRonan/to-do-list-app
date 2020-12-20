import * as el from './elements';

const formProjectData = () => {
  el.defaultOption.setAttribute('value', el.defaultProject.title);
  el.defaultOption.textContent = el.defaultProject.title;
  el.projectToDo.appendChild(el.defaultOption);
};

const newToDoItem = () => {
  el.projects.forEach((project) => {
    if (project.title === el.projectToDo.value) {
      el.toDo.project = project;
    }
  });
  
  el.priority.forEach((priority) => {
    if (priority === el.getPriority.value) {
      el.toDo.priority = priority;
    }
  })
  el.toDos.push(el.toDo);
};

export {newToDoItem, formProjectData};
