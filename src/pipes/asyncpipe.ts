import {Component, Input} from 'angular2/angular2';

@Component({
    selector: 'asyncpipe',
    template:
        `<div>
            <p> This is async pipe component</p>
            <p>This data is loading ... {{asyncdata | async}}</p>
        </div>`
})

export class AsyncPipe {
    @Input() asyncdata: Promise<string>;
    constructor() {

    }
    onInit() {

    }

}