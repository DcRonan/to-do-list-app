import { priorityColor } from '../toDoIndex';

it('gray when priority low', () => {
  expect(priorityColor('Low')).toBe('bg-gray-200');
});

it('yellow when priority medium', () => {
  expect(priorityColor('Medium')).toBe('bg-yellow-400');
});

it('red when priority high', () => {
  expect(priorityColor('High')).toBe('bg-red-700 text-white');
});
