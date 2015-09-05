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
