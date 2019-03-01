'use strict';
const bigIMG = document.querySelector('#active-main-img');
const imgTitleElement = document.querySelector('#main-img-data-container>h2');
const imgTextElement = document.querySelector('#main-img-data-container>p');

let listOfImgSources = [
  {id: 0, source: '../static/images/pic1.jpg', altText: 'Freiburg', imgTitle: 'Freiburg', imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {id: 1, source: '../static/images/pic2.jpg', altText: 'Houses of Freiburg', imgTitle: 'Houses of Freiburg', imgText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {id: 2, source: '../static/images/pic3.jpg', altText: 'Freiburg', imgTitle: 'Colmar', imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
];

let activeImage = listOfImgSources[0];


//right arrow
let rightArrow = document.getElementById('right');
rightArrow.onclick = function (event) {
  let mainImage = event.currentTarget.previousElementSibling.children[0];

  let index = 0;

  listOfImgSources.forEach(oneImgObj => {
    if (oneImgObj.source === mainImage.getAttribute('src')) {
      index = oneImgObj.id;
    }
  });

  if (index === listOfImgSources.length - 1) {
    activeImage = listOfImgSources[0];
  } else {
    activeImage = listOfImgSources[index+1];
  }

  bigIMG.setAttribute('src', activeImage.source)
  imgTitleElement.textContent = activeImage.imgTitle;
  imgTextElement.textContent = activeImage.imgText;
};



//left arrow
let leftArrow = document.getElementById('left');
leftArrow.onclick = function (event) {
  let mainImage = event.currentTarget.nextElementSibling.children[0];

  let index = 0;

  listOfImgSources.forEach(oneImgObj => {
    if (oneImgObj.source === mainImage.getAttribute('src')) {
      index = oneImgObj.id;
    }
  });

  if (index === 0) {
    activeImage = listOfImgSources[listOfImgSources.length - 1];
  } else {
    activeImage = listOfImgSources[index-1];
  }

  bigIMG.setAttribute('src', activeImage.source)
  imgTitleElement.textContent = activeImage.imgTitle;
  imgTextElement.textContent = activeImage.imgText;
};

