import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../employee/Models/IEmployee';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {
  Id: number;
  employees: IEmployee[];
  constructor(private route: ActivatedRoute) {
    this.Id = 1;
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
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('Id');
    if (id != null) {
      this.Id = Number(id) - 1;
    }
    console.log(this.employees[this.Id].Name);
  }

  onSubmit(empForm: any): void {
    this.employees[this.Id].Name = empForm.value.Name;
    this.employees[this.Id].Salary = empForm.value.Salary;
  }
}
