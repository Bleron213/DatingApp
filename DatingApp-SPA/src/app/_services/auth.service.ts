import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  // tslint:disable-next-line: variable-name
  constructor(private _httpClient: HttpClient) { }

  login(model: any) {

    return this._httpClient.post(this.baseUrl + 'login', model)
    .pipe(
      map((response: any) => {
        const user = response;
        if(user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          console.log('login: token =>', this.decodedToken);
        }
      })
    );
  }

  register(model: any) {
    console.log('register() method in service called');

    return this._httpClient.post(this.baseUrl + 'register', model);
  }


  loggedIn() {
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token);
  }


}
