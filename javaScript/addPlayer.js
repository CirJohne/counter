//-------------------
// Add a player with name Player1, Player2 etc
//-------------------

//playerNr is used to start of newPlayerNr
var playerNr = 1;

function addPlayer(){
  addPlayerWithArgs(document.getElementById("playerDiv"),document);
};



function addPlayerWithArgs(playerDiv, create) {
// newPlayerNr is used to iterate added player and add 1 on every turn
    newPlayerNr = playerNr++;

    function createTextField(id, size, title, value,className){
      var temp = create.createElement("input");
      temp.type = "text";
      temp.id = id;
      temp.size = size;
      temp.title = title;
      temp.value = value;
      temp.className = className;
      return temp;
    };
// These are used to be able to point the functions plussa(),minus() and manualScore() to the scorefield of the right player
     var playerNameId = "field" + newPlayerNr;
     var id_score = "score" + newPlayerNr;
     var manualScoreId = "manualscore" + newPlayerNr;
     var plussetId =  "plusset" + newPlayerNr;
     var minusetId = "minus" + newPlayerNr;
     var removeButtonId = "removeButton" + newPlayerNr;

//Add field where player may enter name.

   var playerName = createTextField("field" + newPlayerNr, 20,
   "You may change name.", "Player" + newPlayerNr, "nameField");
   playerName.onclick = function(){this.select();}
   playerDiv.appendChild(playerName);



// Add the +button
    var plusset = create.createElement("BUTTON");
    var plussetText = create.createTextNode("+1");
    plusset.id = "plusset" + newPlayerNr;
    plusset.tabIndex =-1;
    plusset.title = "Click to add 1 point";
    plusset.onclick = function() {plussa(id_score);};
    plusset.className = "button";
    plusset.appendChild(plussetText);
    playerDiv.appendChild(plusset);

// Add the -button
    var minuset = create.createElement("BUTTON");
    var minusetText = create.createTextNode("-1");
    minuset.id = "minus" + newPlayerNr;
    minuset.tabIndex = -1;
    minuset.title = "Click to withdraw 1 point";
    minuset.onclick = function() {minus(id_score);}
    minuset.className = "button";
    minuset.appendChild(minusetText);
    playerDiv.appendChild(minuset);

// Add manual scorefield
    var manualScore = createTextField("manualscore" + newPlayerNr,
    4, "In this field you may add score manually. Ex '40' or '-20'.", 0, "manualScoreField" )
    create.createElement("INPUT");
    manualScore.onclick = function(){this.select();}
    manualScore.onkeydown = function(e){if(e.keyCode==13){manualScoreCalc(manualScoreId, id_score)}};
    manualScore.onkeyup  = function(e){if(e.keyCode==13){manualScore.value=0; this.select();}};
    playerDiv.appendChild(manualScore);


// Add scorefield and make it readonly
    var scoreField = createTextField("score" + newPlayerNr, 4,
    "Total score", 0, "scoreField")
    scoreField.tabIndex = -1;
    scoreField.readOnly = "readonly";
    playerDiv.appendChild(scoreField);

// Add removeButton which will delete entire row by calling removePlayer()
      var removeButton = create.createElement("BUTTON");
      var removeButtonText = create.createTextNode("Remove player");
      removeButton.id = removeButtonId;
      removeButton.onclick = function(){removePlayer(playerNameId, id_score, manualScoreId, plussetId, minusetId, removeButtonId)};
      removeButton.tabIndex = -1;
      removeButton.className = "button";
      removeButton.appendChild(removeButtonText);
      playerDiv.appendChild(removeButton);

//Add a paragraph to make sure next player is on new line
    var p = create.createElement('p');
    playerDiv.appendChild(p);

    //Add id to currentPlayers[]
    currentPlayers.push(playerNameId);
}
