(function(library) {
  require('app/tools.js');
  setTimeout(function () {
    library(tools);
  }, 10);

})(function (tools) {
  // tools
  var appendChildren = tools.appendChildren;
  var createElemWithAttr = tools.createElemWithAttr;
  var createElemWithClass = tools.createElemWithClass;
  var createElemWithInnerText = tools.createElemWithInnerText;

  // select elements
  var sendTodoInput = document.querySelector('.container .form input');
  var sendTodoButton = document.querySelector('.container .form button');
  var todosContainer = document.querySelector('.container .todos');
  var checkboxInput = document.querySelector('.container .todos .todo input');

  var createTodo = function(text) {
    // create html nodes
    var todoContainer = createElemWithClass('div', 'todo');
    var todoInput = createElemWithAttr('input', 'type', 'checkbox');
    var todoText = createElemWithInnerText('span', text);

    // append nodes to the to-do div
    var container = appendChildren(todoContainer);
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
