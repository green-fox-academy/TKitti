'use strict'
export { }

const fs = require('fs');


function logIPAddresses(filename: string): any {
  let fileContent: string = fs.readFileSync(filename, 'utf-8');
  let splittedContent: string[] = fileContent.toString().split('/');
  
  let splitBySpace = splittedContent.map(function (element) {
    return element.split(' ');
  })

  let IPAddressesArray = [];

  splitBySpace.forEach(function (element) {
    IPAddressesArray.push(element[8]);
  })
  return IPAddressesArray;
}

console.log(logIPAddresses('log-source-file.txt'));


function requestRatio(filename: string): any {
  let fileContent: string = fs.readFileSync(filename, 'utf-8');
  let splittedContent: string[] = fileContent.toString().split('/');
  
  let splitBySpace = splittedContent.map(function (element) {
    return element.split(' ');
  })

  let getArray = [];
  let postArray = [];

  splitBySpace.forEach(function (element) {
    if (element[11] === 'GET') {
      getArray.push(element[11]);
    } else if (element[11] === 'POST') {
      postArray.push(element[11]);
    }
  });

  let lengthOfGetArray = getArray.length;
  let lengthOfPostArray = postArray.length;
  let ratio = lengthOfGetArray / lengthOfPostArray;

  return ratio;
}

console.log(requestRatio('log-source-file.txt'));