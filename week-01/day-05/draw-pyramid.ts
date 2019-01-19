"use strict";

let lineCount: number = 5;

/*
3 "&nbsp;" + 1 * + 3 "&nbsp;"
2 "&nbsp;" + 3 *** + 2"&nbsp;"
1 "&nbsp;" + 5 ***** + 1 "&nbsp;"
7 *******
*/


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



//space: 3-2-1-0    -1    let i = 3; i >= 0; i--
//csillag: 1-3-5-7  +2    let j = 0; j >= i; j+2

//


// "\u00A0";
/*

i=3, 3 >=0 igaz egy space j=0 0>=7 hamis console.. ami nem kellene
i=2  2 >=0 igaz 

(4*2)-1 utolsó sor  a csillagból

1
3
6
10
15
a csillagok duplája + hozzáad egyet a meglévő csillagokhoz


*/