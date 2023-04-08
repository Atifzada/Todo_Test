import renderTodo from './modules/renderTodo.js';
import { updateTask, DeleteTask, editTask } from './modules/updateTask.js';
import { completedTasks } from './modules/completedTasks.js';

const myTodoList = document.querySelector('.MytodoList');
const inputTask = document.querySelector('.addTask');
const Form = document.querySelector('form');
const Clear = document.querySelector('.clearBtn');

let TodoList = [];
function getTodos() {
  if (localStorage.getItem('todos')) {
    TodoList = JSON.parse(localStorage.getItem('todos'));
  }
}

getTodos();

function addTodoToList(todo) {
  TodoList.push(todo);
}

function addTodo() {
  Form.addEventListener('submit', (e) => {
    e.preventDefault();
    getTodos();
    addTodoToList({
      discription: inputTask.value,
      index: TodoList.length !== 0 ? TodoList[TodoList.length - 1].index + 1 : 1,
      completed: false,
    });
    localStorage.setItem('todos', JSON.stringify(TodoList));
    getTodos();
    renderTodo(TodoList, myTodoList);
    updateTask(TodoList, renderTodo, myTodoList);
    inputTask.value = '';
  });
}

export default addTodo;

function ClearCompleted(TodoList) {
  const newK = TodoList.filter((item) => !item.completed);
  for (let i = 0; i < newK.length; i += 1) {
    newK[i].index = i + 1;
  }

  return newK;
}

Clear.addEventListener('click', () => {
  getTodos();
  TodoList = ClearCompleted(TodoList);
  localStorage.setItem('todos', JSON.stringify(TodoList));

  renderTodo(TodoList, myTodoList);
  updateTask(TodoList, renderTodo, myTodoList);
});

addTodo();
renderTodo(TodoList, myTodoList);
updateTask(TodoList, renderTodo, myTodoList);

export {
  addTodoToList, DeleteTask, completedTasks, editTask,
};