'use strict';

let navElement = document.getElementsByTagName('nav')[0];
let imgInspector = document.querySelector('.img-inspector');

let x = 0;
let y = 0;
let zoomPercentage = 50;

const moveImage = (event) => {
  if (event.target.getAttribute('data-direction') === 'up') {
    imgInspector.style['background-position'] = `${x}px ${y -= 10}px`;
  } else if (event.target.getAttribute('data-direction') === 'down') {
    imgInspector.style['background-position'] = `${x}px ${y += 10}px`;
  } else if (event.target.getAttribute('data-direction') === 'left') {
    imgInspector.style['background-position'] = `${x -= 10}px ${y}px`;
  } else if (event.target.getAttribute('data-direction') === 'right') {
    imgInspector.style['background-position'] = `${x += 10}px ${y}px`;
  }
}

const zoomImage = (event) => {
  if (event.target.getAttribute('data-direction') === 'in') {
    imgInspector.style['background-size'] = `${zoomPercentage += 20}%`;
  } else if (event.target.getAttribute('data-direction') === 'out') {
    imgInspector.style['background-size'] = `${zoomPercentage -= 20}%`;
  }
}

navElement.addEventListener('click', moveImage);
navElement.addEventListener('click', zoomImage);