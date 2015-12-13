'use strict';

import {Component, Input} from 'angular2/angular2';

@Component({
	selector: 'parallel',
	templateUrl: './src/parallel/parallel.html' 
})

export class Parallel {
	@Input() model: any;
	constructor() {
	}
	processTheClick(event: any) {

		console.log(event.target);
		console.log("clicked the link ..", event);
	}
	onInit() {
		console.log("model::::",this.model);
	}

}