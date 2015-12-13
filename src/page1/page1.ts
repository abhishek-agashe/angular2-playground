import {Component} from 'angular2/angular2';
import {Employee} from '../data-bindings-events/employee';

@Component({
	selector: 'page1',
	directives: [Employee],
	templateUrl: 'src/page1/page1.html'
})

export class Page1 {
	constructor() {

	}
}