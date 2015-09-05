function createNewTextNode(create,textNode){
  var tempText = create.createTextNode(textNode);
  return tempText;
};

// This function enables creation of an input-element with attributes
function createNewElement(create, what, id, size, title, value, className, tabIndex){
  var temp = create.createElement(what);
  temp.type = "text";
  temp.id = id;
  temp.size = size;
  temp.title = title;
  temp.value = value;
  temp.className = className;
  temp.tabIndex = tabIndex;
  return temp;
};
