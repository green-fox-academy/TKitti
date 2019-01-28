'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
/*
//forEach() method
function appendA (array: string[]) {
  let newArray:string[] = [];
  
  array.forEach(function(animal) {
    newArray.push( animal + "a");
});
return newArray;
}


console.log(appendA(far));
*/


//map() method
function appendA (array: string[]) {
  let newArray = array.map(function(animal) {
    return animal + "a";
});
return newArray;
}

console.log(appendA(far));