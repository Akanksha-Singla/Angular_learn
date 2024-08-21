import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
message="Your base location is:"
companyLocation ="Dadar"
// hero =[{"name":"batman"},'name:"superman"},{name:"himan"}]

hero=[
   
  {
    name:"batman",
    emotion:"happy"
  } ,
  {
  name:"superman",
    emotion:"sad"
  }, {
    name:"himan",
      emotion:"happy"
    }
]
showSad=true

color=""
//static variable
static counter = 0;
//static companyName="da"
classRef=LearningComponent;
location=["Rabale","Parel","Dadar"]
constructor(){
  LearningComponent.counter ++;
  setTimeout(()=>{
    this.message=`"your best location is" `
  },2000)


}

display(){
  console.log(this.message)
  console.log(this.companyLocation);
  console.log(this.image.src)

}
// https://upload.wikimedia.org/wikipedia/commons/3/3b/Nature_%28177139207%29.jpeg
image={
  src:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Nature_%28177139207%29.jpeg",
  alt:"image",
  height:"150px",
  width:"150px"
}
 getNode(node:any){
      console.log(node);
      /* innertext of p */
      console.log(node.textContent);
      
  }
  getAge(nodevalue:any){
    console.log(nodevalue);
    console.log(typeof nodevalue); //value via trv then its always string
    
  }
  voterAge=0;
  changeColor(c:string){
    this.color = c;
  }
}
