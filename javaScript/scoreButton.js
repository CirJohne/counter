// These functions add or deduct 1 point from the scorefield of relevant player.
// The function checks the localScoreField and then writes to the same field
//localScoreField is the id of scoreField (score1, score2 etc)

function plussa(localScoreField){
  countedScore  = parseInt(document.getElementById(localScoreField).value) ;

   newScore = countedScore + 1;

  document.getElementById(localScoreField).value = newScore;
}

function minus(localScoreField){
  countedScore  = parseInt(document.getElementById(localScoreField).value) ;

   newScore = countedScore - 1;

  document.getElementById(localScoreField).value = newScore;

}
