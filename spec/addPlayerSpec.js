
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

describe("createTextField", function(){
  it ("should create a textfield", function(){
    var fakeElement = {};
    var fakeDocument = {
      createElement: function(type){
        return fakeElement;
      }
    };

    var textField = createTextField(fakeDocument,"field1",10,"title",0,"className");
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
