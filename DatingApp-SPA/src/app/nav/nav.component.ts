import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }
  login(){
    this._authService.login(this.model)
    .subscribe(
      next => {
        console.log('Logged in Successfully')
      },
      error => {
        console.log('Error! Failed to log in')
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token; // if there is something in the token, return true otherwise return false
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
