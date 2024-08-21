import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
@Input()todo!:Todo;
@Input() i!:number;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
@Output() todoCheck: EventEmitter<Todo> = new EventEmitter()
constructor(){

}
onClick(todo:Todo){
  console.log("clicked")
  this.todoDelete.emit(todo)
  console.log(todo);
}

onCheckboxClick(todo:Todo){

this.todoCheck.emit(todo)
// if(todo.active === true){todo.active = false;}
// else{todo.active=true}

// console.log(todo.active)
}
}
