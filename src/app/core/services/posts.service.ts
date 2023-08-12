import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsModel } from '../models/posts-model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<PostsModel[]> {
    return this._http.get<PostsModel[]>(`${this.baseUrl}/posts`)
  }

}
