import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private http:HttpClient
  ) { }

  API:string = 'https://j14b6vpfbl.execute-api.us-east-1.amazonaws.com/'

  getAllUsers(){
    return this.http.get<any>(this.API+'getUsers')
  }
}
