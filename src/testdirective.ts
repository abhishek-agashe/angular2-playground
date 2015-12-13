import {Directive, ElementRef} from 'angular2/angular2';

@Directive({
	selector: '[bold]'
})

export class BoldDirective {
	constructor(el: ElementRef) {
		console.log(el);
		el.nativeElement.style.fontWeight = 'bold';
	}
}