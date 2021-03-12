let todoList = {
  todos: [],
<<<<<<< HEAD

=======
>>>>>>> 7f46e64e53f7a8753c7008b2335563e44adb768d
  addTodo(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },
  changeTodo(position, todoText) {
<<<<<<< HEAD
    this.todos[position - 1].todoText = todoText;
=======
    this.todos[position].todoText = todoText;
>>>>>>> 7f46e64e53f7a8753c7008b2335563e44adb768d
  },
  deleteTodo(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted(position) {
<<<<<<< HEAD
    let todo = this.todos[position - 1];
=======
    let todo = this.todos[position];
>>>>>>> 7f46e64e53f7a8753c7008b2335563e44adb768d
    todo.completed = !todo.completed;
  },

  toggleAll() {
<<<<<<< HEAD
    let totalTodos = this.todos.length;
    let completedTodos = 0;

=======
>>>>>>> 7f46e64e53f7a8753c7008b2335563e44adb768d
    this.todos.forEach((todo) => {
      if (todo.completed) {
        completedTodos++;
      }
    });

    this.todos.forEach((todo) => {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  },
};

var handlers = {
  addTodo: () => {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: () => {
    let changeTodoPositionInput = document.getElementById(
      'changeTodoPositionInput',
    );
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(
      changeTodoPositionInput.value,
      changeTodoTextInput.value,
    );
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: (position) => {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: () => {
    let toggleCompletedPositionInput = document.getElementById(
      'toggleCompletedPositionInput',
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.value);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: () => {
    todoList.toggleAll();
    view.displayTodos();
  },
};

let view = {
  displayTodos() {
    let todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    todoList.todos.forEach((todo, position) => {
      let todoLi = document.createElement('li');
      let todoTextWithCompletion = '';
      if (todo.completed) {
<<<<<<< HEAD
        todoTextWithCompletion = `${position + 1}. ` + '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = `${position + 1}. ` + '( ) ' + todo.todoText;
=======
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
>>>>>>> 7f46e64e53f7a8753c7008b2335563e44adb768d
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    });
  },
  createDeleteButton() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners() {
    let todosUL = document.querySelector('ul');
    todosUL.addEventListener('click', (event) => {
      let elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  },
};

view.setUpEventListeners();
