"use strict";
export{}


let name: string = "Greenfox";

function greet (defaultValue = "user") {
    console.log("Greetings, dear " + defaultValue);
}

greet(name);
greet();