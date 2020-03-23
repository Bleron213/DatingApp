import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  // tslint:disable-next-line: variable-name
  constructor(private _httpClient: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id: number): Observable<User> {
    return this._httpClient.get<User>(this.baseUrl + 'users/' + id);
  }

  updateUser(id: number, user: User) {
    return this._httpClient.put(this.baseUrl + 'users/' + id, user);
  }
}

