import { Injectable } from '@angular/core';

@Injectable({
  //singleton
  providedIn: 'root',
})
export class TextService {
  text: string = '';
  constructor() {}
  /* istanbul ignore next */
  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }
}
