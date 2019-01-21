"use strict";
export{}

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

let doubleDrinks = drinks.map(drink => drink = drink + drink);

console.log(doubleDrinks);

