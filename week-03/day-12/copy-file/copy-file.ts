'use strict'
export { }


const fs = require('fs');

function copyFile(sourceFile: string, destinationFile: string) {
  fs.copyFileSync(sourceFile, destinationFile);
}

function checkCopyIsDone(sourceFile: string, destinationFile: string) {
  try {
    copyFile(sourceFile, destinationFile);

    let fileContentOriginal = fs.readFileSync(sourceFile, 'utf-8');
    let fileContentCopy = fs.readFileSync(destinationFile, 'utf-8');

    if (fileContentOriginal === fileContentCopy) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

console.log(checkCopyIsDone('original-file.txt', 'copy-file.txt'));