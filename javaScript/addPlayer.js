//-------------------
// Add a player with name Player1, Player2 etc
//-------------------

//playerNr is used to start of newPlayerNr
var playerNr = 1;

function addPlayer() {
// newPlayerNr is used to iterate added player and add 1 on every turn
    newPlayerNr = playerNr++;

//Add field where player may enter name.
   var playerName = document.createElement("INPUT");
   playerName.id= "field" + newPlayerNr;
   playerName.size = 20;
   playerName.title = "You may change name.";
   playerName.type = "text";
   playerName.value = "Player "+ newPlayerNr;
   playerName.onclick = function(){this.select();}
   playerName.className = "nameField";
   document.body.appendChild(playerName);


// These are used to be able to point the functions plussa(),minus() and manualScore() to the scorefield of the right player
     var playerNameId = "field" + newPlayerNr;
     var id_score = "score" + newPlayerNr;
     var manualScoreId = "manual" + id_score;
     var plussetId =  "plusset" + newPlayerNr;
     var minusetId = "minus" + newPlayerNr;
     var removeButtonId = "removeButton" + newPlayerNr;
// Add the +button
    var plusset = document.createElement("BUTTON");
    var plussetText = document.createTextNode("+1");
    plusset.id = "plusset" + newPlayerNr;
    plusset.tabIndex =-1;
    plusset.title = "Click to add 1 point";
    plusset.onclick = function() {plussa(id_score);};
    plusset.className = "button";
    plusset.appendChild(plussetText);
    document.body.appendChild(plusset);

// Add the -button
    var minuset = document.createElement("BUTTON");
    var minusetText = document.createTextNode("-1");
    minuset.id = "minus" + newPlayerNr;
    minuset.tabIndex = -1;
    minuset.title = "Click to withdraw 1 point";
    minuset.onclick = function() {minus(id_score);}
    minuset.className = "button";
    minuset.appendChild(minusetText);
    document.body.appendChild(minuset);

// Add manual scorefield
    var manualScore = document.createElement("INPUT");
    manualScore.id = manualScoreId;
    manualScore.value = 0;
    manualScore.size = 4;
    manualScore.className = "manualScoreField";
    manualScore.title = "In this field you may add score manually. Ex '40' or '-20'.";
    manualScore.onclick = function(){this.select();}
    manualScore.onkeydown = function(e){if(e.keyCode==13){manualScoreCalc(manualScoreId, id_score)}};
    manualScore.onkeyup  = function(e){if(e.keyCode==13){manualScore.value=0; this.select();}};
    document.body.appendChild(manualScore);


// Add scorefield and make it readonly
    var scoreField = document.createElement("INPUT");
    scoreField.id = id_score;
    scoreField.tabIndex = -1;
    scoreField.title = "Total score";
    scoreField.readOnly = "readonly";
    scoreField.size = 4;
    scoreField.type = "text";
    scoreField.value = 0;
    scoreField.className = "scoreField";
    document.body.appendChild(scoreField);

// Add removeButton which will delete entire row by calling removePlayer()
      var removeButton = document.createElement("BUTTON");
      var removeButtonText = document.createTextNode("Remove player");
      removeButton.id = removeButtonId;
      removeButton.onclick = function(){removePlayer(playerNameId, id_score, manualScoreId, plussetId, minusetId, removeButtonId)};
      removeButton.tabIndex = -1;
      removeButton.className = "button";
      removeButton.appendChild(removeButtonText);
      document.body.appendChild(removeButton);

//Add a paragraph to make sure next player is on new line
    var p = document.createElement('p');
    document.body.appendChild(p);

}
