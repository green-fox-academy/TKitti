let unorderedList = document.querySelector('.asteroids');
let greenFox = document.createElement('li');
greenFox.textContent = 'The Green Fox';

let lampLighter = document.createElement('li');
lampLighter.textContent = 'The Lamplighter'; 

unorderedList.appendChild(greenFox);
unorderedList.appendChild(lampLighter);



let container = document.querySelector('.container');

let headingElement = document.createElement('h2');
headingElement.textContent = 'I can add elements to the DOM!';
container.appendChild(headingElement);

let image = document.createElement('img');
image.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORJZfClafVs3OY2MdqSbgMBOjLrMeehMfSurS4J9fmYBPyavBLA');
container.appendChild(image);
