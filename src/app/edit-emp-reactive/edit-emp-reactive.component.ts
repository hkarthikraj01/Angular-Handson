import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDepartment } from '../employee/Models/IDepartment';
import { IEmployee } from '../employee/Models/IEmployee';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  employee: IEmployee;
  departments: IDepartment[];
  empForm: FormGroup;
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

    this.empForm = new FormGroup({
      'name': new FormControl(this.employee.Name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)]),
      'salary': new FormControl(this.employee.Salary, [Validators.required]),
      'department': new FormControl(this.employee.Department, [
        Validators.required
      ])
    });

  }
  ngOnInit(): void {
  }
  get name() { return this.empForm.get('name'); }
  get salary() { return this.empForm.get('salary'); }

}
