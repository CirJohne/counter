describe("addDate", function(){
it("should create an element with date", function(){
  var dateDiv = jasmine.createSpyObj('dateDiv', ['appendChild']);

  addDate(dateDiv,
    function(elementType){
      return {
        appendChild: function(){}
      };
    },
    function(p){}
  );

  expect(dateDiv.appendChild.calls.count()).toEqual(1);
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
