'use strict';
export { }


const fs = require('fs');

function decryptDouble(filename: string) {
  let fileContent: string = fs.readFileSync(filename, 'utf-8');
  let decryptedText: string = '';

  for (let i: number = 0; i < fileContent.length; i++) {
    if (i % 2 !== 0) {
      decryptedText += fileContent.charAt(i);
    }
  }

  return decryptedText;
}

console.log(decryptDouble('decrypt-doubled-source-file.txt'));
