'use strict';


interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}


class Reservation implements Reservationy {
  code: string;
  dow: string;


  getCodeBooking() {
    const characterArray: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
   
    let randomCode: string = '';
   
    for (let counter: number = 0; counter < 8; counter++) {
      let randomNumber: number = Math.floor(Math.random() * characterArray.length);
      randomCode += characterArray[randomNumber];
    }
    this.code = randomCode;
    return this.code;
  }

  getDowBooking() {
    const daysArray: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    let randomNumber: number = Math.floor(Math.random() * daysArray.length);
    let randomDay: string = daysArray[randomNumber];

    this.dow = randomDay;
    return randomDay;
  }

  createNewBooking() {
    this.getCodeBooking();
    this.getDowBooking();
    return `Booking# ${this.code} for ${this.dow}`;
  }
}

let reservations: Reservation[] = [];
for (let i:number = 0; i<10; i++){
  reservations.push(new Reservation);
}

reservations.forEach(oneReservation => {
  console.log(oneReservation.createNewBooking());
});


