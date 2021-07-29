import { Component, OnInit } from '@angular/core';
import { IEmployee } from './Models/IEmployee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
Employee:IEmployee[]=[
  {ID:11,Name:"Karthi",Salary:600000,Permanent:true,
  Department:{DID:1,DName:"Developer"},
  Skill:[{SId:1,SName:"Asp.net Core"},{SId:3,SName:"js"}],
  Dob: new Date("09/05/1999")},
  {ID:12,Name:"Raj",Salary:300000,Permanent:false,
  Department:{DID:1,DName:"Sales"},
  Skill:[{SId:2,SName:"Angular"},{SId:3,SName:"js"}],
  Dob: new Date("09/05/1999")}
];
  constructor() { }

  ngOnInit(): void {
  }

}
