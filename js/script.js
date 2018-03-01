// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
  function giphyURLWithSearchTerm(searchTerm) {
      // write a function that will return a url for the giphy API with
      // the searchTerm provided in the parameters
      var url = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
      return url;
  }

  function appendImageToGallery(srcURL) {
      // write a function that will append an <img> to the div with class="gallery"
      // using the URL provided in the parameters
      for(var i = 0; i < 10; i ++){
       $(".gallery").append("<img src=" + srcURL + ">");
      }
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
      // use $.ajax to call the giphy api with the given search term from the parameters.
      // get the first image url from the ajax response
      // use appendImageToGallery to put the image onto the screen
      var giphyURL = giphyURLWithSearchTerm(searchTerm);
      $.ajax({
      url: giphyURL,
      method: "GET",
      success: function(response) {
       var random = Math.floor(Math.random() * giphyURL.length);
       var url = response.data[random].images.original.url;
       appendImageToGallery(url);
       
      },
    }); 

  }


$(document).ready(function(){
  
  // WRITE A CLICK HANDLER HERE
  /*
    1. click handler function
    2. get the typed input from the search input box
    3. call the functions below!
  */
  $("#btn").click(function(){
   var type = $("#srch-term").val();
   callGiphyAPIWithSearchTerm(type);
  });
});
