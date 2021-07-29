import { Injectable } from '@angular/core';
import { IEmployee } from './employee/Models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: IEmployee[];
  constructor() {
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

  getAllEmployees(): IEmployee[] {
    return this.employees;
  }

  getEmployeeById(Id: number): IEmployee {
    let obj = this.employees.find(i => i.ID === Id);
    if (obj != null) {
      return obj;
    }
    obj = {
      ID: 0, Name: "", Salary: 0, Permanent: false,
      Department: { DID: 0, DName: "" },
      Skill: [{ SId: 0, SName: "" }],
      Dob: new Date("")
    }
    return obj;
  }
}
