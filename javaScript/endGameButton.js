//Add a button called "End Game" which takes the player to another page (endGame.html)

var endGameButton = document.createElement("BUTTON");
var endGameText = document.createTextNode("End game");
endGameButton.id = endGameButton;
endGameButton.onclick = function(){endGameWrapper();};
endGameButton.appendChild(endGameText);
document.getElementById('endDiv').appendChild(endGameButton);

//The array currentPlayers contains all the id's of current players.
var currentPlayers = [];

// playersAndScores will be used for sorting scores to be able to present winner
var playersAndScores =[];

//Create a hash with playername as keys and scores as values.
function createObject(){
  for (var i = 0; i < currentPlayers.length; i++){
    var a = currentPlayers[i];
    scoreField = a.slice(5,7);
    currentScoreField = "score" + scoreField;
    // console.log(currentScoreField);
    var b = document.getElementById(currentScoreField).value;
    playersAndScores.push({key:a, value: b});
    console.log(playersAndScores);
  }
}

// Figure out how to sort playersAndScores FUNKAR INTE
var winner = [];

function findWinner(playersAndScores){

playersAndScores.sort(function(a, b){
  return parseInt(b.value)-parseInt(a.value);
  console.log(playersAndScores);

});
                                      }

// wrapper to fire off all functions needed to declare winner
function endGameWrapper(){
  createObject();
  findWinner(playersAndScores);
  winner.push(playersAndScores);
  console.log(winner);
  alert(winner);
}
