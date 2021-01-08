import ToDoItem from '../toDoItems';

const newToDo = new ToDoItem(
  'Clean',
  'the dishes',
  '10/09/2021',
  'Medium',
  'list of dishes',
  'hoover',
);

const ToDoTwo = new ToDoItem();

it('checks if ToDoItem is defined', () => {
  expect(newToDo).toBeDefined();
});

it('checks if a new object is an instance of the class ToDoItem', () => {
  expect(newToDo).toBeInstanceOf(ToDoItem);
});

it('checks if object value is equal', () => {
  expect(newToDo).toEqual({
    title: 'Clean',
    description: 'the dishes',
    dueDate: '10/09/2021',
    priority: 'Medium',
    notes: 'list of dishes',
    checkList: 'hoover',
  });
});

it("checks if an object's value is undefined", () => {
  expect(ToDoTwo).toEqual({
    title: undefined,
    description: undefined,
    dueDate: undefined,
    priority: undefined,
    notes: undefined,
    checkList: undefined,
  });
});
