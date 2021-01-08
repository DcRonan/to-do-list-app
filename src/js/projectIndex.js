const showProjects = (el) => {
  const showProjectsDiv = document.createElement('div');
  const projectUl = document.createElement('ul');
  el.projects.forEach((project) => {
    const eachProject = document.createElement('li');
    eachProject.classList = 'p-3 rounded-md w-full m-3 bg-gray-300 cursor-pointer duration-300 hover:text-white hover:bg-gray-800';
    eachProject.addEventListener('click', () => {
      const projectToDos = el.toDos.filter((toDo) => toDo.project.title === project.title);
      const projectToDosDiv = document.createElement('ul');
      projectToDos.forEach((toDo) => {
        const toDoDiv = document.createElement('li');
        toDoDiv.innerHTML = `
        <div class="flex justify-between"> 
        <div class="flex items-center"> 
        <div class="h-4 w-4 mr-3 rounded-sm border border-blue-400"></div>
        <div>${toDo.title}</div>
        </div>
        <div class="flex items-center"> 
        <div class="mr-3">${toDo.dueDate}</div>
        </div>
        </div>`;
        toDoDiv.classList = 'p-3 rounded-md w-full m-3 bg-gray-300 cursor-pointer';
        projectToDosDiv.appendChild(toDoDiv);
      });
      el.content.innerHTML = '';
      el.content.appendChild(projectToDosDiv);
    });
    eachProject.textContent = project.title;
    projectUl.appendChild(eachProject);
  });

  projectUl.classList = 'text-center';
  showProjectsDiv.appendChild(projectUl);
  el.content.appendChild(showProjectsDiv);
};

export default showProjects;
