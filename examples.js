

$(document).ready(function() {
  Handlebars.registerHelper('textColor', function(color){
    if(color == '#000'){
      return 'color:#FFF;'
    }
  });
  var $targetDiv = $('#Data');
  //this function pulls the JSON file and appends the color name to dom as well as adding it as a background-color
  function pullAndAppendToDOM(){
    $.ajax('data.json', {
        success: function(response){
            var source = $("#entry-template").html();
            var template = Handlebars.compile(source);
            $targetDiv.html(template(response))
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });
  }
  //this function pulls the html file for the template and appends it to the index
  $.ajax('handlebars.html', {
    success: function(response){
    $('body').append(response);
    pullAndAppendToDOM();
  },
    error: function(request, errorType, errorMessage){
      alert(errorType + " " + errorMessage);
    }
  });
});
