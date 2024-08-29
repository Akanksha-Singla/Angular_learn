import { Component } from '@angular/core';
// import { Admin } from '../customclasses/admin';
import { Router } from '@angular/router';
import { UserService } from '../customServices/user.service';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.css'
})
export class AdminFormComponent {
  model = {
    username: '',
    password: ''
  };
  message="";
  flag=false;  //loginService : service object can shared
  constructor(private router:Router,public userService:UserService){//dependency injection

    console.log("in admin login")
  }

  onSubmit(form: any) {
    this.flag=this.userService.login(form.value.username,form.value.password)
    if (this.flag) {
      console.log('Form Submitted!', this.model);
      this.router.navigate(['../home'])
 } else {
      console.log('incorrect id and password');
    }
  }
  
}
