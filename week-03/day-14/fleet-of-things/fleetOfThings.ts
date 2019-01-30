import { Thing } from "./thing";
import { Fleet } from "./fleet";


//create an instance of Fleet class
let fleet = new Fleet();

//create instances of Thing class
let mything1 = new Thing('Get milk');
let mything2 = new Thing('Remove the obstacles');
let mything3 = new Thing('Stand up');
let mything4 = new Thing('Eat lunch');

/* Crete a fleet of things to have this output:

1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch

// Hint: You have to create a `print()` method as well */


//set completed status to true
mything3.complete();
mything4.complete();


fleet.add(mything1);
fleet.add(mything2);
fleet.add(mything3);
fleet.add(mything4);


function print(nameOfMyFleet: Fleet) {
  for (let i = 0; i < fleet.things.length; i++) {
    if (fleet.things[i].completed === true) {
      console.log(i + 1 + '. [x] ' + fleet.things[i].name);
    } else {
      console.log(i + 1 + '. [ ] ' + fleet.things[i].name);
    }
  }
}

print(fleet);