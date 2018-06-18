$(document).ready(function() {
  $("#blanks form").submit(function(event){

    var textOneInput = $("input#textOne").val();
    //console.log(textOneInput);
    $("textOne").val('');
    var r = /[,.!?\s]+/;
    var resultArray = textOneInput.split(r);
    console.log(resultArray);
    //return resultArray;
      event.preventDefault();
  });
});


//function splitString(stringToSplit, separator) {
//  var arrayOfStrings = stringToSplit.split(separator);
