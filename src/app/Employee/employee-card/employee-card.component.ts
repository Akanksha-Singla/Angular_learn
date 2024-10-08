import { Component, Input } from '@angular/core';
import { Employee } from '../../customclasses/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input()
  employee!:Employee
  @Input()
  cardStyle={} //initialise
  @Input()

  flexClass!:string[]
  cardLinks={
    'card-link':true,
    'link':false
  }

}
