import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @Output()
  emitter = new EventEmitter<string>();
applicationName ="Employee Crud"

 companyName="Neosoft"
//whenever parent update the value it is shared with child
// constructor(){
//constructor can not fire events
//   setTimeout(()=>{
//     this.applicationName ='Employee Crud'
//   },6000)
// }
ngOnInit(): void {
  //we fire event using this life cycle method by default
  //it is a first lifecycle method
this.emitter.emit(this.applicationName)
//  throw new Error('Method not implemented.');
}

}
