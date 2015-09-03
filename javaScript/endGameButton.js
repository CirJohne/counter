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

// Sort playersAndScores
function sortPlayersAndScores(playersAndScores){

playersAndScores.sort(function(a, b){
  return parseInt(b.value)-parseInt(a.value);


});

                                      }
// Variables needed for fillWinnerArray
var key=[];
var value=[];
var winnerArray=[];
// Create array with only keys and values
function fillWinnerArray(playersAndScores)              {
  key = playersAndScores.map(function(playersAndScores) {
  return playersAndScores['key'];
});
value = playersAndScores.map(function(playersAndScores) {
return playersAndScores['value'];
});
for (i=0; i < key.length; i++){
  winnerArray.push(key[i]);
  winnerArray.push(value[i]);
                              }
                                                        }
// Set border for winnerDiv
 function winnerDivCss(){
   var css = document.createElement("style");
   css.type = "text/css";
   css.innerHTML = "#winnerDiv { border-style: groove; width: 50% }";
   document.body.appendChild(css);
 }

// wrapper to fire off all functions needed to declare winner
function endGameWrapper(){
  createObject();
  sortPlayersAndScores(playersAndScores);
  fillWinnerArray(playersAndScores);
  declareWinner();
  winnerDivCss();
  console.log(key);
  console.log(value);
  console.log(winnerArray);
                          }
