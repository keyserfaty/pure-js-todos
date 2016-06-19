var tools = {};

tools.watchElementForChanges = function watchElementForChanges(elem) {
  // if element changes do something
};

/**
 * Append some elements to an element container
 * @param container
 * @returns {appendToContainer}
 */
tools.appendChildren = function appendChildren(container) {
  return function appendToContainer() {
    return Array.prototype.map.call(arguments, function (elem) {
      container.appendChild(elem);
    });
  }
};

/**
 * Create a new tag element with some inner text
 * @param tag
 * @param text
 * @returns {Element}
 */
tools.createElemWithInnerText = function createElemWithInnerText(tag, text) {
  var elem = document.createElement(tag);
  elem.innerText = text;
  return elem;
};

/**
 * Create a new tag element with defined attribute
 * @param tag
 * @param attr
 * @param value
 * @returns {Element}
 */
tools.createElemWithAttr = function createElemWithAttr(tag, attr, value) {
  var elem = document.createElement(tag);
  elem.setAttribute(attr, value);
  return elem;
};

/**
 * Create a new tag element with defined class name
 * @param tag
 * @param className
 * @returns {Element}
 */
tools.createElemWithClass = function createElemWithClass(tag, className) {
  return tools.createElemWithAttr(tag, 'class', className);
};