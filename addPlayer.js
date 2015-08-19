
// Add a player with name Player1, Player2 etc

var playerNr = 1;
function addPlayer() {

    newPlayerNr = playerNr++;


   var x = document.createElement("INPUT");
   x.setAttribute("id", "field");
   x.setAttribute("type", "text");
   x.setAttribute("value", "Player "+ newPlayerNr);
   document.body.appendChild(x);

   var id_score = "score" + newPlayerNr;
   console.log(id_score);
    var plusset = document.createElement("BUTTON");
    var plussetText = document.createTextNode("+1");
    plusset.onclick = function() {plussa(id_score);}
    // plusset.addEventListener("click", plussa(id_score));
    // plusset.setAttribute("onClick", "plussa(id_score)");
    plusset.appendChild(plussetText);
    document.body.appendChild(plusset);

    var minuset = document.createElement("BUTTON");
    var minusetText = document.createTextNode("-1");
    minuset.onclick = function() {minus(id_score);}
    // minuset.addEventListener("click", minus(id_score));
    // minuset.setAttribute("onClick", "minus(id_score)");
    minuset.appendChild(minusetText);
    document.body.appendChild(minuset);

    var scoreField = document.createElement("INPUT");
    scoreField.setAttribute("id", id_score);
    scoreField.setAttribute("type", "text");
    scoreField.setAttribute("value", 0);
    document.body.appendChild(scoreField);


}
