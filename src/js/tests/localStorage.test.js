import Project from '../projects';

const newProject = new Project('Study');
const projectTwo = new Project('Work');
const arr = [newProject, projectTwo]

localStorage.setItem('projects', JSON.stringify(arr))
localStorage.setItem('selected project', JSON.stringify(newProject))

it('try', () => {
  expect(localStorage.getItem('projects')).toBe(JSON.stringify(arr))
});


