let body = document.getElementsByTagName('body')[0];
let script = document.getElementsByTagName('script')[0];


let container = document.createElement('div');
container.setAttribute('style',
'display: flex; justify-content: space-between; width: 400px;');
body.insertBefore(container, script);


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


let rightList = document.createElement('ul');
rightList.setAttribute('style', 
'border: 1px solid black; width: 120px; min-height: 92px; padding: 0px;');
container.appendChild(rightList);


