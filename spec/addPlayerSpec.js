function getNumberOfElementsOn(element){
  return element.childElementCount;
}

describe("addPlayer", function(){
  it ("should add 7 elements to playerDiv", function(){
      var playerDiv = document.createElement("div");
      playerDiv.id = "playerDiv";
      document.body.appendChild(playerDiv);
      playerDiv = document.getElementById("playerDiv");
      expect(playerDiv).not.toBe(null);

      expect(getNumberOfElementsOn(playerDiv)).toEqual(0);

      addPlayer();

      playerDiv = document.getElementById("playerDiv");
      expect(getNumberOfElementsOn(playerDiv)).toEqual(7);
  });
});
