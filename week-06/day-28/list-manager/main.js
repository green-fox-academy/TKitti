let body = document.getElementsByTagName('body')[0];
let script = document.getElementsByTagName('script')[0];
let container = document.createElement('div');

let leftList = document.createElement('ul');
leftList.setAttribute('style', 
    'border: 1px solid black; width: 120px; min-height: 92px; padding: 0px;');

container.appendChild(leftList);
body.insertBefore(container, script);


let items = ['bread', 'milk', 'orange', 'tomato'];

for (let i = 0; i < items.length; i++) {
  let listElement = document.createElement('li');
  listElement.textContent = items[i];
  listElement.setAttribute('style', 'list-style-type: none;');
  console.log(items[i]);
  leftList.appendChild(listElement);
}
