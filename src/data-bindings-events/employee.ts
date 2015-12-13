import {Component} from 'angular2/angular2';
import {EmployeeList} from './employeelist';

@Component({
    selector: 'employee',
    directives: [EmployeeList],
    template: `
            <div> 
                <h1>App component</h1>
                <employeelist [startwith]='character'></employeelist>
            </div>
        `
})

export class Employee {
    character: string = '';
    constructor() {
        this.character = 'C';
    }
}