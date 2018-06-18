$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var textOneInput = $("input#textOne").val();
    $("textOne").val('');
      var resultArray = textOneInput.split('');
      return resultArray;
      event.preventDefault();
  });
});
