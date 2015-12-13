"use strict";

export class Earthquake {
	dateTime: Date;
	depth: string;
	latitude: string;
	link: string;
	location: string;
	longitude: string;
	magnitude: string;
	title: string;

	constructor(data: any) {
		this.dateTime = new  Date(data.date_time);
		this.depth = data.depth;
		this.latitude = data.latitude;
		this.link = data.link;
		this.location = data.location;
		this.longitude = data.longitude;
		this.magnitude = data.magnitude;
		this.title = data.title;
	}

}