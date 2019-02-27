let button = document.querySelector('button');
let divElementForImage = document.createElement('div');

button.parentElement.appendChild(divElementForImage);

button.onclick = function() {
  if (divElementForImage.classList.contains('party') === true) {
    divElementForImage.classList.remove('party');
  } else {
    divElementForImage.classList.add('party');
  }
};