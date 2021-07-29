import { IDepartment } from './IDepartment';
import { ISkill } from './ISkill';
export  interface IEmployee
{
    ID:number;
    Name:string;
    Salary:number;
    Permanent:boolean;
    Department:IDepartment;
    Skill:ISkill[];
    Dob:Date;
}