import {Component, NgClass} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
//import {TodoService} from './services/todoservice';

import {Page1} from './page1/page1';
import {Routing} from './routing/routing';
import {AsyncData} from './asyncdata/asyncdata';
import {PipesComponent} from './pipes/pipes';
import {Parallel} from './parallel/parallel';
import {BoldDirective} from './testdirective';

@Component({
	selector: 'app',
	templateUrl: 'src/app.html',
	styles: [`
		.red: {color: red;}
		.foo: {float: right;}
		`],
	directives: [Page1, Routing, AsyncData, PipesComponent, ROUTER_DIRECTIVES, NgClass]
	//providers: [TodoService]
})

@RouteConfig([
		
		{ path: '/', as: 'Page1', component: Page1 },
		{path: '/routing/...', as: 'Routing', component: Routing },
		{path: '/asyncdata', as: 'AsyncData', component: AsyncData },
		{path: '/pipes', as: 'Pipes', component: PipesComponent}
	])

export class App {
	classname: string;
	constructor() {
		this.classname = "foo";
		console.log('my first component');
		// todoservice.getTodos("app");
		// todoservice.addTodos("drink water");
		// todoservice.getTodos("app");
		// setTimeout(()=> todoservice.getTodos("app"), 5000);
	}
}