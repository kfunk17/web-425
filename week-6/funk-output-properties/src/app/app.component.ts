import { Component } from '@angular/core';
import { PriceQuote } from './components/price-quote/iprice-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'funk-output-properties';

	priceQuote: PriceQuote;

	priceQuoteHandler(event: PriceQuote) {
		this.priceQuote = event;
	}
}
