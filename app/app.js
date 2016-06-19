(function(library) {
  require('app/tools.js');

  // this should go
  setTimeout(function () {
    library(tools);
  }, 10);

})(function (tools) {
  // select elements
  var sendTodoInput = document.querySelector('.container .form input');
  var sendTodoButton = document.querySelector('.container .form button');
  var todosContainer = document.querySelector('.container .todos');
  var checkboxInput = document.querySelector('.container .todos .todo input');

  var createTodo = function(text) {
    // create html nodes
    var todoContainer = tools.createElemWithClass('div', 'todo');
    var todoInput = tools.createElemWithAttr('input', 'type', 'checkbox');
    var todoText = tools.createElemWithInnerText('span', text);

    // append nodes to the to-do div
    var container = tools.appendChildren(todoContainer);
    container(todoInput, todoText);

    return todoContainer;
  };

  function onCreateTodo() {
    // get input content
    var inputContent = sendTodoInput.value;

    // create the to-do and append it to the view
    var todo = createTodo(inputContent);
    todosContainer.appendChild(todo);

    // remove content from input
    sendTodoInput.value = '';
  }

  function onCompletedTodo() {
    console.log('right!')
  }

  sendTodoButton.onclick = onCreateTodo;
  checkboxInput.onclick = onCompletedTodo;
});
