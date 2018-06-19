//business logic

var splitAndBuildFunction = function(inputText){

  var r = /[,.!?\s]+/;
  var resultArray = inputText.split(r);

  var outputArray = [];

  resultArray.forEach(function(rslt){
    if (rslt.length > 2) {
      outputArray.push(rslt);
    }
  });

  outputArray.reverse();
  return outputArray;
};

var contactTextFunction = function(inputArray){
  var displayText = inputArray.toString();
  return displayText;
};

//User-interface logic

$(document).ready(function() {
  $("#blanks form").submit(function(event){
      event.preventDefault();
      var textOneInput = $("input#textOne").val();
      $("#textOne").val('');

      var displayArray = splitAndBuildFunction(textOneInput);
      var displayText = contactTextFunction(displayArray);

      $("#resultString").html('');
      displayArray.forEach(function(item){
        $("#resultString").append("<li>" + item + "</li>");
      });
      $("#resultString").append("<li>" + displayText + "</li>");
  });
});


//function splitString(stringToSplit, separator) {
//  var arrayOfStrings = stringToSplit.split(separator);
