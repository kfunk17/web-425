/*
============================================
; Title: Assignment 4.4
; Author: Karie Funk
; Date: 29 January 2020
;===========================================
*/

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>User Information</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody *ngFor="let user of users| async">
              <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'funk-async-pipe';
  users: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
