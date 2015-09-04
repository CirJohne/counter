
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

// describe("failedTest", function(){
//   it ("should fail", function(){
//
//     expect(1).toEqual(10);
//   });
// });
