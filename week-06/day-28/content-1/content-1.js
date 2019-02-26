let animalsText = document.getElementsByClassName('animals')[0].textContent;
let animalsTextWithStrong = document.getElementsByClassName('animals')[0].innerHTML;
let listOfParagraphs = document.getElementsByTagName('p');

for (let i = 0; i < listOfParagraphs.length; i++) {
  listOfParagraphs[i].textContent = animalsText;
}

for (let i = 0; i < listOfParagraphs.length; i++) {
  listOfParagraphs[i].innerHTML = animalsTextWithStrong;
}