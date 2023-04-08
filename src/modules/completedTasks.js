function completedTasks(TodoList, todo) {
  const newT = TodoList.map((p) => {
    if (p.index === todo.index) {
      return {
        discription: p.discription,
        index: p.index,
        completed: !p.completed,
      };
    }
    return p;
  });

  return newT;
}

const StatusComplete = (CompletedBox, TodoList, myTodoList, renderTodo, updateTask, todo) => {
  CompletedBox.addEventListener('change', () => {
    TodoList = completedTasks(TodoList, todo);

    localStorage.setItem('todos', JSON.stringify(TodoList));
    renderTodo(TodoList, myTodoList);
    updateTask(TodoList, renderTodo, myTodoList);
  });
};

export { StatusComplete, completedTasks };