import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../customServices/counter.service';

@Component({
  selector: 'app-neosoft',
  templateUrl: './neosoft.component.html',
  styleUrl: './neosoft.component.css',
providers:[CounterService] //special service
})
export class NeosoftComponent  {

  constructor(public counterService:CounterService){
    console.log("in neo com");
    

  }
  ngOnDestroy(): void {
    console.log("component destroy");

    //counter will reset 
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    console.log("onoint neosoft");
    
    // throw new Error('Method not implemented.');
  }

//   increment(){
//   this.counterService.incrementCounter()
//   return this.counterService.counter

//  }

}
