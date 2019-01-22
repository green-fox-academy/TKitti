'use strict';

export{}

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];


function securityCheck (line) {

    let festivalGoers: any = [];

    line.forEach(function(element) {
        if (element.guns === 0 && element.alcohol === 0) {
            festivalGoers.push(element);
        }

        if (element.guns > 0) {
            watchlist.push(element.name);
        }
        
        if (element.alcohol > 0) {
            securityAlcoholLoot = securityAlcoholLoot + element.alcohol;
            element.alcohol = 0;
            }
        });
    
    return festivalGoers.map(goer => goer.name);
}


//gives the list of names of festival goers in the first round
console.log(securityCheck(queue));

//gives the list of names of persons who has guns
console.log(watchlist);

//gives the sum of alcohol units
console.log(securityAlcoholLoot);

//gives all the persons in the queue after the alcohol units are set to zero
console.log(queue);

//gives the list of names of festival goers who can enter after the alcohol was removed
console.log(securityCheck(queue));