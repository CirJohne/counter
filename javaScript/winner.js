var j = -1;
function declareWinner(){

  for(i = 0; i < winnerArray.length; i+=2){
    j = j+2;
    console.log(winnerArray);
    console.log(j);
var p = document.createElement('p');
var pText = document.createTextNode((document.getElementById(winnerArray[i]).value)+ " with "+ winnerArray[j]+ " points!" );
p.appendChild(pText);
document.getElementById('winnerDiv').appendChild(p);


                                          }
                        }
