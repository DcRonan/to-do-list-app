import '../css/style.css';
import Project from './projects';
import * as el from './elements';
import showToDo from './toDoIndex';
import showProject from './projectIndex';
import { newToDoItem, formProjectData } from './newToDo';

// aside bar stuff

const content = document.querySelector('#content');
const openToDo = document.querySelector('#open-todo');
const openProject = document.querySelector('#open-project');
const openProjectsList = document.querySelector('#open-projects-list');
const openItemsList = document.querySelector('#open-items-list');
const showToDoForm = () => {
	const form = document.createElement('form');
	form.setAttribute('id', 'to-do-form');
	form.classList = ' border-red-600 border text-center';
  form.innerHTML = `
				<h3>To do form</h3>
				<div>
					<label for="title">Title</label>
					<input id="title" class="border-red-600 border" type="text" name="first name">
				</div>
				<div>
					<label for="desc">Description</label>
					<input id="desc" class="border border-red-900" type="text" name="last name">
				</div>
				<div>
					<label for="dueDate">Due Date</label>
					<input id="dueDate" class="border border-red-900" type="text" name="dueDate">
				</div>
				<div>
					<label for="priority">Priority</label>
					<input id="priority" class="border border-red-900" type="text" name="priority">
				</div>
				<div>
					<label for="notes">Notes</label>
					<input id="notes" class="border border-red-900" type="text" name="notes">
				</div>
				<div>
					<label for="checkList">Checklist</label>
					<input id="checkList" class="border border-red-900" type="text" name="checkList">
				</div>
				<div>
					<select name="projectToDo" id="projectToDo">

					</select>
				</div>
				<input type="submit" value="Submit">
			`;
			return form;
};
const showProjectForm = () => {
	content.innerHTML = `<form id="project-form">
				<h3>Project Form</h3>
				<label for="projectTitle">Project Title</label>
				<input type="text" class="border border-red-900" name="projectTitle" id="projectTitle">
				<input type="submit" value="Submit">
			</form>`;
};
openToDo.addEventListener('click', () => {
	content.innerHTML='';
	content.appendChild(showToDoForm());
});

openProject.addEventListener('click', () => {
  showProjectForm();
});

// openProject.addEventListener('click', () => {
//   content.innerHTML = '';
//   // showProject();
// });

openProjectsList.addEventListener('click', () => {
  content.innerHTML = '';
  // showProjectsList();
});

openItemsList.addEventListener('click', () => {
  content.innerHTML = '';
  // showItemsList();
});

// showToDoForm();
// showProject();
// formProjectData();

el.toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newToDoItem();
  showToDo();
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