'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
//https://github.com/green-fox-academy/teaching-materials/blob/master/project/drawing/r1.png



function drawLine (x: number, y: number, k: number, j: number, color:string) {
    ctx.beginPath();
    ctx.moveTo(k,y);
    ctx.lineTo(x,j);
    ctx.strokeStyle = color;
    ctx.stroke();
}

//drawLine(10, 150);
let y: number = 0;
let j: number = 150;

for (let x: number = 10; x < 150; x=x+10) {
    drawLine(x,y += 10,0,150, "green");
}


for (let k: number = 150; k > 0; k=k-10) {
    drawLine(150,0, k, j -= 10, "violet");
}

    


