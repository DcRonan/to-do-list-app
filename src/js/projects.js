const form = document.querySelector('#form');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('desc');
const dueInput = document.getElementById('dueDate');
const priorityInput = document.getElementById('priority');
const checkInput = document.getElementById('checkList');
const projectInput = document.getElementById('project');
const pTitleInput = document.getElementById('project-title');

let toDos = []

class ToDoItem {
  constructor(title, description, dueDate, priority, notes, checklist, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.project = project;
  }
}

class Project {
  constructor(title) {
    this.title = title;
  }

  newToDo = (title, description, dueDate, priority, notes, checklist, project) => {
    let pTitle = this.title;
    return {title, description, dueDate, priority, notes, checklist, project, pTitle}
  } 
}

form.addEventListener('click', () => {
  const project = new ToDoItem(titleInput.value, descInput.value, dueInput.value, priorityInput.value, checkInput.value, projectInput.value, pTitleInput.value);
  toDos.push(project);
})

