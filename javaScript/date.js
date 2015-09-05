//Present date and time in paragraph
// function createNewElement(create, what, id, size, title, value, className, tabIndex)
function addDate(dateDiv){
var rightNow = new Date();
var p = createNewElement(document,"p","pDate",null,null,null,null,-1);
var date = createNewTextNode(document,rightNow);
console.log(p);
p.appendChild(date);
dateDiv.appendChild(p);

};
addDate(document.getElementById("dateDiv"));
