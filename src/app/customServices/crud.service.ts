import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
// url="http://localhost:5000/employees/add"
url="http://localhost:5000"

  constructor(private http:HttpClient) {



   }


 getAllEmployees(){
  const obs =this.http.get(`${this.url}/employees/getall`)
  return obs
  
  // obs.subscribe({
  //   next:(success)=>console.log(success),
  //   error:(error)=>console.log(error)
  // }) 
}  

addEmployee(employee:Employee){ 
 const obs =this.http.post(`${this.url}/employees/add`,employee);
return obs
   }
   

updateEmployee(empId:number,employee:Employee){
const obs =  this.http.post(`${this.url}/employees/update`,{empId,employee});
obs.subscribe({
      next:(success)=>console.log(success),
      error:(error)=>console.log(error)
    })
    console.log(obs)
   }
  }


 
