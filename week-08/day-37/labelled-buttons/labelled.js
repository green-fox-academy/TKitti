'use strict';

let iconContainers = document.getElementsByClassName('icon-container');
let buttonContainers = document.getElementsByClassName('button-container');

function showButton (event) {
  event.target.children[1].style.display = 'block';

  if (event.target.children[0].className === 'icon-container first') {
      event.target.children[0].style.color = 'red';
  }
    
  if (event.target.children[0].className === 'icon-container second') {
      event.target.children[0].style.color = 'green';
  }
}

function hideButton (event) {
  event.target.children[1].style.display = 'none';

  if (event.target.children[0].className === 'icon-container first') {
    event.target.children[0].style.color = 'white';
  }
    
  if (event.target.children[0].className === 'icon-container second') {
    event.target.children[0].style.color = 'white';
  }
}

for (let i = 0; i < iconContainers.length; i++) {
  buttonContainers[i].addEventListener('mouseenter', showButton);
  buttonContainers[i].addEventListener('mouseleave', hideButton);
}