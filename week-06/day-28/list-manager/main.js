let body = document.getElementsByTagName('body')[0];
let script = document.getElementsByTagName('script')[0];

//div container
let container = document.createElement('div');
container.setAttribute('style',
'display: flex; justify-content: space-between; width: 400px;');
body.insertBefore(container, script);


//left box
let leftList = document.createElement('ul');
leftList.setAttribute('style', 
'border: 1px solid black; width: 120px; min-height: 92px; padding: 0px;');
container.appendChild(leftList);


let items = ['bread', 'milk', 'orange', 'tomato'];

for (let i = 0; i < items.length; i++) {
  let listElement = document.createElement('li');
  listElement.textContent = items[i];
  listElement.setAttribute('style', 'list-style-type: none;');
  leftList.appendChild(listElement);
}


//middle box
let middleList = document.createElement('ul');
middleList.setAttribute('style', 
'width: 120px; min-height: 92px; padding: 0px; text-align: center;');
container.appendChild(middleList);

let buttons = ['Up', '>', 'X', 'Down'];

for (let i = 0; i < buttons.length; i++) {
  let listElement = document.createElement('li');
  let buttonElement = document.createElement('button');
  buttonElement.textContent = buttons[i];
  listElement.setAttribute('style', 'list-style-type: none;');
  buttonElement.setAttribute('style', 
  'width: 120px;');
  listElement.appendChild(buttonElement);
  middleList.appendChild(listElement);
}


//right box
let rightList = document.createElement('ul');
rightList.setAttribute('style', 
'border: 1px solid black; width: 120px; min-height: 92px; padding: 0px;');
container.appendChild(rightList);


//setting default highlight to the first element in the list
leftList.children[0].style.backgroundColor = 'grey';



//clicking on the DOWN button
let down = middleList.children[3];
down.onclick = function (event) {
  //saving the left list ul into a variable on the basis of the current event
  let leftListWithEvent = event.currentTarget.parentElement.previousSibling;

  let indexOfHighlightedElement = 0;
  
  for (let i = 0; i < leftListWithEvent.childElementCount; i++) {
    if (leftListWithEvent.children[i].style.backgroundColor === 'grey') {
      indexOfHighlightedElement = i;
    }
  }

  //we need if statement, to stop the moving of the highlighting when the highlight is on the last item
  if (indexOfHighlightedElement !== leftListWithEvent.childElementCount - 1) {
    leftListWithEvent.children[indexOfHighlightedElement].style.backgroundColor = 'white';
    leftListWithEvent.children[indexOfHighlightedElement + 1].style.backgroundColor = 'grey';
  }
};


//clicking on the UP button
let up = middleList.children[0];
up.onclick = function (event) {
  let leftListWithEvent = event.currentTarget.parentElement.previousSibling;

  let indexOfHighlightedElement = 0;
  
  for (let i = 0; i < leftListWithEvent.childElementCount; i++) {
    if (leftListWithEvent.children[i].style.backgroundColor === 'grey') {
      indexOfHighlightedElement = i;
    }
  }

  //we need if statement, to stop the moving of the highlighting when the highlight is on the last item
  if (indexOfHighlightedElement !== 0) {
    leftListWithEvent.children[indexOfHighlightedElement].style.backgroundColor = 'white';
    leftListWithEvent.children[indexOfHighlightedElement - 1].style.backgroundColor = 'grey';
  }
};



//clicking on the X button
let deleteButton = middleList.children[2];
deleteButton.onclick = function (event) {
  let leftListWithEvent = event.currentTarget.parentElement.previousSibling;

  let indexOfHighlightedElement = 0;
  
  for (let i = 0; i < leftListWithEvent.childElementCount; i++) {
    if (leftListWithEvent.children[i].style.backgroundColor === 'grey') {
      indexOfHighlightedElement = i;
    }
  }

  leftListWithEvent.children[indexOfHighlightedElement].remove();
  leftListWithEvent.children[0].style.backgroundColor = 'grey';
}


//clicking on the > button
let arrowButton = middleList.children[1];
arrowButton.onclick = function (event) {
  let leftListWithEvent = event.currentTarget.parentElement.previousSibling;
  let rightListWithEvent = event.currentTarget.parentElement.nextSibling;
  console.log(rightListWithEvent);

  let indexOfHighlightedElement = 0;
  
  for (let i = 0; i < leftListWithEvent.childElementCount; i++) {
    if (leftListWithEvent.children[i].style.backgroundColor === 'grey') {
      indexOfHighlightedElement = i;
    }
  }

  let removedSelectedElement = leftListWithEvent.removeChild(leftListWithEvent.children[indexOfHighlightedElement]);
  removedSelectedElement.style.backgroundColor = 'white';
  rightListWithEvent.appendChild(removedSelectedElement);
  leftListWithEvent.children[0].style.backgroundColor = 'grey';
}