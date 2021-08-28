import { MyTodoListPage } from './app.po';

describe('my-todo-list App', function() {
  let page: MyTodoListPage;

  beforeEach(() => {
    page = new MyTodoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
