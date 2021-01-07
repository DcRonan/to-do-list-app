import * as el from './elements';

const priorityColor = (color) => {
  if (color === 'Low') {
    return 'bg-gray-200';
  } if (color === 'Medium') {
    return 'bg-yellow-400';
  }
  return 'bg-red-700 text-white';
};

module.exports = priorityColor;

const showAndDeleteToDo = () => {
  const showTable = document.createElement('table');
  showTable.setAttribute('id', 'to-do-list-items');
  showTable.classList = 'w-full';
  el.toDos.forEach((toDo) => {
    const tableRow = document.createElement('tr');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
      tableRow.parentNode.removeChild(tableRow);
      if (el.toDos.indexOf(toDo) !== 1) {
        el.toDos.splice(el.toDos.indexOf(toDo), 1);
        el.numOfTasks.textContent = el.toDos.length;
        localStorage.setItem('toDos', JSON.stringify(el.toDos));
      }
    });

    const editBtn = document.createElement('button');
    editBtn.classList = 'edit-btn';
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', () => {
      if (el.toDos.indexOf(toDo) !== 1) {
        el.toDos.splice(el.toDos.indexOf(toDo), 1);
      }
      el.content.innerHTML = '';
      el.titleInput.value = toDo.title;
      el.descInput.value = toDo.description;
      el.dueInput.value = toDo.dueDate;
      el.getPriority.value = toDo.priority;
      el.noteInput.value = toDo.notes;
      el.checkInput.value = toDo.checkList;
      el.content.appendChild(el.toDoForm);
    });

    const detailsBtn = document.createElement('button');
    detailsBtn.classList = 'border border-none bg-gray-600 text-white rounded-lg duration-300 focus:outline-none p-1 text-sm';
    deleteBtn.classList = 'border border-none bg-red-500 text-white rounded-lg duration-300 focus:outline-none p-1 text-sm mr-2';
    editBtn.classList = 'border border-none bg-green-500 text-white rounded-lg duration-300 focus:outline-none p-1 text-sm mr-2';
    detailsBtn.textContent = 'Info';

    detailsBtn.addEventListener('click', () => {
      el.content.innerHTML = `<h1>${toDo.title}</h1><p>${toDo.description}</p><p>Due Date: ${toDo.dueDate}</p><p>Priority: ${toDo.priority}</p><p>Notes: ${toDo.notes}</p><p>Checklist: ${toDo.checkList}</p>`;
    });

    tableRow.innerHTML = `<div class="flex justify-between mt-2 mb-2 ${priorityColor(toDo.priority)} p-3 rounded-md w-full">
    <div class="flex items-center"> 
    <div class="h-4 w-4 mr-3 rounded-sm border border-blue-400"></div>
    <div>${toDo.title}</div>
    </div>
    <div class="flex items-center"> 
    <div class="mr-3">${toDo.dueDate}</div>
    </div>
  </div>`;

    tableRow.appendChild(deleteBtn);
    tableRow.appendChild(editBtn);
    tableRow.appendChild(detailsBtn);
    showTable.appendChild(tableRow);
  });

  return showTable;
};

export default showAndDeleteToDo;
