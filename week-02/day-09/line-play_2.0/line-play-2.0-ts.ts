'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
//https://github.com/green-fox-academy/teaching-materials/blob/master/project/drawing/r1.png


//in this solution the lines always start and end in the corners


function drawLine (color1: string, color2:string, distance:number) {
    
    if (canvas.width >= canvas.height) {

        for (let i:number = 0; i < canvas.width / distance; i++) {

            ctx.beginPath();
            ctx.moveTo(0,  i * distance);
            ctx.lineTo((canvas.width / (canvas.height / distance)) * (i + 1) , canvas.height);
            ctx.strokeStyle = color1;
            ctx.stroke();


            ctx.beginPath();
            ctx.moveTo(canvas.width,  canvas.height / (canvas.width / distance) * (i+1));
            ctx.lineTo(i * distance, 0);
            ctx.strokeStyle = color2;
            ctx.stroke();

        }
    } else if (canvas.height >= canvas.width) {
        //only the i < canvas.??? changes in the second loop
        for (let i:number = 0; i < canvas.height / distance; i++) {
        
            ctx.beginPath();
            ctx.moveTo(0,  i * distance);
            ctx.lineTo((canvas.width / (canvas.height / distance)) * (i + 1) , canvas.height);
            ctx.strokeStyle = color1;
            ctx.stroke();


            ctx.beginPath();
            ctx.moveTo(canvas.width,  canvas.height / (canvas.width / distance) * (i+1));
            ctx.lineTo(i * distance, 0);
            ctx.strokeStyle = color2;
            ctx.stroke();

        }
    }
}

drawLine ("red", "blue", 25);



