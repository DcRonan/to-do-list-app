import showAndDeleteToDo from '../toDoIndex';

const content = document.createElement('div');
content.setAttribute('id', 'content');
const el = {
  titleInput: { value: 'Clean' },
  descInput: { value: 'the dishes' },
  dueInput: { value: '10/09/2021' },
  getPriority: { value: 'Medium' },
  noteInput: { value: 'list of disehs' },
  checkInput: { value: 'hoover' },
  projectToDo: { value: 'Home' },
  projects: [{ title: 'Work' }, { title: 'Home' }],
  content,
  toDos: [{
    title: 'Clean',
    description: 'the dishes',
    dueDate: '10/09/2021',
    priority: 'Medium',
    notes: 'list of dishes',
    checkList: 'hoover',
  }],
  numOfTasks: document.createElement('span'),
};

it('Has Edit button', () => {
  expect(showAndDeleteToDo(el).innerHTML).toMatch(/Edit/);
});

it('Has Delete button', () => {
  expect(showAndDeleteToDo(el).innerHTML).toMatch(/Edit/);
});

it('Has Info button', () => {
  expect(showAndDeleteToDo(el).innerHTML).toMatch(/Info/);
});

it('Has To Do title', () => {
  expect(showAndDeleteToDo(el).innerHTML).toMatch(/Clean/);
});

it('Has To Do due date', () => {
  expect(showAndDeleteToDo(el).innerHTML).toMatch(/10\/09\/2021/);
});