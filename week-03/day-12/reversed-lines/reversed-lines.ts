'use strict';


const fs = require('fs');

function reverseLines (filename: string) {
  let fileContent: string = fs.readFileSync(filename, 'utf-8');

  let splittedText: string[] = fileContent.split('\r\n');

  let reversedArray: string[] = splittedText.map(oneLine => {
    return oneLine.split('').reverse().join('');
  });

  let reversedText = '';
  reversedArray.map(oneLine => {
    return reversedText = reversedText + oneLine + '\n';
  });

  return reversedText;
}

console.log(reverseLines('reversed-lines-sourcefile.txt'));