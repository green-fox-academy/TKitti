'use strict';

let genres = document.getElementById('genre');
let movies = document.getElementById('movie');
let selectedMovie = document.getElementsByTagName('span')[0];

let movieOptions = Array.from(movies.children);

let moviesDatabase = {
  'all': [],
  'scifi': [],
  'drama': [],
  'comedy': []
}

function pushingElementsToDatabase () {
  for (let i = 1; i < movieOptions.length; i++) {
    if (movieOptions[i].className == 'scifi') {
      moviesDatabase.all.push(movieOptions[i]);
      moviesDatabase.scifi.push(movieOptions[i]);
    } else if (movieOptions[i].className == 'drama') {
      moviesDatabase.all.push(movieOptions[i]);
      moviesDatabase.drama.push(movieOptions[i]);
    } else if (movieOptions[i].className == 'comedy') {
      moviesDatabase.all.push(movieOptions[i]);
      moviesDatabase.comedy.push(movieOptions[i]);
    }
  }
}

pushingElementsToDatabase();


genres.addEventListener('change', function() {
  let indexOfOption = genres.selectedIndex;
  removeMovies();

  if (indexOfOption === 1) {
    filterMovies('scifi');
  } else if (indexOfOption === 2) {
    filterMovies('drama');
  } else if (indexOfOption === 3) {
    filterMovies('comedy');
  } 
});


function removeMovies () {
  let loopLength = movies.length;
  for (let k = 1; k < loopLength; k++) {
    movies.children[1].remove();
  }
}

function filterMovies (genre) {
  for (let i = 0; i < moviesDatabase[genre].length; i++) {
    console.log(moviesDatabase[genre][i]);
    movies.appendChild(moviesDatabase[genre][i]);
  }
}

movies.addEventListener('change', function () {
  let indexOfOption = movies.selectedIndex;
  selectedMovie.textContent = movies.children[indexOfOption].value
});