import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
title="";
desc="";
constructor(){
}
addTask(){
  const todo :Todo ={
  sno:67,
  title: this.title,
  desc:this.desc,
  active:true

  }
  this.todoAdd.emit(todo)

console.log("clicke",this.title);
}
}
