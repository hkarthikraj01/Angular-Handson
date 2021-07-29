import { Pipe, PipeTransform } from "@angular/core";
import { IEmployee } from "../employee/Models/IEmployee";

@Pipe({
    name: "filter"
})

export class FilterPipe implements PipeTransform {
    transform(value: IEmployee[], args:string ) {
        return value.filter(i => i.Name.toLowerCase().includes(args.toLowerCase()));
    }
}