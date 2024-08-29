import { Component } from '@angular/core';
import {Emp} from './Emp'
import { Employee } from '../../customclasses/employee';
import { CrudService } from '../../customServices/crud.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
employees!: Emp[];
neoEmployees :Employee[]=[];

sortBase = 'deptCode'

props = [
    "_id",
    "empName",
    'joiningDate',
    'basicSalary',
    'deptCode',
    'experience',
   ]

constructor(private empCrud:CrudService){
  this.getEmployees();
  this.employees=[
   
    {
      empName:"akanksha",
      empAge:30,
      empSalary:78000
    } ,
    {
      empName:"akanksha1",
      empAge:31,
      empSalary:78000
    }
  ]
}
getEmployees(){
  const obs = this.empCrud.getAllEmployees();
  obs.subscribe({
    next:(data)=>{
      console.log("neoEMployee",data)
     return this.neoEmployees = data as Employee[];
},
    error:(error)=>console.log(error)
    
  })
  // this.neoEmployees=[
  //   new Employee(111,"Hari kumar", new Date('12-July-2004'), 90000, "LD", 30,"abc@gmail.com"),
  //   new Employee(121,"Shama kumari", new Date('10-July-2004'), 98000, "JS", 25),
  //   new Employee(100,"Arun vaidya", new Date('18-Dec-2000'), 80000, "LD", 35),
  // ]

}

flexClass=['card']
cardStyle={
width:"18rem",
backgroundColor:"grey"

}



cardColor='lightblue'
changeColor(){
  this.cardStyle.backgroundColor = this.cardColor
console.log("blur")
}
}

