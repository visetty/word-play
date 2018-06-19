$(document).ready(function() {
  $("#blanks form").submit(function(event){
      event.preventDefault();
      var textOneInput = $("input#textOne").val();
      //console.log(textOneInput);
      $("textOne").val('');
      var r = /[,.!?\s]+/;
      var resultArrays = textOneInput.split(r);
      //console.log(resultArray);
      //return resultArray;
      //alert(resultArray);
        resultArrays.forEach(function(resultArray){
          $("#resultString").append("<li>" + resultArray + "</li>");
        });

      var displayArray = [];

      resultArrays.forEach(function(rslt){
        var x = rslt;
        if (x.length >= 3) {
          displayArray.push(x);
        }
      });




  });
});


//function splitString(stringToSplit, separator) {
//  var arrayOfStrings = stringToSplit.split(separator);
