
$(document).ready(function() {
    var $targetDiv = $('#data');

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
});
