import showProjects from '../projectIndex';

const content = document.createElement('div');
content.setAttribute('id', 'content');
const el = {
  content,
  projects: [{ title: 'Work' }, { title: 'Home' }],
};
it('contains home', () => {
  showProjects(el);
  expect(el.content.innerHTML).toMatch(/Home/);
});

it('contains work', () => {
  showProjects(el);
  expect(el.content.innerHTML).toMatch(/Work/);
});