import {Component, Input, NgFor, NgIf} from 'angular2/angular2';

@Component({
    selector: 'employeelist',
    directives: [NgFor, NgIf],
    template: `
            <div> 
               <ul >
                    <li *ng-for="#employee of employeeList" (click)="clickedEmployee($event)">
                        {{employee}}
                    </li>
                </ul>
                <p *ng-if="selectedEmployee"> {{selectedEmployee}}</p> 
            </div>
        `
})

export class EmployeeList {
    @Input() startwith: string;
    selectedEmployee: string;
    employeeList: string[];
    myEmployees: string[] = ['C-3PO', 'Darth Vader', 'Han Solo', 'Chewbacca', 'Yoda', 'Count Dooku'];

    constructor() {
        console.log(this.employeeList);
    }

    onInit() {

        this.employeeList = this.myEmployees.filter((employee)=>{
                return employee.startsWith(this.startwith);
        });
    }

    clickedEmployee(event: any){
        this.selectedEmployee = event.target.textContent.trim();
    }
}