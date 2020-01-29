import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): User {
    return new User(0, "Karie", "Funk", "6194 Zion BLVD, Culbertson, NE 69024");
    
  }
}
