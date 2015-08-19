
// Add a player with name Player1, Player2 etc
var playerNr = 1;
function addPlayer() {

    newPlayerNr = playerNr++;


   var x = document.createElement("INPUT");
   x.setAttribute("id", "field");
   x.setAttribute("type", "text");
   x.setAttribute("value", "Player "+ newPlayerNr);
   document.body.appendChild(x);

    var plusset = document.createElement("BUTTON");
    var plussetText = document.createTextNode("+1");
    plusset.setAttribute("onClick", "plussa(newPlayerNr)");
    plusset.appendChild(plussetText);
    document.body.appendChild(plusset);

    var minuset = document.createElement("BUTTON");
    var minusetText = document.createTextNode("-1");
    minuset.setAttribute("onClick", "minus(newPlayerNr)");
    minuset.appendChild(minusetText);
    document.body.appendChild(minuset);

    var scoreField = document.createElement("INPUT");
    scoreField.setAttribute("id", newPlayerNr);
    scoreField.setAttribute("type", "text");
    scoreField.setAttribute("value", 0);
    document.body.appendChild(scoreField);


}
