import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tourney } from '../interfaces/tourney.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  API: string = 'https://j14b6vpfbl.execute-api.us-east-1.amazonaws.com/'


  constructor(
    private http: HttpClient
  ) { }

  //funciona
  getAllUsers() {
    return this.http.get<User[]>(this.API + 'getUsers')
  }

  //funciona
  getTourney() {
    return this.http.get<Tourney[]>(this.API + 'getTourney')
  }

  //neceista datos
  getUserById(nickname: string, password: string) {
    let header = new HttpParams().set("nickname", nickname).set("password", password)
    return this.http.get<any>(this.API + `getUserByID/${{nickname}}/${{password}}`)
  }

  //neceita datos
  createUser(user: any) {
    return this.http.post<any>(this.API + 'addUser', user)
  }

  //necesita datos
  getTourneyById(tourneyId: string) {

    let header = new HttpHeaders({
      id: tourneyId
    })

    return this.http.get<any>(this.API + 'getUserByID', { headers: header })
  }

  //neceista datos
  createTourney(tourney: any) {
    return this.http.post<any>(this.API + 'createTourney', tourney)
  }

}
