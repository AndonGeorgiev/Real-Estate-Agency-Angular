import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';



export interface CreateUserDto { email: string, password: string, role: string }

export interface IUser {
  _id: string;
  email: string,
  password: string,
  role: string,
  sells: number,
  __v: number,
}

let config = {
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': 'http://localhost:4200/',
  },
  withCredentials: true
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

userId: string = this.getUserId()

  constructor(private httpClient: HttpClient) { }

  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.httpClient.post<IUser>(`http://localhost:3030/login`, userData)
  }

  getProfile$(id: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:3030/users/profile/`+ id)
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`http://localhost:3030/register`, userData)
  }

  getUserId() : string {
    let user = JSON.parse(window.localStorage.getItem("user" )|| '{}');
    let userId : string = user.user._id;
    return userId
  }


}



