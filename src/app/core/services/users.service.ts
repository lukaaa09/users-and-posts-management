import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
   return  this._http.get<UserModel[]>(`${this.baseUrl}/users`)
  }

  getUserDetails(id: number): Observable<UserModel> {
    return this._http.get<UserModel>(`${this.baseUrl}/users/${id}`)
  }
}
