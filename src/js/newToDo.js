import ToDoItem from './toDoItems';

const newToDoItem = (el) => {
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
  localStorage.setItem('toDos', JSON.stringify(el.toDos));
};

export default newToDoItem;
