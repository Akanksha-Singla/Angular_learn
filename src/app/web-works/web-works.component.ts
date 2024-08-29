import { Component } from '@angular/core';
import { CounterService } from '../customServices/counter.service';

@Component({
  selector: 'app-web-works',
  templateUrl: './web-works.component.html',
  styleUrl: './web-works.component.css'
})
export class WebWorksComponent {
  constructor(public counterS:CounterService){

  }
  // increment(){
  //   this.counterS.incrementCounter()
  //   return this.counterS.counter
  
  //  }
  
}
