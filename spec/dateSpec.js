describe("addDate", function(){
it("should create an element with date", function(){
  var fakeElement = {};
  var fakeDocument = {
    createElement: function(type){
      return fakeElement;
    }
  };

  var date = addDate(fakeDocument);
  expect(date.id).toEqual("pDate");
  // expect(textField.size).toEqual(10);
});
});


// describe("addPlayerWithArgs", function(){
//   it ("should add 7 elements to playerDiv", function(){
//       var playerDiv = jasmine.createSpyObj('playerDiv', ['appendChild']);
//
//       addPlayerWithArgs(playerDiv,
//         function(elementType){
//           return {
//             appendChild: function(){}
//           };
//         },
//         function(text){}
//       );
//
//       expect(playerDiv.appendChild.calls.count()).toEqual(7);
//   });
// });
