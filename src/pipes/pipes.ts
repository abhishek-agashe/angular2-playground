import {Component} from 'angular2/angular2';
import {AsyncPipe} from './asyncpipe';

@Component({
    selector: 'pipe',
    template: `<div>Pipe examples <asyncpipe [asyncdata]="lazyData"></asyncpipe>
                </div>`,
    directives: [AsyncPipe]
})

export class PipesComponent {
    lazyData: Promise<string>;
    constructor() {
        this.lazyData = new Promise((resolve: any, reject: any)=>{
            setTimeout(()=>resolve("asynchronously"), 2000);
        });
    }
}