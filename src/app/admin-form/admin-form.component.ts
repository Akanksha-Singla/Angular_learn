import { Component } from '@angular/core';
import { Admin } from '../customclasses/admin';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.css'
})
export class AdminFormComponent {
accountAdmin?:Admin
userName=''
password=''
constructor(){
  this.accountAdmin= new Admin(this.userName,this.password);
}

submitted = false
onSubmit(values:object) { 
  console.log(values)
  this.submitted = true; }
}
