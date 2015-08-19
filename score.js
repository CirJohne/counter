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
