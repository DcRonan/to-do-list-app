import * as el from './elements';

const showAndDeleteToDo = () => {
  const showTable = document.createElement('table');
  showTable.setAttribute('id', 'to-do-list-items');
  showTable.classList = 'w-full';
  el.toDos.forEach((toDo) => {
    const tableRow = document.createElement('tr');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'delete-btn';
    deleteBtn.textContent = 'DELETE!';

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
    editBtn.textContent = 'EDIT!';

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

    tableRow.innerHTML = `<div class="flex justify-between ${priorityColor(
      toDo.priority
    )} p-3 rounded-md w-full">
    <div class="flex items-center"> 
    <div class="h-4 w-4 mr-3 rounded-sm border border-blue-400"></div>
    <div>${toDo.title}</div>
    </div>
    <div class="flex"> 
    <div class="mr-3">${toDo.dueDate}</div>
    <div class="info-btn"><i class="fas fa-info-circle"></i></div>
    </div>
  </div>`;

    tableRow.appendChild(deleteBtn);
    tableRow.appendChild(editBtn);
    showTable.appendChild(tableRow);
  });

  return showTable;
};

const priorityColor = (color) => {
  if (color === 'Low') {
    return 'bg-gray-200';
  } else if (color === 'Medium') {
    return 'bg-yellow-400';
  } else {
    return 'bg-red-700 text-white';
  }
};

export default showAndDeleteToDo;
