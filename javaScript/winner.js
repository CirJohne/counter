// This isn't correct. Now the function uses the positions in winnerArray. It should compare values and also figure out if there is a tie.

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
else if (i===2){
            var pText = document.createTextNode("In second place we find " + player + " with "+ winnerArray[j] + " points!!!" );}
else if (i===4){
            var pText = document.createTextNode("Third and final player on the podium is " + player + " with "+ winnerArray[j] + " points!" );}
else {
      var pText = document.createTextNode("Not in the top3, but "+ player + " got "+ winnerArray[j] + " points!" );}
p.appendChild(pText);
document.getElementById('winnerDiv').appendChild(p);


                                          }
                        }
