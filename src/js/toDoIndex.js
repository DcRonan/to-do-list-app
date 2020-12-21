import * as el from './elements';

const showAndDeleteToDo = () => {
  const showTable = document.createElement('table');
  showTable.setAttribute('id', 'to-do-list-items');
  const tableHeading = document.createElement('tr');
  tableHeading.innerHTML = `
    <th>Title</th><th>Description</th><th>Due Date</th><th>Priority</th><th>Notes</th><th>Checklist</th>`;
  showTable.appendChild(tableHeading);
  el.toDos.forEach((toDo) => {
    const tableRow = document.createElement('tr');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'delete-btn';
    deleteBtn.textContent = 'DELETE!';

    deleteBtn.addEventListener('click', () => {
      tableRow.parentNode.removeChild(tableRow);
      if (el.toDos.indexOf(toDo) !== 1) {
        el.toDos.splice(el.toDos.indexOf(toDo), 1);
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
      console.log(el.toDos);
    });

    tableRow.innerHTML = `<td>${toDo.title}</td><td>${toDo.description}</td><td>${toDo.dueDate}</td><td>${toDo.priority}</td><td>${toDo.notes}</td><td>${toDo.checkList}</td>`;
    tableRow.appendChild(deleteBtn);
    tableRow.appendChild(editBtn);
    showTable.appendChild(tableRow);
  });

  return showTable;
};

export default showAndDeleteToDo;
