import '../css/style.css';
import ToDoItem from './toDoItems';

const toDos = [];
const form = document.querySelector('#form');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('desc');
const dueInput = document.getElementById('dueDate');
const priorityInput = document.getElementById('priority');
const checkInput = document.getElementById('checkList');
const projectInput = document.getElementById('project');
const pTitleInput = document.getElementById('project-title');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const toDo = new ToDoItem(titleInput.value, descInput.value,
    dueInput.value, priorityInput.value, checkInput.value, projectInput.value, pTitleInput.value);
  toDos.push(toDo);
});
