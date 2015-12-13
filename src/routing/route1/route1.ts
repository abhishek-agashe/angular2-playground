"use strict";

import {Component} from 'angular2/angular2';
import {TodoService} from '../../services/todoservice';

@Component({
	selector: 'route1',
	templateUrl: 'src/routing/route1/route1.html'
	//providers: [TodoService]
})

export class Route1 {
	constructor(todoservice: TodoService) {
		todoservice.getTodos("test1");
	}
}