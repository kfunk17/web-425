
import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You are not logged in and will be redirected to Login page.");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
