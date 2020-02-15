/*
	Name: Karie Funk
	Date: 02/15/2020
	Assignment: 7.2 Template Driven Form
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'funk-template-forms';

  onSubmit(formData) {
	  console.log(formData);
  }
}
