(function() {
  var form = document.getElementsByClassName('form')[0];
  var todosContainer = document.getElementsByClassName('todos')[0];

  var sendTodoInput = form.getElementsByTagName('input')[0];
  var sendTodoButton = form.getElementsByTagName('button')[0];

  var eachTodo = todosContainer.getElementsByClassName('todo')[0];
  var checkboxInput = eachTodo.getElementsByTagName('input')[0];

  var createTodo = function(text) {
    // create html nodes
    var todoContainer = document.createElement('div');
    todoContainer.setAttribute('class', 'todo unselected');

    var todoInput = document.createElement('input');
    todoInput.setAttribute('type', 'checkbox');

    var todoText = document.createElement('span');
    todoText.innerText = text;

    // append nodes to the todo div
    todoContainer.appendChild(todoInput);
    todoContainer.appendChild(todoText);

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

  sendTodoButton.onclick = onCreateTodo;
  checkboxInput.onclick = onCompletedTodo;
}());