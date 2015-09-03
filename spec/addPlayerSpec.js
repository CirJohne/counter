
describe("addPlayerWithArgs", function(){
  it ("should add 7 elements to playerDiv", function(){
      var playerDiv = jasmine.createSpyObj('playerDiv', ['appendChild'])

      addPlayerWithArgs(playerDiv);

      expect(playerDiv.appendChild.calls.count()).toEqual(7);
  });
});
