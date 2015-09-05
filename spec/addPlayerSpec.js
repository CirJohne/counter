
describe("addPlayerWithArgs", function(){
  it ("should add 7 elements to playerDiv", function(){
      var playerDiv = jasmine.createSpyObj('playerDiv', ['appendChild']);

      addPlayerWithArgs(playerDiv,
        function(elementType){
          return {
            appendChild: function(){}
          };
        },
        function(text){}
      );

      expect(playerDiv.appendChild.calls.count()).toEqual(7);
  });
});

describe("createNewElement", function(){
  it ("should create a new element", function(){
    var fakeElement = {};
    var fakeDocument = {
      createElement: function(type){
        return fakeElement;
      }
    };

    var textField = createNewElement(fakeDocument, "input","field1",10,"title",0,"className",0);
    expect(textField.id).toEqual("field1");
    expect(textField.size).toEqual(10);
  });
});




describe("addScore", function(){

 it("should subtract whatever value given", function(){
   var fakeScore = 10;
   var val = {"value": fakeScore};

   var fakeDocument = {
     getElementById : function(x){
       return val;
     }
   };

   var value = 1;
   expect(addScore(fakeDocument,"fieldId", value))
     .toEqual(fakeScore + value);

   expect(fakeDocument.getElementById("fieldId").value).toEqual(fakeScore + value);

 });

});
