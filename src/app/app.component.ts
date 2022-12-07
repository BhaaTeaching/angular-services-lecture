import { Component } from '@angular/core';
import {CalculatorService} from "./calculator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-lecture';
  errorMSG: string = '';

  constructor(private calculatorService : CalculatorService) {
    calculatorService.errorMsg.subscribe((msg : string) => this.errorMSG = msg);
  }
}
