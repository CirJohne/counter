
// Add a player with name Player1, Player2 etc
//playerNr is used to start of newPlayerNr
var playerNr = 1;

function addPlayer() {
// newPlayerNr is used to iterate added player and add 1 on every turn
    newPlayerNr = playerNr++;

//Add field where player may enter name.
   var playerName = document.createElement("INPUT");
   playerName.id= "field" + newPlayerNr;
   playerName.size = 20;
   playerName.type = "text";
   playerName.value = "Player "+ newPlayerNr;
   playerName.onclick = function(){this.select();}
   playerName.className = "nameField";
   document.body.appendChild(playerName);

//id_score is used to be able to point the functions plussa() and minus() to the scorefield of the right player
   var id_score = "score" + newPlayerNr;

// Add the +button
    var plusset = document.createElement("BUTTON");
    var plussetText = document.createTextNode("+1");
    plusset.id = "plusset" + newPlayerNr;
    plusset.tabIndex =-1;
    plusset.onclick = function() {plussa(id_score);};
    plusset.className = "button";
    plusset.appendChild(plussetText);
    document.body.appendChild(plusset);
// Add the -button
    var minuset = document.createElement("BUTTON");
    var minusetText = document.createTextNode("-1");
    minuset.id = "minus" + newPlayerNr;
    minuset.tabIndex = -1;
    minuset.onclick = function() {minus(id_score);}
    minuset.className = "button";
    minuset.appendChild(minusetText);
    document.body.appendChild(minuset);
// Add scorefield and make it readonly
    var scoreField = document.createElement("INPUT");
    scoreField.id = id_score;
    scoreField.tabIndex = -1;
    scoreField.readOnly = "readonly";
    scoreField.size = 4;
    scoreField.type = "text";
    scoreField.value = 0;
    scoreField.className = "scoreField";
    document.body.appendChild(scoreField);


//Add a paragraph to make sure next player is on new line
    var p = document.createElement('p');
    document.body.appendChild(p);






}
