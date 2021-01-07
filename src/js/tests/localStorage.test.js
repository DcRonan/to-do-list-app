import Project from '../projects';

const newProject = new Project('Study');
const projectTwo = new Project('Work');
const arr = [newProject, projectTwo]
const emptyArr = []

localStorage.setItem('projects', JSON.stringify(arr))
localStorage.setItem('selected project', JSON.stringify(newProject))
localStorage.setItem('empty array', JSON.stringify(emptyArr))

it('checks if object is saved in local storage', () => {
  expect(localStorage.getItem('projects')).toBe(JSON.stringify(arr))
});

it('checks if there is 2 projects saved in local storage', () => {
  expect(JSON.parse(localStorage.getItem('projects')).length).toBe(2);
})

it ('checks if object in local storage is empty', () => {
  expect(localStorage.getItem('empty array')).toBe('[]')
})
