/*
============================================
; Title: Assignment 4.3
; Author: Karie Funk
; Date: 29 January 2020
;===========================================
*/

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
      </ul>
    </nav>

    <br /><br />

    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Handling Form Events with Observables</h2>
          <br />
          <div class="form-group">
            <label for="txtStockPrice">Stock Price: </label>
            <input type="text"
            class="form-control"
            id="txtStockPrice"
            placeholder="Enter stock price..."
            [formControl]="searchInput">
          </div>
        </div>
      </div>

      <br /><br />

      <div class="row">
        <div class="col">
          <h4 class="txt-bold">Results: {{ convertedStockPrice }}</h4>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .txt-bold {
      font-weight: bold;
      background-color: yellow;
      border: solid 1px black;
    }
  `]
})
export class AppComponent {
  title = 'funk-form-control';

  searchInput = new FormControl('');
  convertedStockPrice: string;

  constructor() {
    this.searchInput.valueChanges.pipe(debounceTime(500))
      .subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock: string) {
    this.convertedStockPrice =
      `The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;
  }
}
