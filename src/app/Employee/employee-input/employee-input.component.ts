import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../customclasses/custom-validators';
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
    empId:new FormControl("",[Validators.required]),//required
    empName:new FormControl("",[Validators.required,Validators.pattern("[A-Za-z ]*"),Validators.minLength(2)]),//required,pattern,minLength
    joiningDate:new FormControl("",[Validators.required]), //required
    basicSalary:new FormControl("",[Validators.required,Validators.min(30000)]),//required,min
    experience:new FormControl('',[Validators.required,Validators.min(0),Validators.max(99)]),//required,min,max
    emailId:new FormControl("",[Validators.email,Validators.required]),//email
    deptCode:new FormControl("LD"),
    secreteCode:new FormControl("123",[Validators.required,Validators.maxLength(6),Validators.minLength(3)]),
    confirmCode:new FormControl("",Validators.required)

  },[CustomValidators.valueMatch('secreteCode', 'confirmCode')]);

  // this.employeeForm.get("empId")?.setValue("678")
}
get eid(){
  return this.employeeForm.get("empId");
}
get ename(){
  return this.employeeForm.get("empName");
}
get salary(){
return this.employeeForm.get("basicSalary");
}
get dcode(){
return this.employeeForm.get("deptCode");
}
get joining(){
return this.employeeForm.get("joiningDate");
}
get exp(){
return this.employeeForm.get("experience");
}
get email(){
return this.employeeForm.get("emailId");
}

get scode(){
  return this.employeeForm.get("secreteCode")
}
get confirm(){
  return this.employeeForm.get("confirmCode")
}
collectData(){
  alert(this.employeeForm.value)

}
}
function pattern(arg0: string): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

