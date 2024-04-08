
// lines 3 through 7 are for the search bar. 
let searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("keydown", function () {
      const inputElements = document.getElementsByTagName("input");
      console.log(inputElements);
    });

// lines 10 through 13 are for the google search button
let searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", function () {
      window.location.href = "https://www.google.com/search?q=";
    });

// lines 16 through 19 are for the I'm feeling lucky button
let feelingLucky = document.getElementById("lucky-button");
    feelingLucky.addEventListener("click", function () {
      window.location.href = "https://www.google.com/search?&btnI";
    });


















// Line 36 is just a test run. 
// document.getElementById('Example1').innerHTML = 'Javascript rules!';