"use strict";

let lineCount: number = 5;

let space: string = "";
let star: string = "";

for (let i = 0; i < lineCount; i++) {
    
    for (let j = 0; j < (lineCount-1)-i ; j++) {
        space += "\u00A0";
    }

    star = "*";
    
    for (let k = 0; k < i; k++) {
        star += "**";
    }

    console.log(space + star);
    space = "";
    star = "";
}
