
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1 class="home">Please login here</h1>
  `,
  styles: [`
    .home {
      background-color: greenyellow;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
