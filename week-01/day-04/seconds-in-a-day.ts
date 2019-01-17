"use strict";


let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let secondsInADay: number = 60*60*24;   //86400


let secondsInCurrentMinutes: number = currentMinutes * 60;
let secondsInCurrentHours: number = currentHours * 60 * 60;

let allSecondsInCurrentTime: number = currentSeconds + secondsInCurrentMinutes + secondsInCurrentHours;

let remainingSeconds: number = secondsInADay - allSecondsInCurrentTime;
console.log(remainingSeconds);