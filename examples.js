
$(document).ready(function() {
    var $targetDiv = $('#data');

    $.ajax('data.json', {
        success: function(response){
          response.forEach(function(obj){
            var $newDataDiv = $('<div>');
            var $colorPtag = $('<p>');
            $targetDiv.append($newDataDiv.append($colorPtag.text(obj.color)).css('background-color', obj.value));
          });
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });
});
