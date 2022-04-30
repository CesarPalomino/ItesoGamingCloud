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

  login(usuario: User) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  isLoged() {
    let user = localStorage.getItem('usuario') ? localStorage.getItem('usuario') : false;
    return user;
  }

  getData() {
    return JSON.parse(localStorage.getItem('usuario')!);
  }

  logOut() {
    localStorage.clear()
  }

}
