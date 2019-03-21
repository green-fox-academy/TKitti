'use strict';

let stars = document.getElementById('stars');
stars.textContent = '';
for (let i = 0; i < 5; i++) {
  stars.textContent += '☆';
}
let starsArray = stars.textContent.split('');


//GET method: list all songs
let request = new XMLHttpRequest();
request.open('GET', '/awesome', true);
request.setRequestHeader('Content-Type', 'application/json');
request.onload = () => {
  let content = JSON.parse(request.responseText);

  for (let index = 0; index < content.length; index++) {
    createSongElement(content, index);
  }
}
request.send();



//creating DOM elements
function createArticleElement (content, index) {
  let articleElement = document.createElement('article');
  articleElement.dataset.id = content[index].id;
  return articleElement;
}

function createInfoContainerElement () {
  let infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');
  return infoContainer;
}

function createAuthorElement (content, index) {
  let authorElement = document.createElement('p');
  authorElement.classList.add('author');
  authorElement.textContent = content[index].author;
  return authorElement;
}

function createTitleElement (content, index) {
  let titleElement = document.createElement('p');
  titleElement.classList.add('title');
  titleElement.textContent = content[index].title;
  return titleElement;
}

function createGenreElement (content, index) {
  let genreElement = document.createElement('p');
  genreElement.classList.add('genre');
  genreElement.textContent = content[index].genre;
  return genreElement;
}

function createYearElement (content, index) {
  let yearElement = document.createElement('p');
  yearElement.classList.add('year');
  yearElement.textContent = content[index].year;
  return yearElement;
}

function createRatingElement () {
  let ratingElement = document.createElement('div');
  ratingElement.classList.add('rating');
  ratingElement.textContent = '';

  for (let i = 0; i < 5; i++) {
    ratingElement.textContent += '☆';
  }
  ratingElement.addEventListener('mouseenter', colorToYellow);
  ratingElement.addEventListener('mouseleave', removeYellowColor);
  return ratingElement;
}

function createButtonContainer () {
  let buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  return buttonContainer;
}

function createEditButton () {
  let editButton = document.createElement('button');
  editButton.textContent = 'edit rating';
  return editButton;
}

function createPlayButton () {
  let playButton = document.createElement('button');
  playButton.textContent = 'play';
  return playButton;
}

function createDeleteButton () {
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.addEventListener('click', processOnDelete);
  return deleteButton;
}


function createSongElement (content, index) {
  let songContainer = document.getElementById('song-container');
  let articleElement = createArticleElement(content, index);
  let infoContainer = createInfoContainerElement();
  let buttonContainer = createButtonContainer();

  infoContainer.appendChild(createAuthorElement(content, index));
  infoContainer.appendChild(createTitleElement(content, index));
  infoContainer.appendChild(createGenreElement(content,index));
  infoContainer.appendChild(createYearElement(content, index));
  infoContainer.appendChild(createRatingElement());
  articleElement.appendChild(infoContainer);
  
  buttonContainer.appendChild(createEditButton());
  buttonContainer.appendChild(createPlayButton());
  buttonContainer.appendChild(createDeleteButton());
  articleElement.appendChild(buttonContainer);

  songContainer.appendChild(articleElement);
}


function colorToYellow (event) {
  let actualRatingStars = event.currentTarget;
  actualRatingStars.classList.add('yellow');
}
function removeYellowColor (event) {
  let actualRatingStars = event.currentTarget;
  actualRatingStars.classList.remove('yellow');
}






//POST method: add a new song
let addSongButton = document.getElementById('submit');
addSongButton.addEventListener('click', function(e) {
  //prevents to reload the page
  //this way the new song will not appear automacically after the add song button was pushed
  e.preventDefault();
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', '/add', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  let data = {};
  data.author = document.getElementById('author-input').value;
  data.title = document.getElementById('title-input').value;
  data.genre = getCheckedRadioValue();
  data.year = document.getElementById('year-input').value;
  data.rating = document.getElementById('rating-input').value;

  httpRequest.send(JSON.stringify(data));
  httpRequest.onload = () => {
    let content = [JSON.parse(httpRequest.responseText)];
    createSongElement(content, 0);
    clearInputField();
  };
});



function getCheckedRadioValue () {
  const radioButtons = document.getElementsByName('genre');
  let selectedRadio;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedRadio = radioButtons[i].value;
    }
  }

  return selectedRadio;
}

function clearInputField () {
  document.getElementById('author-input').value = '';
  document.getElementById('title-input').value = '';
  document.getElementById('year-input').value = '';
  document.getElementById('rating-input').value = '';
}



function processOnDelete(event) {
  let actualDelete = event.currentTarget;
  let actualArticle = actualDelete.parentElement.parentElement;
  
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('DELETE', '/deletesong', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  let data = {
    "id": actualArticle.dataset.id
  }
  httpRequest.send(JSON.stringify(data));
  httpRequest.onload = () => {
    actualArticle.remove();
  };
}

