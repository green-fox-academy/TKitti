"use strict";
export{}


let abc = ["Arthur", "Boe", "Chloe"];

let firstElement = abc[0];
abc[0] = abc[2];
abc[2] = firstElement;

console.log(abc);


/*
OR:
[abc[0], abc[2]] = [abc[2], abc[0]]
console.log(abc);
*/