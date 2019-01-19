"use strict";

function substring(str, keyword) {
    if (str.includes(keyword)) {
      let words = str.split(" ");
      
      let numberOfCharacters = 0;
      for (let i = 0; i < words.length; i++) {
        
        if (words[i] !== keyword) {
          numberOfCharacters = numberOfCharacters + words[i].length + 1;
          //+1 is added because of the white space after each word
        } else {
          console.log(numberOfCharacters);
        }
      }
      
    } else {
      console.log(-1);
    }

    return -1;
}
  
substring("this is what I'm searching in", "searching");
substring("this is what I'm searching in", "not");


// Error in TS file: Property 'includes' does not exist on type 'string'.
// This is why this exercise is written in js instead of ts
