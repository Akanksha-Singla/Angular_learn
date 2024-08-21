import { Component } from '@angular/core';
import {Todo} from '../../Components/todo/Todo'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
localItem:string | null
todos :Todo[];
constructor(){
this.localItem = localStorage.getItem("todos")
if(this.localItem === null){
this.todos =[]
}
else{
  this.todos = JSON.parse(this.localItem)
}
// this.todos =[
//   {
//     sno:1,
//     title:"title1",
//     desc:"desceription1",
//     active:false
//   },
//   {
//     sno:2,
//     title:"title2",
//     desc:"desceription2",
//     active:false
//   },
//   {
//     sno:3,
//     title:"title3",
//     desc:"desceription3",
//     active:false
//   }

// ]
}
deleteTodo(todo:Todo){
  console.log("parent array")
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1);
  localStorage.setItem("todos",JSON.stringify(this.todos))
}
addTodo(todo:Todo){
console.log(todo);
this.todos.push(todo)
localStorage.setItem("todos",JSON.stringify(this.todos))
}
checkTodo(todo:Todo){
  const index = this.todos.indexOf(todo);
  this.todos[index].active = !this.todos[index].active
  localStorage.setItem("todos",JSON.stringify(this.todos))
}
}
