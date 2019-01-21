"use strict";
export{}

let numList: number[] = [3, 4, 5, 6, 7];

//console.log(numList.reverse());


let newArray: number[] = [];
let lengthOfnumList = numList.length;
//we need to save the lenght of the original array, otherwise only the last 3 elements will be reversed
//because as we pop elements, the length of the array decreases

for (let i = 0; i < lengthOfnumList; i++) {
    let element = numList.pop();
    newArray.push(element);
    element = null;
}

console.log(newArray);