//solution 1
const printing = (word)  => {
  console.log(word);
};

setTimeout(() => {
  printing('apple');
}, 3000);



//solution 2
const printing = ()  => {
  console.log('apple');
};

setTimeout(printing, 3000);