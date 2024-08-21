import { Component ,Input} from '@angular/core';
 import {Emp} from "../employee/Emp"


@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrl: './employee-item.component.css'
})
export class EmployeeItemComponent {
  @Input() emp!:Emp;
}
