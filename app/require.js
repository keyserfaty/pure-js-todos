var require = function() {
  var libs = arguments;
  var head = document.getElementsByTagName('head')[0];

  //type checkers
  var argIsNotString = function(arr) {
    return Array.prototype.some.call(arr, function (elem) {
      return typeof(elem) !== 'string';
    });
  };

  var isEmpty = function(arg) {
    return arg.length === 0;
  };

  var existy = function(arg) {
    return arg != null;
  };

  var fail = function(err) {
    console.log(err);
  };

  // fall backs
  if (argIsNotString(libs)) {
    return fail('Arguments can only be strings');
  }

  if (!existy(libs)) {
    return fail('Arguments can not be null or undefined');
  }

  if (isEmpty(libs)) {
    return fail('Arguments can not be empty');
  }

  // lib
  var createScriptTag = function(url) {
    var script = document.createElement('script');
    script.src = url;
    return script;
  };

  var appendScriptTags = function(container) {
    return function appendToContainer() {
      return Array.prototype.map.call(arguments[0], function (elem) {
        container.appendChild(createScriptTag(elem));
      });
    }
  };

  var container = appendScriptTags(head);
  container(libs);

  return null;
};