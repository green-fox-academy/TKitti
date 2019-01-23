'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let sizeOfSquare: number = 20;

function drawSquare (x: number, y: number, size: number) {
    ctx.fillStyle = 'violet';
    ctx.fillRect(x, y, size, size);
    ctx.strokeRect(x, y, size, size);
}


let sizeOfActualSquare: number = 0;
let formerCoordinateX: number = 0;
let formerCoordinateY: number = 0;

for (let i: number = 0; i < 7; i++) {
    if (i === 0) {
        continue;
    } else {
        drawSquare((formerCoordinateX = formerCoordinateX + sizeOfActualSquare),
                   (formerCoordinateY = formerCoordinateY + sizeOfActualSquare),
                   (sizeOfActualSquare = i * 10));
    }
}

    


