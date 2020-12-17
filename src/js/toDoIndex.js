import * as el from './elements';

const showToDo = () => {
  el.titleDiv.innerHTML = el.toDos.map(task => task.title);
  el.descDiv.innerHTML = el.toDos.map(task => task.description);
  el.dueDateDiv.innerHTML = el.toDos.map(task => task.dueDate);
  el.priorityDiv.innerHTML = el.toDos.map(task => task.priority);
  el.notesDiv.innerHTML = el.toDos.map(task => task.notes);
  el.checkListDiv.innerHTML = el.toDos.map(task => task.checkList);
}

export default showToDo;
