// This field enable the user to add score manually

function manualScoreCalc(manualScoreField, localScoreField){
  scoreToAdd = parseInt(document.getElementById(manualScoreField).value);
  scoreNow = parseInt(document.getElementById(localScoreField).value)
  TotalScore = scoreNow + scoreToAdd
  document.getElementById(localScoreField).value = TotalScore;

}
