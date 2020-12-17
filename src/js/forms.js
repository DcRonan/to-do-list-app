const toDoForm = () => {
  const newForm = document.createElement('div');
  newForm.innerHTML = `<form class="border-red-600 border text-center" id="to-do-form">
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
</form>`;
}

export default toDoForm;
