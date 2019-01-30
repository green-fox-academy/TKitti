'use strict'
export { }


class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100.00;

  constructor(colorInput: string, widthInput: number) {
    this.color = colorInput;
    this.width = Number(widthInput.toFixed(2));
  }

  use() {
    this.inkAmount = this.inkAmount - 1;
  }
}

let sharp1 = new Sharpie("grey", 2.8);
