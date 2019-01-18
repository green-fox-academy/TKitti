"use strict";

let lineCount: number = 4;

for (let i = 0; i < lineCount; i++) {
    let star = "";

    for (let j = 0; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}
