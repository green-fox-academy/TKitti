"use strict";

let lineCount: number = 6;

let percentage: string = "";
let space: string = "";

for (let i = 0; i < lineCount; i++) {

    if (i === 0 || i === lineCount-1) {
        for (let k = 0; k < lineCount; k++) {
            percentage += "%";
        }
        console.log(percentage);
        percentage = "";
    } 
    
    else if (i > 1 || i < (lineCount-1)) {
        for (let j = 0; j < 1; j++) {
            percentage += "%";
        }

        for (let k = 0; k < lineCount-2; k++) {
            space += "\u00A0";
        }

        console.log(percentage + space + percentage);
        percentage = "";
        space = "";
    }
}