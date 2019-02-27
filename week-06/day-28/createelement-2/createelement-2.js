let asteroidsList = document.querySelector('.asteroids');
asteroidsList.children[0].remove();


const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];


for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid === true) {
    let listItem = document.createElement('li');
    listItem.textContent = planetData[i].content;
    listItem.classList.add(planetData[i].category);
    asteroidsList.appendChild(listItem);
  }
}