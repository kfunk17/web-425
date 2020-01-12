/*
 *  Title:  app.component.ts
 *  Author: Karie Funk
 *  Date:   11 January 2020
 *  Description: Exercise 2.2
 */

import { Component } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ name }}</h1>
  <button (click)="changeName()">Change Name</button>`,
  styles: [ `

    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'one-way-binding';

  //Class Property
  name:string = 'Karie Funk';

  //Change Name Method
  changeName() {
    this.name = "The Funk Master"
  }
}
