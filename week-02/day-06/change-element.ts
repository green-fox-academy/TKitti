"use strict";
export{}

let numList = [1, 2, 3, 8, 5, 6];

let newArray = numList.map(function (value) {
    if (value === 8) {
        value = 4;
    }
    return value;
});

console.log(newArray[3]);
