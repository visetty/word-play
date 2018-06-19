$(document).ready(function() {
  $("#blanks form").submit(function(event){

      var textOneInput = $("input#textOne").val();
      //console.log(textOneInput);
      $("textOne").val('');
      var r = /[,.!?\s]+/;
      var resultArray = textOneInput.split(r);
      console.log(resultArray);
      //return resultArray;
      alert(resultArray);

      var displayArray = [];

      resultArray.forEach(function(rslt){
        var x = rslt;
        if (x.length > 2) {
          displayArray.push(x);
        }
        //$("#list-item1").append("<li>" + listItem.toUpperCase() + "</li>");
      });

      alert(displayArray);
      $(".list").show();

      event.preventDefault();
  });
});


//function splitString(stringToSplit, separator) {
//  var arrayOfStrings = stringToSplit.split(separator);
