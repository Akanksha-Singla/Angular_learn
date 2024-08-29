import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private loginFlag=false
  constructor( public router :Router) { 
    console.log("in userService")
  }

  login(uname:string, pass:string){
    //add this username in cookies
    this.loginFlag=false;
    if(uname=="admin" && pass=="neoadmin123"){
      // this.router.navigate(['../home'])
      this.loginFlag = true;
      return this.loginFlag
    }
    else{
    return  this.loginFlag
      
    }
  }

  logout(){
    this.loginFlag =false;
    this.router.navigate(['../home'])
  }
  // changePassword(){

  // }

  // forgotPassword(){

  // }

  get logFlag(){
    return this.loginFlag
  }
}
