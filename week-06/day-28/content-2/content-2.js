let list = ['apple', 'banana', 'cat', 'dog'];
let listOfLiElements = document.getElementsByTagName('li');

for (let i = 0; i < list.length; i++) {
  listOfLiElements[i].textContent = list[i];
}


let unorderedList = document.getElementsByTagName('ul')[0];
unorderedList.setAttribute('class', 'limegreen');
