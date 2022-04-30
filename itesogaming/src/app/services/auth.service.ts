import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users!: User;
  constructor(
    private database: DatabaseService
  ) { }

  login(nickname:string, password:string) {
    this.database.getUserById(nickname, password).subscribe(
      result => {
        console.log(result)
      }
    )
    // localStorage.setItem('usuario', JSON.stringify(user));
  }

  isLoged() {
    let user = localStorage.getItem('user') ? localStorage.getItem('user') : false;
    return user;
  }

  logOut() {
    localStorage.clear()
  }

}
