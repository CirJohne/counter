function removePlayer(playerNameId, id_score, manualScoreId, plussetId, minusetId, removeButtonId){

          var playerName = document.getElementById(playerNameId);
          playerName.parentNode.removeChild(playerName);

          var score = document.getElementById(id_score);
          score.parentNode.removeChild(score);

          var manualScore = document.getElementById(manualScoreId);
          manualScore.parentNode.removeChild(manualScore);

          var plusset = document.getElementById(plussetId);
          plusset.parentNode.removeChild(plusset);

          var minuset = document.getElementById(minusetId);
          minuset.parentNode.removeChild(minuset);

          var removeButton = document.getElementById(removeButtonId);
          removeButton.parentNode.removeChild(removeButton);

}
