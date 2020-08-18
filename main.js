let todoList = {
  todos: [],
  addTodo(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },
  changeTodo(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll() {
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
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
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
