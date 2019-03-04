const fs = require('fs');


function swap(chars, i, j) {
 var tmp = chars[i];
 chars[i] = chars[j];
 chars[j] = tmp;
}

export function anagramCheck(permutations, possibleWords) {

 let resultArray = [];

 for(let j = 0; j < permutations.length; j++){

   for(let i = 0; i < possibleWords.length; i++){

     if(permutations[j] = possibleWords[i]){
         resultArray.push(permutations[j]);
     }

   }

 }

  return resultArray;
}



function getAllPermutations(string) {
 var results = [];

 if (string.length === 1) {
   results.push(string);
   return results;
 }

 for (var i = 0; i < string.length; i++) {
   var firstChar = string[i];
   var charsLeft = string.substring(0, i) + string.substring(i + 1);
   var innerPermutations = getAllPermutations(charsLeft);
   for (var j = 0; j < innerPermutations.length; j++) {
     results.push(firstChar + innerPermutations[j]);
   }
 }
 return results;
}


export function getPossibleWords(path) {
 let possibleWords = [];
 let content = fs.readFileSync(path, 'utf-8');
 possibleWords = content.trim()
 .split('\r\n');
 return possibleWords;
}