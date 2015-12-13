
import {Component, NgFor} from 'angular2/angular2';
import {EarthquakeService} from '../services/earthquakeservice';
import {Parallel} from '../parallel/parallel'; 

@Component({
	selector: 'page3',
	templateUrl: 'src/asyncdata/asyncdata.html',
	providers: [EarthquakeService],
	directives: [Parallel, NgFor],
	styles: [`
		.eqInfo-location { width: 400px;}
		.eqInfo-magnitude {width: 100px;}
		.eqInfo-dateTime {width: 250px;}
		.eqInfo-title {width: 300px;}
		tr {border-bottom: 1px solid;}
		`]

})

export class AsyncData {
	data: any[];
	constructor(earthquakeService: EarthquakeService) {
		earthquakeService.getEarthquakeData((data:any) => {
			this.data = data;
		});
	}
}