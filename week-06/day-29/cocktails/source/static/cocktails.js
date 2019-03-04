'use strict';

//module.exports = activeCocktailsList;

const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

let allOption = document.getElementsByTagName('li')[0].children[0];
let ginButton = document.getElementsByTagName('li')[1].children[0];
let vodkaButton = document.getElementsByTagName('li')[2];
let rumButton = document.getElementsByTagName('li')[3];
let tequilaButton = document.getElementsByTagName('li')[4];

let cocktailsContainer = document.getElementById('cocktails-container');

let activeCocktailsList = cocktails;

ginButton.onclick = function () {
  filterCocktails('gin');
}

vodkaButton.onclick = function () {
  filterCocktails('vodka');
}

rumButton.onclick = function () {
  filterCocktails('rum');
}

tequilaButton.onclick = function () {
  filterCocktails('tequila');
}

allOption.onclick = function () {
  activeCocktailsList = cocktails;
  for (let i = 0; i < cocktails.length; i++) {
    if (activeCocktailsList[i].isAlcoholic === false) {
      cocktailsContainer.children[i].children[0].children[0].textContent = `${activeCocktailsList[i].name} (non-alcoholic)`;
      cocktailsContainer.children[i].children[0].children[1].textContent = activeCocktailsList[i].contains;
      cocktailsContainer.children[i].children[1].textContent = `${activeCocktailsList[i].price} Ft`;
      cocktailsContainer.children[i].setAttribute('style', 'display: flex;');
    } else {
      cocktailsContainer.children[i].children[0].children[0].textContent = activeCocktailsList[i].name;
      cocktailsContainer.children[i].children[0].children[1].textContent = activeCocktailsList[i].contains;
      cocktailsContainer.children[i].children[1].textContent = `${activeCocktailsList[i].price} Ft`;
      cocktailsContainer.children[i].setAttribute('style', 'display: flex;');
    }
  }
}

function filterCocktails(alcohol) {
  let newCocktailList = [];

  cocktails.forEach(function (oneCocktailObject) {
    oneCocktailObject.contains.some(function (oneIngredient) {
      if (oneIngredient === alcohol) {
        newCocktailList.push(oneCocktailObject);
      }
    });
  });

  activeCocktailsList = newCocktailList;
  let numberOfCocktailsResult = activeCocktailsList.length;

  for (let i = 0; i < cocktails.length; i++) {
    if (i < numberOfCocktailsResult) {
      cocktailsContainer.children[i].children[0].children[0].textContent = activeCocktailsList[i].name;
      cocktailsContainer.children[i].children[0].children[1].textContent = activeCocktailsList[i].contains;
      cocktailsContainer.children[i].children[1].textContent = `${activeCocktailsList[i].price} Ft`;
      cocktailsContainer.children[i].setAttribute('style', 'display: flex;');
    }
    else {
      cocktailsContainer.children[i].children[0].children[0].textContent = '';
      cocktailsContainer.children[i].children[0].children[1].textContent = '';
      cocktailsContainer.children[i].children[1].textContent = '';
      //cocktailsContainer.children[i].setAttribute('style', 'background: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0));');
      cocktailsContainer.children[i].setAttribute('style', 'display: none;');

    }
  }
} 
