'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.



function drawSquare (size: number) {
    ctx.strokeRect((canvas.width/2)-(size/2), (canvas.height/2)-(size/2), size, size);
}


for (let i: number = 0; i < 3; i++) {
    drawSquare(i*100 + 50);
}

