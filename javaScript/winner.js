var j = -1;
function declareWinner(){

  for(i = 0; i < winnerArray.length; i+=2){
    j = j+2;
    console.log(winnerArray);
    console.log(j);
var p = document.createElement('p');
var player = document.getElementById(winnerArray[i]).value;
if (i===0){
            var pText = document.createTextNode("And the winner is " + player + " with "+ winnerArray[j] + " points!!!!" );}
else {
      var pText = document.createTextNode(player + " with "+ winnerArray[j] + " points!" );}
p.appendChild(pText);
document.getElementById('winnerDiv').appendChild(p);


                                          }
                        }
