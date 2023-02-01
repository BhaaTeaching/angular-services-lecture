import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  errorMsg = new EventEmitter<string>();
  constructor() {}

  public calculate = (
    firstNumber: number,
    secondNumber: number,
    sign: string
  ) => {
    switch (sign) {
      case '+':
        return this.add(firstNumber, secondNumber);
      case '-':
        return this.sub(firstNumber, secondNumber);
      case '*':
        return this.mul(firstNumber, secondNumber);
      case '/':
        return this.divide(firstNumber, secondNumber);
      default:
        return 0;
    }
  };

  public add = (firstNumber: number, secondNumber: number) => {
    return firstNumber + secondNumber;
  };

  public sub = (firstNumber: number, secondNumber: number) => {
    return firstNumber - secondNumber;
  };

  public mul = (firstNumber: number, secondNumber: number) => {
    return firstNumber * secondNumber;
  };

  public divide = (firstNumber: number, secondNumber: number) => {
    if (secondNumber === 0) {
      alert('Cannot divide by 0 !!!');
      this.errorMsg.emit('Cannot divide by 0 !!!');
    }
    return firstNumber / secondNumber;
  };
}
