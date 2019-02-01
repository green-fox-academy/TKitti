'use strict'


class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100.00;

  constructor(colorInput: string, widthInput: number, inputInkAmount: number) {
    this.color = colorInput;
    this.width = Number(widthInput.toFixed(2));
    this.inkAmount = inputInkAmount;
  }

  use() {
    if (this.inkAmount > 0) {
    this.inkAmount = this.inkAmount - 1;
    } else {
      this.inkAmount = 0;
    }
  }
}

let sharp1 = new Sharpie("grey", 2.8, 20);

export { Sharpie };