jest.mock('../index');

const { addTodoToList, DeleteTask } = require('../index.js');

describe('Add and Remove Todo', () => {
  test('should add items', () => {
    expect(addTodoToList(
      {
        discription: 'test description',
        index: 1,
        completed: false,
      },
    )).toStrictEqual([
      {
        discription: 'test description',
        index: 1,
        completed: false,
      },
    ]);
  });

  test('should delete item', () => {
    expect(DeleteTask({
      discription: 'test description',
      index: 1,
      completed: false,
    })).toStrictEqual([]);
  });
});
