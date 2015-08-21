//Present date and time in paragraph

var rightNow = new Date();
var p = document.createElement('p');
var date = document.createTextNode(rightNow);
p.id = "pDate";
p.appendChild(date);
document.body.appendChild(p);
