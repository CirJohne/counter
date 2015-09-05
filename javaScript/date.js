//Present date and time in paragraph

function addDate(dateDiv){
var rightNow = new Date();
var p = document.createElement('p');
var date = createNewTextNode(document,rightNow);
p.id = "pDate";
p.appendChild(date);
dateDiv.appendChild(p);

};
addDate(document.getElementById("dateDiv"));
