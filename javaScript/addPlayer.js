//-------------------
// Add a player with name Player1, Player2 etc
//-------------------

//playerNr is used to start of newPlayerNr
var playerNr = 1;

// This function enables an extration of document.appendChild
function addPlayer(){
  addPlayerWithArgs(document.getElementById("playerDiv"));
};
// This function enables creation of an input-element with attributes
function createTextField(create, what, id, size, title, value, className, tabIndex){
  var temp = create.createElement(what);
  temp.type = "text";
  temp.id = id;
  temp.size = size;
  temp.title = title;
  temp.value = value;
  temp.className = className;
  temp.tabIndex = tabIndex;

  return temp;
};
function createTextNode(create,textNode){
  var tempText = create.createTextNode(textNode);
  return tempText;
}
function addPlayerWithArgs(playerDiv) {
// newPlayerNr is used to iterate added player and add 1 on every turn
    newPlayerNr = playerNr++;


// These are used to be able to point the functions plussa(),minus() and manualScore() to the scorefield of the right player
     var playerNameId = "field" + newPlayerNr;
     var id_score = "score" + newPlayerNr;
     var manualScoreId = "manualscore" + newPlayerNr;
     var plussetId =  "plusset" + newPlayerNr;
     var minusetId = "minus" + newPlayerNr;
     var removeButtonId = "removeButton" + newPlayerNr;

//Add field where player may enter name.

   var playerName = createTextField(document, "input", "field" + newPlayerNr, 20,
   "You may change name.", "Player" + newPlayerNr, "nameField");
   playerName.onclick = function(){this.select();}
   playerDiv.appendChild(playerName);



// Add the +button

    var plusset = createTextField(document,"button","plusset" + newPlayerNr,
    0, "Click to add 1 point", null, "button", -1);
    var plussetText = createTextNode(document,"+1");
    // plusset.tabIndex =-1;
    plusset.onclick = function() {plussa(id_score);};
    plusset.appendChild(plussetText);
    playerDiv.appendChild(plusset);

// Add the -button
    var minuset = createTextField(document,"button","minus" + newPlayerNr,
    0, "Click to withdraw 1 point", null, "button", -1);
    var minusetText = createTextNode(document,"-1");
    // minuset.tabIndex = -1;
    minuset.onclick = function() {minus(id_score);}
    minuset.appendChild(minusetText);
    playerDiv.appendChild(minuset);

// Add manual scorefield
    var manualScore = createTextField(document,"input", "manualscore" + newPlayerNr,
    4, "In this field you may add score manually. Ex '40' or '-20'.", 0, "manualScoreField" );
    manualScore.onclick = function(){this.select();}
    manualScore.onkeydown = function(e){if(e.keyCode==13){manualScoreCalc(manualScoreId, id_score)}};
    manualScore.onkeyup  = function(e){if(e.keyCode==13){manualScore.value=0; this.select();}};
    playerDiv.appendChild(manualScore);


// Add scorefield and make it readonly
    var scoreField = createTextField(document,"input","score" + newPlayerNr, 4,
    "Total score", 0, "scoreField", -1)
    // scoreField.tabIndex = -1;
    scoreField.readOnly = "readonly";
    playerDiv.appendChild(scoreField);

// Add removeButton which will delete entire row by calling removePlayer()
      var removeButton = document.createElement("BUTTON");
      var removeButtonText = document.createTextNode("Remove player");
      removeButton.id = removeButtonId;
      removeButton.onclick = function(){removePlayer(playerNameId, id_score, manualScoreId, plussetId, minusetId, removeButtonId)};
      removeButton.tabIndex = -1;
      removeButton.className = "button";
      removeButton.appendChild(removeButtonText);
      playerDiv.appendChild(removeButton);

//Add a paragraph to make sure next player is on new line
    var p = document.createElement('p');
    playerDiv.appendChild(p);

    //Add id to currentPlayers[]
    currentPlayers.push(playerNameId);
}
