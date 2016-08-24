
$(document).on("ready", function(){

  $("form").on("submit", function (event) {

    $.ajax({

        // What kind of request
        method: "GET",

        // The URL for the request
        url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",

        // The data to send aka query parameters
        //data: 'json',
        data: $("form").serialize(),

        // Code to run if the request succeeds;
        // the response is passed to the function
        success: onSuccess,

        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
  //      error: onError
    });

    event.preventDefault();

  });

});

//??????????
//var formData = $(this).serialize();


  function onSuccess(json) {
    for (var i = 0; i < json.data.length; i++) {
    $(".gif-gallery").append("<img src=" + (json.data[i].images.fixed_height.url) + ">");
//    console.log(json);
//    $("div").append("<h1>"+json.title+"</h1>");
  }
}

//  function onError(xhr, status, errorThrown) {
//    alert("Sorry, there was a problem!");
//    console.log("Error: " + errorThrown);
//    console.log("Status: " + status);
//    console.dir(xhr);
//  }

//search url
//http://api.giphy.com/v1/gifs/search
//query string
//data: $("form").serialize(),
//should give me this:
//cats&api_key=dc6zaTOxFJmzC
//we'll need to limit
