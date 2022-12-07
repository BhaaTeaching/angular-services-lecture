import { Component, OnInit } from '@angular/core';
import {parse} from "@angular/compiler-cli/linker/babel/src/babel_core";
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNumber : number =  0;
  secondNumber : number = 0;
  result : number = 0;
  constructor(private calculatorService : CalculatorService) { }

  ngOnInit(): void {
  }

  enterFirstNumber(event: Event) {
    let target = event.target as HTMLInputElement;
    this.firstNumber = Number(target.value);
  }

  enterSecondNumber(event: Event) {
    let target = event.target as HTMLInputElement;
    this.secondNumber = Number(target.value);
  }

  onClick(event: MouseEvent) {
    let sign = (event.target as HTMLInputElement).textContent as string;
    console.log(sign)
    this.result = this.calculatorService.calculate(this.firstNumber, this.secondNumber, sign)
  }
}
