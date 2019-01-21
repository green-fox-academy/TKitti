"use strict";
export{}


function factorio (inputValue: number) {
    let defaultValue = 1;

    for (let counter = 1; counter <= inputValue; counter++) {
        defaultValue = defaultValue * counter;
    }
    
    return defaultValue;
}

console.log(factorio(4));