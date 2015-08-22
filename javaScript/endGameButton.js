//Add a button called "End Game" which takes the player to another page (endGame.html)

var endGameButton = document.createElement("BUTTON");
var endGameText = document.createTextNode("End game");
endGameButton.id = endGameButton;
endGameButton.onclick = function(){location.href='endGame.html';};
endGameButton.appendChild(endGameText);
document.getElementById('endDiv').appendChild(endGameButton);
