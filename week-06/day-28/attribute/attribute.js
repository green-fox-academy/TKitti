let anchorElement = document.getElementsByTagName('a')[0];
let url = anchorElement.getAttribute('href');
console.log(url);


let imgSource = document.getElementsByTagName('img')[0].setAttribute('src', 'https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg');


anchorElement.setAttribute('href', 'https://www.greenfoxacademy.com/');


let secondButton = document.querySelector('.this-one');
secondButton.setAttribute('disabled', 'true');
secondButton.textContent = 'Don\'t click me!';