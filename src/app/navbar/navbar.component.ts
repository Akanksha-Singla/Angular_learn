import { Component, Input } from '@angular/core';
import { UserService } from '../customServices/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input()
brandName=''

constructor(public user:UserService){

console.log("in navbar")
  //child can rewrite data
  // setTimeout(()=>{
  //   this.brandName ='Child Rewrite'
  // },3000)
}

out(){
  window.alert("logged out successfully")
  
  this.user.logout()
}
}
