let king = document.getElementById('b325');
console.log(king);


let businessLamp = document.getElementsByClassName('big');
for (let i = 0; i < businessLamp.length; i++) {
  console.log(businessLamp[i]);
}


let conceitedKing = document.getElementsByClassName('container')[0].getElementsByClassName('asteroid');
for (let i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].textContent);
}


let noBusiness = document.getElementsByTagName('div');
for (let i = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i]);
}