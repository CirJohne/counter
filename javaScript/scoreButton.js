// The function checks the localScoreField and then writes to the same field
//localScoreField is the id of scoreField (score1, score2 etc)

function addScore(playerDiv, localScoreField, term){
  countedScore  = parseInt(playerDiv.getElementById(localScoreField).value) ;

   newScore = countedScore + term;

  playerDiv.getElementById(localScoreField).value = newScore;
  return newScore;
}
