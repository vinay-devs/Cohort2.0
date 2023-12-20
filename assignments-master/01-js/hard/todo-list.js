/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos = [...this.todos, todo];
  }
  remove(indexOfTodo) {
    const newTodos = this.todos.filter((data, index) => index != indexOfTodo);
    this.todos = newTodos;
  }
  update(indexOfTodo, updatedTodo) {
    if (indexOfTodo < this.todos.length - 1) {
      this.todos[indexOfTodo] = updatedTodo;
    }
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    const todo = this.todos.find((data, index) => indexOfTodo === index);
    if (todo) {
      return todo;
    } else {
      return null;
    }
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
