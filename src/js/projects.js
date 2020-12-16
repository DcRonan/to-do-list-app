
class Project {


  constructor(title) {
    this.title = title;
    this.todos = [];
    Project.list.push(this);
  }
}

Project.list = []

export default Project;
