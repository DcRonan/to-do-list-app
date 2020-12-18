import Project from './projects';

const toDos = [];
const defaultProject = new Project('Work');
const projects = [defaultProject];

const content = document.querySelector('#content');
const toDoForm = document.querySelector('#to-do-form');
const projectForm = document.querySelector('#project-form');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('desc');
const dueInput = document.getElementById('dueDate');
const priorityInput = document.getElementById('priority');
const noteInput = document.getElementById('notes');
const checkInput = document.getElementById('checkList');
const projectTitle = document.getElementById('projectTitle');
const projectToDo = document.getElementById('projectToDo');
const defaultOption = document.createElement('option');
const titleDiv = document.querySelector('.task-title');
const descDiv = document.querySelector('.task-desc');
const dueDateDiv = document.querySelector('.task-due-date');
const priorityDiv = document.querySelector('.task-priority');
const notesDiv = document.querySelector('.task-notes');
const checkListDiv = document.querySelector('.task-check-list');
const projectDiv = document.querySelector('#show-project');
const addToDo = document.querySelector('#open-todo');
const addProject = document.querySelector('#open-project');
const listProjects = document.querySelector('#open-projects-list');
const openToDos = document.querySelector('#open-items-list');

export {
  toDoForm,
  projectForm,
  titleInput,
  descInput,
  dueInput,
  priorityInput,
  noteInput,
  checkInput,
  projectTitle,
  projectToDo,
  defaultOption,
  titleDiv,
  descDiv,
  dueDateDiv,
  priorityDiv,
  notesDiv,
  checkListDiv,
  toDos,
  defaultProject,
  projects,
  projectDiv,
  content,
  addToDo,
  addProject,
  listProjects,
  openToDos
};
