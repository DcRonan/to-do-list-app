import * as el from './elements';

const showToDo = () => {
  const showTable = document.createElement('table');
  showTable.setAttribute('id', 'to-do-list-items');
  const tableHeading = document.createElement('tr');
  tableHeading.innerHTML = `
    <th>Title</th><th>Description</th><th>Due Date</th><th>Priority</th><th>Notes</th><th>Checklist</th>
  `
  showTable.appendChild(tableHeading);
  console.log(showTable);
  el.toDos.forEach((toDo) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${toDo.title}</td><td>${toDo.description}</td><td>${toDo.dueDate}</td><td>${toDo.priority}</td><td>${toDo.notes}</td><td>${toDo.checkList}</td>`
    showTable.appendChild(tableRow);
  });
  
  return showTable; 
}

export default showToDo;
