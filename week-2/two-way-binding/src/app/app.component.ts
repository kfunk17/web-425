/*
 *  Title:  app.component.ts
 *  Author: Karie Funk
 *  Date:   13 January 2020
 *  Description: Assignment 2.3
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <br /><br /><br />
  <div class="container-fluid two-way-form">
  <h2>Two-Way Binding Example</h2><br />
  <div class="form-group">
      <input class="form-control" type="text"
             placeholder="Enter your name ..."
             [ {ngModel1 } ]="name">
             
             <button class="btn btn-primary form-control" {click}="name='' ">Clear Name</button>
             </div>
             
             <div class="form-group">
               <p class="alert-success">Welcome to two-way binding, {{name}}! </p>
             </div>
             
             </div>
            `,
            styles: [`
            h2{
              color: white;
              font-family: courier;
              background-color: black;
              padding-left: 10px;
              border: 5px solid orange;
            }
            .two-way-form { 
              width: 50%;
             }`]
})
export class AppComponent {
  title = 'funk-two-way-binding';
}
