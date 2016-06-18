(function() {
  // form elements
  var sendTodoInput = document.querySelector('.container .form input');
  var sendTodoButton = document.querySelector('.container .form button');

  // to-dos container elements
  var todosContainer = document.querySelector('.container .todos');
  var checkboxInput = document.querySelector('.container .todos .todo input');

  var createTodo = function(text) {
    // create html nodes
    var todoContainer = document.createElement('div');
    todoContainer.setAttribute('class', 'todo');

    var todoInput = document.createElement('input');
    todoInput.setAttribute('type', 'checkbox');

    var todoText = document.createElement('span');
    todoText.innerText = text;

    // append nodes to the todo div
    var container = appendChildren(todoContainer);
    container(todoInput, todoText);

    return todoContainer;
  };

  function onCreateTodo() {

    // get input content
    var inputContent = sendTodoInput.value;

    // create the todo and append it to the view
    var todo = createTodo(inputContent);
    todosContainer.appendChild(todo);

    // console.log(document.getElementsByClassName('todos')[0].children)

    // remove content from input
    sendTodoInput.value = '';
  }

  function onCompletedTodo() {
    console.log('right!')
  }

  // tools
  function watchElementForChanges(elem) {
    // if element changes do something
  }

  function appendChildren(container) {
    return function() {
      return Array.prototype.map.call(arguments, function (elem) {
        container.appendChild(elem);
      });
    }
  }

  sendTodoButton.onclick = onCreateTodo;
  checkboxInput.onclick = onCompletedTodo;
}());