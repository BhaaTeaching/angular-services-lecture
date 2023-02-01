import { CalculatorService } from './../calculator.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { EventEmitter } from '@angular/core';

class CalculatorServiceMock {
  errMsg: EventEmitter<string> | undefined;
}
describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let calculatorService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        CalculatorComponent,
        { provide: CalculatorService, useClass: CalculatorServiceMock },
      ],
    });
    component = TestBed.inject(CalculatorComponent);
    calculatorService = TestBed.inject(CalculatorService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check HTML', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('input')?.length).toBe(2);
    expect(compiled.querySelectorAll('button')?.length).toBe(4);
    expect(compiled.getElementsByClassName('result')?.length).toBe(1);
  });
});
