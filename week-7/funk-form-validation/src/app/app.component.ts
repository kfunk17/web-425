/*
  Title:  app.comoponent.ts
  Author: Karie Funk
  Date:   02/15/2020
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'funk-form-validation';

  onSubmit(formData) {
	  console.log(formData);
  }
}
