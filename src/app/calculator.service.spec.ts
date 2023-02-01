import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test add function', () => {
    const result = service.calculate(5, 7, '+');
    expect(result).toEqual(12);
  });

  it('test sub function', () => {
    const result = service.calculate(5, 7, '-');
    expect(result).toEqual(-2);
  });

  it('test mul function', () => {
    const result = service.calculate(5, 7, '*');
    expect(result).toEqual(35);
  });

  it('test divide function', () => {
    const result = service.calculate(12, 2, '/');
    expect(result).toEqual(6);
  });

  it('test divide function', () => {
    const result = service.calculate(12, 2, '');
    expect(result).toEqual(0);
  });

  it('should call alert', () => {
    spyOn(window, 'alert');
    const result = service.calculate(12, 0, '/');
    expect(window.alert).toHaveBeenCalledWith('Cannot divide by 0 !!!');
  });
});
