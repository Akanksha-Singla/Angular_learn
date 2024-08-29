import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NeosoftComponent } from './neosoft/neosoft.component';
import { WebWorksComponent } from './web-works/web-works.component';
import { LearningComponent } from './learning/learning.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { EmployeeInputComponent } from './Employee/employee-input/employee-input.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { authenticationGaurd } from './guards/Gaurds';
import { CounterService } from './customServices/counter.service';

const routes: Routes = [

  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full",
    
  },
  {
    path:"home",
    component:HomeComponentComponent,
    children:[
      {
        path:"neosoft",
        component:NeosoftComponent,
        // providers:[CounterService] 
        //not shared bout counter will not destroyed
      },
      {
        path:"webwerks",
        component:WebWorksComponent,
        
        children:[
          {
            path:"learning",
            component:LearningComponent
          },
  
        ]
      }
    ]
  },
  {
    path:"employees",
    component:EmployeeComponent
  },
  {
    path:"addemployee",
   component:EmployeeInputComponent,
  //  canActivate:[authenticationGaurd]
  },
  {
    path:"editemployee/:empId",
    component:EmployeeInputComponent
  },
  {
    path:"admin/login",
    component:AdminFormComponent
  },
  {
    path:"**",
    component:ViewNotFoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {











 }
