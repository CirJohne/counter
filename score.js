function plussa(newPlayerNr){
  countedScore  = parseInt(document.getElementById(newPlayerNr).value) ;

   newScore = countedScore + 1;

  document.getElementById(newPlayerNr).value = newScore;



}
function minus(){
  countedScore  = parseInt(document.getElementById(newPlayerNr).value) ;

   newScore = countedScore - 1;

  document.getElementById(newPlayerNr).value = newScore;

}
