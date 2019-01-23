'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function drawRectangle (x: number, y: number, width: number, height: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

drawRectangle(25, 90, 100, 160, "red");
drawRectangle(150, 150, 50, 50, "green");
drawRectangle(400, 120, 175, 80, "blue");
drawRectangle(250, 200, 75, 100, "grey");