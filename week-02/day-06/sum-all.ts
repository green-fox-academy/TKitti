"use strict";
export{}

let ai: number [] = [3, 4, 5, 6, 7];
let sum = 0;

ai.forEach(function (arrayNumber) {
    sum = sum + arrayNumber;
});

console.log(sum);