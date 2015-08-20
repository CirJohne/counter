//Present date and time in paragraph

var rightNow = new Date();
console.log(rightNow);
var p = document.createElement('p');
var date = document.createTextNode(rightNow);
p.appendChild(date);
document.body.appendChild(p);
