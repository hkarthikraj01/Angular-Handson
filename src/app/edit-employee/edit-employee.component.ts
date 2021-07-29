import { Component, Input, OnInit } from '@angular/core';
import { IDepartment } from '../employee/Models/IDepartment';
import { IEmployee } from '../employee/Models/IEmployee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: IEmployee;
  departments: IDepartment[];
  constructor() {
    this.employee = {
      ID: 0,
      Name: "",
      Salary: 0,
      Permanent: false,
      Department: { DID: 0, DName: "" },
      Skill: [],
      Dob: new Date()
    };
    this.departments = [

      { DID: 1, DName: "Payroll" },

      { DID: 2, DName: "Internal" },

      { DID: 3, DName: "HR" }

    ];
  }

  onSubmit(empForm: any): void {
    this.employee.Name = empForm.value.Name;
    this.employee.Salary = empForm.value.Salary;
    this.employee.Permanent = empForm.value.Permanent;
    var obj = this.departments.find(i => i.DID == empForm.value.Department);
    if (obj != null) {
      this.employee.Department = obj;
    }
  }
  ngOnInit(): void {
  }
}
