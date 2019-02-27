let listOfPElements = document.querySelectorAll('p');

if (listOfPElements[3].classList.contains('dolphin') === true) {
  listOfPElements[0].textContent = 'pear';
}

if (listOfPElements[0].classList.contains('apple') === true) {
  listOfPElements[2].textContent = 'dog';
}

listOfPElements[0].setAttribute('class', 'red');


listOfPElements[1].classList.remove('balloon');
listOfPElements[1].setAttribute('style', 'background-color: lime;  border-radius: 5%;');
