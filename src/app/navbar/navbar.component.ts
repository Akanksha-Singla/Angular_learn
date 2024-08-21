import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input()
brandName=''

constructor(){
  //child can rewrite data
  // setTimeout(()=>{
  //   this.brandName ='Child Rewrite'
  // },3000)
}
}
