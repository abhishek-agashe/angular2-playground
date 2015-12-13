"use strict";

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Earthquake} from '../models/earthquake';

@Injectable()
export class EarthquakeService {

	http: Http = null;
	earthquakeData: any[] = [];

	constructor(http: Http) {
		this.http = http;
	}

	getEarthquakeData(callback:(data: any[]) => void) {
		console.log("calling eq service");
		this.http.get('http://earthquake-report.com/feeds/recent-eq?json')
			.map((response: any) => {
				return response.json();
			})
			.map((jsonData: any[]) => {
				console.log("got it");
				jsonData.forEach((item) => {
					this.earthquakeData.push(new Earthquake(item));
				});
				return this.earthquakeData;
				
			})
			.subscribe(
				(data:any) => callback(this.earthquakeData),
				(err:any)  => console.log(err),
				() => console.log("call completed")
			);
	}
}