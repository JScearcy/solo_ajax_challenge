
$(document).ready(function() {
    var $targetDiv = $('#data');
    function appendToDOM(){
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
    $.ajax('handlebars.html', {
      success: function(response){
      $('body').append(response);
      appendToDOM();
    },
      error: function(request, errorType, errorMessage){
        alert(errorType + " " + errorMessage);
      }
    });
});
