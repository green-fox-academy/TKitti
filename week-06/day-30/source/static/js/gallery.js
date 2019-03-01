'use strict';
const bigIMG = document.querySelector('#active-main-img');
const imgTitleElement = document.querySelector('#main-img-data-container>h2');
const imgTextElement = document.querySelector('#main-img-data-container>p');

let listOfImgSources = [
  {id: 0, source: '../static/images/pic1.jpg', altText: 'Freiburg', imgTitle: 'Freiburg', imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {id: 1, source: '../static/images/pic2.jpg', altText: 'Houses of Freiburg', imgTitle: 'Houses of Freiburg', imgText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {id: 2, source: '../static/images/pic3.jpg', altText: 'Freiburg', imgTitle: 'Colmar', imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {id: 3, source: '../static/images/pic4.jpg', altText: 'Rheinfall', imgTitle: 'Rheinfall (Schaffhausen)', imgText: 'The Rheinfall or Rhine falls is one of the most powerful waterfalls on the main land in Europe and is located near Schaffhausen in the Northeast of Switzerland.'}
];

let activeImage = listOfImgSources[0];


function setMainBigImage () {
  bigIMG.setAttribute('src', activeImage.source)
  imgTitleElement.textContent = activeImage.imgTitle;
  imgTextElement.textContent = activeImage.imgText;
}


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

  setMainBigImage();

  let actualPicture = mainImage
  thumbnailToMiddle(actualPicture);
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

  setMainBigImage();

  let actualPicture = mainImage
  thumbnailToMiddle(actualPicture);
};




//thumbnails
const thumbnailLeftElement = document.querySelectorAll('#thumbnail-container > div > img')[0];
const thumbnailMiddleElement = document.querySelectorAll('#thumbnail-container > div > img')[1];
const thumbnailRightElement = document.querySelectorAll('#thumbnail-container > div > img')[2];


//temporary storing variables
let activeLeftThumbnail = listOfImgSources[listOfImgSources.length - 1];
let activeMiddleThumbnail = listOfImgSources[0];
let activeRightThumbnail = listOfImgSources[1];


//LEFT thumbnail
thumbnailLeftElement.onclick = function (event) {
  let actualPicture = event.currentTarget;
  thumbnailToMiddle(actualPicture);
}

//RIGHT thumbnail
thumbnailRightElement.onclick = function (event) {
  let actualPicture = event.currentTarget;
  thumbnailToMiddle(actualPicture);
}


//moving thumbnail
function thumbnailToMiddle (actualPicture) {
  let index = 0;

  listOfImgSources.forEach(oneImgObj => {
    if (oneImgObj.source === actualPicture.getAttribute('src')) {
      index = oneImgObj.id;
    }
  });

  if  (index === 0) {
    activeLeftThumbnail = listOfImgSources[listOfImgSources.length - 1];
    activeMiddleThumbnail = listOfImgSources[index];
    activeRightThumbnail = listOfImgSources[index + 1];
  }
  else if (index === 1) {
    activeLeftThumbnail = listOfImgSources[index - 1];
    activeMiddleThumbnail = listOfImgSources[index];
    activeRightThumbnail = listOfImgSources[index + 1];
  } 
  else if (index === listOfImgSources.length - 1) {
    activeLeftThumbnail = listOfImgSources[index - 1];
    activeMiddleThumbnail = listOfImgSources[index];
    activeRightThumbnail = listOfImgSources[(listOfImgSources.length - 1) - index];
  }
  else {
    activeLeftThumbnail = listOfImgSources[index - 1];
    activeMiddleThumbnail = listOfImgSources[index];
    activeRightThumbnail = listOfImgSources[index + 1];
  }
  
  thumbnailLeftElement.setAttribute('src', activeLeftThumbnail.source);
  thumbnailMiddleElement.setAttribute('src', activeMiddleThumbnail.source);
  thumbnailRightElement.setAttribute('src', activeRightThumbnail.source);
  
  activeImage = activeMiddleThumbnail;
   
  setMainBigImage();
}
