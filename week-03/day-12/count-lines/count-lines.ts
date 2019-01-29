'use strict'
export { }


const fs = require('fs');

function numberOfLines(file: string): any {
  let fileContent: string = fs.readFileSync(file, 'utf-8');
  let splittedContent: string[] = fileContent.toString().split('\r');
  return splittedContent.length;
}

try {
  console.log(numberOfLines('hello-world.txt'));
} catch (error) {
  console.log(0);
}