import {Component, ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Route1} from './route1/route1';
import {Route2} from './route2/route2';
import {Route3} from './route3/route3';

import {TodoService} from '../services/todoservice';

@Component({
	selector: 'routing',
	templateUrl: 'src/routing/routing.html',
	styleUrls: ['src/routing/routing.css'],
	directives: [ROUTER_DIRECTIVES, Route1, Route2, Route3],
	providers: [TodoService]

})

@RouteConfig([
	{ path: '/', as: 'Route1', component: Route1 },
	{ path: '/route2', as: 'Route2', component: Route2 },
	{ path: '/route3', as: 'Route3', component: Route3 },
	])

export class Routing {
	lazyData: Promise<string> = null;
	constructor(todoservice: TodoService) {
		todoservice.getTodos("routing");
		todoservice.addTodos("go to gym");
		todoservice.getTodos("routing");
		this.lazyData = new Promise((resolve: any, reject: any)=>{
			setTimeout(()=>resolve("resolved"), 3000);
		});
	}
}