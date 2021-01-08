import ToDoItem from '../toDoItems';
import newToDoItem from '../newToDo';

const el = {
  titleInput: { value: 'Clean' },
  descInput: { value: 'the dishes' },
  dueInput: { value: '10/09/2021' },
  getPriority: { value: 'Medium' },
  noteInput: { value: 'list of disehs' },
  checkInput: { value: 'hoover' },
  projectToDo: { value: 'Home' },
  projects: [{ title: 'Work' }, { title: 'Home' }],
  toDos: [],
};

const toDo = new ToDoItem(el.titleInput.value, el.descInput.value,
  el.dueInput.value, el.getPriority.value, el.noteInput.value, el.checkInput.value);
toDo.project = { title: 'Home' };

it('Adds to toDos array', () => {
  newToDoItem(el);
  expect(el.toDos[0]).toEqual(toDo);
});

it('Throws error if el is null', () => {
  expect(() => newToDoItem(null)).toThrow();
});

it('returns null', () => {
  expect(newToDoItem(el)).toBeUndefined();
});