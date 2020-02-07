
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <h4><div class="box" *ngIf="!!stockSymbol">Buying {{ quantity }} shares of {{ stockSymbol }}</div></h4>
  `,
  styles: [`
	:host { background: cyan;}
	.box { margin-left: 100px; border: 1px solid #000; margin-top: 10px; background-color: white; color: black; padding: 10px; width: 300px; font-family: sans-serif;}
  `]
})
export class OrderComponent implements OnInit {
	@Input() quantity: number;
	@Input() stockSymbol: string;

	constructor() { }

	ngOnInit() {
	}

}
