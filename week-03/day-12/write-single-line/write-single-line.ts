'use strict'
export { }


const fs = require('fs');

function writeFile(filename: string):any {
  let fileContent: string = 'Kitti Tóth';
  fs.writeFileSync(filename, fileContent);
}

try {
  writeFile('my-file.txt')
} catch (error) {
  console.log('Unable to write file: my-file.txt');
}