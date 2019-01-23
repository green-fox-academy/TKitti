'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


let sizeOfSquare: number = 20;

function drawSquare (x: number, y: number, size: number) {
    ctx.fillStyle = 'violet';
    ctx.fillRect(x, y, size, size);
    ctx.strokeRect(x, y, size, size);
}


for (let i: number = 0; i < 19; i++) {
    if (i === 0) {
        continue;
    } else {
    drawSquare(i*sizeOfSquare, i*sizeOfSquare, sizeOfSquare);
    }
}


