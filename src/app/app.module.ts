import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PercentageComponent } from './percentage/percentage.component';
import { TodoComponent } from './Components/todo/todo.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { EmployeeItemComponent } from './Employee/employee-item/employee-item.component';
import { EmployeeCardComponent } from './Employee/employee-card/employee-card.component';
import { DatePipe } from '@angular/common';
import { CurrecyPipePipe } from './customPipes/currecy-pipe.pipe';
import { OrderbyPipe } from './customPipe/orderby.pipe';
import { EmployeeInputComponent } from './Employee/employee-input/employee-input.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NeosoftComponent } from './neosoft/neosoft.component';
import { WebWorksComponent } from './web-works/web-works.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { provideHttpClient } from '@angular/common/http';

// import { AddTodoComponent } from './Compnents/add-todo/add-todo.component';
//decorator
@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LearningComponent,
    PercentageComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    EmployeeComponent,
    EmployeeItemComponent,
    EmployeeCardComponent,
    CurrecyPipePipe,
    OrderbyPipe,
    EmployeeInputComponent,
    AdminFormComponent,
    HomeComponentComponent,
    NeosoftComponent,
    WebWorksComponent,
    ViewNotFoundComponent
   //components ,pipes
  ],
  imports: [
    BrowserModule, //depending modules
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [DatePipe,provideHttpClient()],    //serices
  bootstrap: [AppComponent] //root components
})
export class AppModule { }
