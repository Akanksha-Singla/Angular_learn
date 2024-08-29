import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../customclasses/custom-validators';
import { Employee } from '../../customclasses/employee';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../customServices/crud.service';
@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrl: './employee-input.component.css'
})
export class EmployeeInputComponent {

employeeForm:FormGroup;
departmentName="LD"
deptCodes=["LD","SM","MD"]
employee= new Employee()

constructor(public activeRoute:ActivatedRoute, public empCrud:CrudService){
  this.employeeForm=new FormGroup({
    _id:new FormControl("",[Validators.required]),//required
    empName:new FormControl("",[Validators.required,Validators.pattern("[A-Za-z ]*"),Validators.minLength(2)]),//required,pattern,minLength
    joiningDate:new FormControl("",[Validators.required]), //required
    basicSalary:new FormControl("",[Validators.required,Validators.min(30000)]),//required,min
    experience:new FormControl('',[Validators.required,Validators.min(0),Validators.max(99)]),//required,min,max
    emailId:new FormControl("",[Validators.email,Validators.required]),//email
    deptCode:new FormControl("LD"),
    secreteCode:new FormControl("123",[Validators.required,Validators.maxLength(6),Validators.minLength(3)]),
    confirmCode:new FormControl("",Validators.required),
    empPic:new FormControl()

  },[CustomValidators.valueMatch('secreteCode', 'confirmCode')]);

  // this.employeeForm.get("_id")?.setValue("678")
}
get eid(){
  return this.employeeForm.get("_id");
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
  console.log(this.employeeForm.value)
  this.employee = this.employeeForm.value;
  console.log("employee to be added",this.employee)
  if(this.activeRoute.snapshot.routeConfig?.path=="addemployee")
  {let obs = this.empCrud.addEmployee(this.employee)
    obs.subscribe({
      next:(data)=>{
        this.employee = data as Employee;
        window.alert(`Employee added successfully`)
      },
      error:(error)=>console.log(error)
    })
    console.log(obs)
  }
  // if(this.activeRoute.snapshot.routeConfig?.path=="editemployee/:empId")
  //  {this.empCrud.updateEmployee(this.employee._id,this.employee);}
}

}
// function pattern(arg0: string): import("@angular/forms").ValidatorFn {
//   throw new Error('Function not implemented.');
// }

