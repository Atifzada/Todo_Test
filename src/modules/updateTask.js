import { completedTasks } from './completedTasks.js';

function DeleteTask(TodoList, todo) {
  const filtered = TodoList.filter((k) => k.index !== todo.index);
  for (let i = 0; i < filtered.length; i += 1) {
    filtered[i].index = i + 1;
  }
  return filtered;
}

function editTask(TodoList, todo, e) {
  const newT = TodoList.map((p) => {
    if (p.index === todo.index) {
      return {
        discription: e.target.value,
        index: p.index,
        completed: p.completed,
      };
    }
    return p;
  });
  return newT;
}

function updateTask(TodoList, renderTodo, myTodoList) {
  if (!TodoList) {
    return;
  }
  TodoList.forEach((todo) => {
    const More = document.querySelector(`.more-option-${todo.index}`);
    const DBtn = document.querySelector(`.delete-${todo.index}`);
    const TodoDes = document.querySelector(`.todo-item-i${todo.index}`);
    const CompletedBox = document.querySelector(`.completed-${todo.index}`);

    More.addEventListener('mouseover', () => {
      More.style.display = 'none';
      DBtn.style.display = 'block';
    });

    DBtn.addEventListener('mouseout', () => {
      More.style.display = 'block';
      DBtn.style.display = 'none';
    });

    DBtn.addEventListener('click', () => {
      TodoList = DeleteTask(TodoList, todo);

      localStorage.setItem('todos', JSON.stringify(TodoList));

      renderTodo(TodoList, myTodoList);
      updateTask(TodoList, renderTodo, myTodoList);
    });

    TodoDes.addEventListener('change', (e) => {
      TodoList = editTask(TodoList, todo, e);

      localStorage.setItem('todos', JSON.stringify(TodoList));
      renderTodo(TodoList, myTodoList);
      updateTask(TodoList, renderTodo, myTodoList);
    });

    completedTasks(CompletedBox, TodoList, myTodoList, renderTodo, updateTask, todo);
  });
}

export {
  updateTask, DeleteTask, editTask,
};