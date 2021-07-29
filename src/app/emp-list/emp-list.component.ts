import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IEmployee } from '../employee/Models/IEmployee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees: IEmployee[];
  filtered: IEmployee[];
  search: string;
  constructor() {
    this.search ="";
    this.employees = [
      {
        ID: 1, Name: "Karthi", Salary: 50000, Permanent: true,
        Department: { DID: 5, DName: "IT" },
        Skill: [{ SId: 3, SName: "Java" }, { SId: 4, SName: "C#" }],
        Dob: new Date("04/05/1999")
      },
      {
        ID: 2, Name: "Rahul", Salary: 30000, Permanent: false,
        Department: { DID: 4, DName: "Sales" },
        Skill: [{ SId: 1, SName: "C" }, { SId: 2, SName: "C++" }],
        Dob: new Date("09/05/1999")
      },
      {
        ID: 3, Name: "Sandy", Salary: 25000, Permanent: false,
        Department: { DID: 1, DName: "IT" },
        Skill: [{ SId: 3, SName: "Java" }, { SId: 4, SName: "C#" }],
        Dob: new Date("07/08/1999")
      },
      {
        ID: 4, Name: "Hari", Salary: 70000, Permanent: false,
        Department: { DID: 2, DName: "Sales" },
        Skill: [{ SId: 3, SName: "Java" }, { SId: 4, SName: "C#" }],
        Dob: new Date("13/12/1974")
      }
    ]
    this.filtered = this.employees;
  }

  ngOnInit(): void {
  }

  // onChange() {
  //   this.filtered = this.employees.filter(i => i.Name.toLowerCase().includes(this.search.toLowerCase()));
  // }
}
