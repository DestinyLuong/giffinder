// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  // WRITE A CLICK HANDLER HERE
  /*
    1. click handler function
    2. get the typed input from the search input box
    3. call the functions below!
  */
  
  function giphyURLWithSearchTerm(searchTerm) {
      // write a function that will return a url for the giphy API with
      // the searchTerm provided in the parameters
      var url = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
  }

  function appendImageToGallery(srcURL) {
      // write a function that will append an <img> to the div with class="gallery"
      // using the URL provided in the parameters
       $("body").append("<img src=" + srcURL + ">");
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
      // use $.ajax to call the giphy api with the given search term from the parameters.
      // get the first image url from the ajax response
      // use appendImageToGallery to put the image onto the screen
      $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
           // Log the whole response to the console
            //console.log(response);
            
           // Log the first image of the data to the console
            //var one = response["data"];
            //console.log(one[0].url);
           // Log the "type" property of1 the first image object to the console
            //console.log(one[0].type);
           // Log the "title" property of the first image object to the console
            //console.log(one[0].title);
      },
    }); 

  }
});
