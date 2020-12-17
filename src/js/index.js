import '../css/style.css';
import ToDoItem from './toDoItems';
import Project from './projects';

const toDos = [];
const projects = [];
const toDoForm = document.querySelector('#to-do-form');
const projectForm = document.querySelector('#project-form');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('desc');
const dueInput = document.getElementById('dueDate');
const priorityInput = document.getElementById('priority');
const checkInput = document.getElementById('checkList');
const projectTitle = document.getElementById('projectTitle')

toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const toDo = new ToDoItem(titleInput.value, descInput.value,
    dueInput.value, priorityInput.value, checkInput.value);
  toDos.push(toDo);
});

projectForm.addEventListener('submit', e => {
  e.preventDefault();
  const project = new Project(projectTitle.value);
  projects.push(project);
  console.log(projects);
})