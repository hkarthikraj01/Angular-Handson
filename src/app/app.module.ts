import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { BasicsComponent } from './basics/basics.component';
import { FilterPipe } from './emp-list/filter.pipe';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    EmployeeComponent,
    EditEmployeeComponent,
    EmpListComponent,
    EmpInfoComponent,
    EditEmpReactiveComponent,
    BasicsComponent,
    FilterPipe,
    EmpInfoComponent,
    LoginComponent,
    UserComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: EmployeeComponent },
      { path: 'app-empDetails', component: EmployeeComponent },
      { path: 'app-edit-emp', component: EditEmployeeComponent, canActivate: [AuthGuard] },
      { path: 'app-basics', component: BasicsComponent },
      { path: 'app-quantity-increment', component: OneComponent },
      { path: 'app-edit-emp-reactive', component: EditEmpReactiveComponent, canActivate: [AuthGuard] },
      { path: 'app-emp-list', component: EmpListComponent },
      { path: 'app-emp-info/:Id', component: EmpInfoComponent, canActivate: [AuthGuard] },
      { path: 'app-login', component: LoginComponent },
      { path: 'app-user', component: UserComponent }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
