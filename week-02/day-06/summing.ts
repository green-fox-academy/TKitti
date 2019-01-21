"use strict";
export{}


function sum (valueNumber: number) {
    let partialValue = 0;

    for (let counter = 1; counter <= valueNumber; counter++) {
        partialValue = partialValue + counter;
    }

    return partialValue;
}

console.log(sum(6));