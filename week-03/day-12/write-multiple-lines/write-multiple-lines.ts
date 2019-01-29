'use strict'
export { }


const fs = require('fs');

function writeIntoFile(path: string, word: string, number: number): any {
  let text: string = word + '\r\n';

  for (let counter: number = 0; counter < number; counter++) {
    fs.appendFileSync(path, text);
  }
}

try {
  writeIntoFile('my-file.txt', 'apple', 5);
} catch (error) {
  console.log('');
}