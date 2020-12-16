
class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
    Project.list.push(this);
  }
}

const form = document.querySelector('#form');

const formSubmit = () => {
  let newArr = []
form.addEventListener('click', () => {
  const firstName = form.querySelector('input[name="first name"').value;
  const lastName = form.querySelector('input[name="last name"').value;

  const project = new Project(firstName, lastName);
  newArr.push(project);
})
}

Project.list = []

export {formSubmit}
