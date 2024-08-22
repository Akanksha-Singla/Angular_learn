import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrl: './employee-input.component.css'
})
export class EmployeeInputComponent {

  employeeForm:FormGroup;
departmentName="LD"
deptCodes=["LD","SM","MD"]

constructor(){
  this.employeeForm=new FormGroup({
    empId:new FormControl(),
    empName:new FormControl(),
    joiningDate:new FormControl(),
    basicSalary:new FormControl(),
    experience:new FormControl(),
    deptCode:new FormControl()

  });

  // this.employeeForm.get("empId")?.setValue("678")
}

collectData(){
  console.log(this.employeeForm)

}
}
