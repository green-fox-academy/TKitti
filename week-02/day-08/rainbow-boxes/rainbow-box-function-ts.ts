'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.


let rainbowColors: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


function drawSquare (size: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width/2)-(size/2), (canvas.height/2)-(size/2), size, size);
}

//we need to decrement the i, because otherwise the biggest square would cover all the other squares
for (let i: number = rainbowColors.length-1; i >= 0; i--) {
    drawSquare(i*20 + 50, rainbowColors[i]);
}