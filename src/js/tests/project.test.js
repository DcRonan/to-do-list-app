import Project from '../projects';

const newProject = new Project('Study');
const projectTwo = new Project();

it('checks if Project is defined', () => {
  expect(Project).toBeDefined();
});

it('checks if a new object is an instance of the class Project', () => {
  expect(newProject).toBeInstanceOf(Project);
});

it('checks if object value is equal', () => {
  expect(newProject).toEqual({ title: 'Study' });
});

it("checks if an object's value is undefined", () => {
  expect(projectTwo).toEqual({ title: undefined });
});
