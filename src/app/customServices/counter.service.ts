import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
// increment() {
// throw new Error('Method not implemented.');
// }
public counter = 0;
  constructor() { 

  }
  incrementCounter(){
    this.counter += 1;
  }

  getCounter(){
   return this.counter
  }
}
