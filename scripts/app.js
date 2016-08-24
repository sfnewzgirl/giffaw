
$(document).on("ready", function(){

  $("form").on("submit", function (event) {

    event.preventDefault();

    var forInput = $(this).serialize();

    var newUrl = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + forInput;

    $.ajax({

        method: "GET",

        url: newUrl,

        // The data to send aka query parameters
        //data: 'json',
        data: 'json',

        // Code to run if the request succeeds;
        // the response is passed to the function
        success: onSuccess,

        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
  //      error: onError
    });

  });

});

  function onSuccess(json) {
    for (var i = 0; i < json.data.length; i++) {
    $(".gif-gallery").append("<img src=" + (json.data[i].images.fixed_height.url) + ">");
  }
}

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  }
