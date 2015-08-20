
// Add a player with name Player1, Player2 etc
//playerNr is used to start of newPlayerNr
var playerNr = 1;

function addPlayer() {
// newPlayerNr is used to iterate added player and add 1 on every turn
    newPlayerNr = playerNr++;

//Add field where player may enter name.
   var playerName = document.createElement("INPUT");
   playerName.setAttribute("id", "field" + newPlayerNr);
   playerName.setAttribute("size", "20px");
   playerName.setAttribute("type", "text");
   playerName.setAttribute("value", "Player "+ newPlayerNr);
   playerName.setAttribute("onclick","this.select()");
   playerName.setAttribute("class", "nameField");
   document.body.appendChild(playerName);

//id_score is used to be able to point the functions plussa() and minus() to the scorefield of the right player
   var id_score = "score" + newPlayerNr;

// Add the +button
    var plusset = document.createElement("BUTTON");
    var plussetText = document.createTextNode("+1");
    plusset.id = "plusset" + newPlayerNr;
    plusset.setAttribute("tabindex", "-1");
    plusset.onclick = function() {plussa(id_score);};
    plusset.setAttribute("class", "button");
    plusset.appendChild(plussetText);
    document.body.appendChild(plusset);
// Add the -button
    var minuset = document.createElement("BUTTON");
    var minusetText = document.createTextNode("-1");
    minuset.id = "minus" + newPlayerNr;
    minuset.setAttribute("tabindex", "-1");
    minuset.onclick = function() {minus(id_score);}
    minuset.setAttribute("class", "button");
    minuset.appendChild(minusetText);
    document.body.appendChild(minuset);
// Add scorefield and make it readonly
    var scoreField = document.createElement("INPUT");
    scoreField.setAttribute("id", id_score);
    scoreField.setAttribute("tabindex", "-1");
    scoreField.setAttribute("readonly", "readonly");
    scoreField.setAttribute("size", "4");
    scoreField.setAttribute("type", "text");
    scoreField.setAttribute("value", 0);
    scoreField.setAttribute("class", "scoreField");
    document.body.appendChild(scoreField);


//Add a paragraph to make sure next player is on new line
    var p = document.createElement('p');
    document.body.appendChild(p);






}
