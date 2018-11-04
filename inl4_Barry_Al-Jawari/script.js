"use strict";
//Barry Al-Jawari AE2699

document.getElementById("search-form").onsubmit = function (event) {
    event.preventDefault();
    var movieTitle = document.querySelector("#query").value;
    var movieList = document.querySelector("#result");

    if (movieTitle == "") {
        alert("Du angav ingen filmtitel!");
    } else {
        while (movieList.firstChild) {
            movieList.removeChild(movieList.firstChild);
        }
        var omdbAPI = new XMLHttpRequest();
        var omdbURL = "http://www.omdbapi.com/?s=" + document.querySelector("#query").value + "&type=movie";


        omdbAPI.open("get", omdbURL, true);
        omdbAPI.send();

        omdbAPI.addEventListener("load", function () {
            var result = JSON.parse(this.responseText);
                var counter;
              if (result.Search == undefined) {
                alert("Din sökning gav inga resultat!");				
              } else {
                for (counter = 0; counter < result.Search.length; counter++) {  
                    var text = document.createTextNode(result.Search[counter].Title);
                    var newMovie = document.createElement("p");
                    newMovie.appendChild(text);
                    newMovie.className = "searchResult";
                    movieList.appendChild(newMovie);
                }
            }
        });
    }
};
