
// Add a player with name Player1, Player2 etc

var playerNr = 1;
function addPlayer() {

    newPlayerNr = playerNr++;


   var playerName = document.createElement("INPUT");
   playerName.setAttribute("id", "field" + newPlayerNr);
   playerName.setAttribute("size", "20px");
   playerName.setAttribute("type", "text");
   playerName.setAttribute("value", "Player "+ newPlayerNr);
   playerName.setAttribute("onclick","this.select()");
   document.body.appendChild(playerName);

   var id_score = "score" + newPlayerNr;
   console.log(id_score);

    var plusset = document.createElement("BUTTON");
    var plussetText = document.createTextNode("+1");
    plusset.id = "plusset" + newPlayerNr;
    plusset.setAttribute("tabindex", "-1");
    plusset.onclick = function() {plussa(id_score);};
    plusset.appendChild(plussetText);
    document.body.appendChild(plusset);

    var minuset = document.createElement("BUTTON");
    var minusetText = document.createTextNode("-1");
    minuset.id = "minus" + newPlayerNr;
    minuset.setAttribute("tabindex", "-1");
    minuset.onclick = function() {minus(id_score);}
    minuset.appendChild(minusetText);
    document.body.appendChild(minuset);

    var scoreField = document.createElement("INPUT");
    scoreField.setAttribute("id", id_score);
    scoreField.setAttribute("tabindex", "-1");
    scoreField.setAttribute("readonly", "readonly");
    scoreField.setAttribute("size", "4");
    scoreField.setAttribute("type", "text");
    scoreField.setAttribute("value", 0);
    document.body.appendChild(scoreField);

    var p = document.createElement('p');
    document.body.appendChild(p);




}
