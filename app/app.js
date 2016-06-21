(function(library) {
  require('app/tools.js');

  // this should go
  setTimeout(function () {
    library(tools);
  }, 10);

})(function (tools) {
  // select elements
  var main = document.querySelector('.container');
  var sendTodoInput = document.querySelector('.container .form input');
  var sendTodoButton = document.querySelector('.container .form button');
  var todosContainer = document.querySelector('.container .todos');
  var checkboxInput = document.querySelector('.container .todos .todo input');


  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.target === todosContainer) {
        todosContainer = mutation.target;
        return Array.prototype.map.call(todosContainer.children, function (child) {
          child.onclick = onTodoClick;
        });
      }
      return null;
    });
  });

  // configuration of the observer:
  var config = {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
  };

  // pass in the target node, as well as the observer options
  observer.observe(main, config);

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

  function onTodoClick() {
    if (Array.prototype.indexOf.call(this.classList, 'selected') !== -1) {
      return this.classList = ['todo'];
    }
    return this.classList.add('selected');
  }

  sendTodoButton.onclick = onCreateTodo;
});
