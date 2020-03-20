import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(
    // tslint:disable-next-line: variable-name
    public _authService: AuthService,
    // tslint:disable-next-line: variable-name
    private _alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login() {
    this._authService.login(this.model)
    .subscribe(
      next => {
        this._alertify.success('Logged in successfully');
      },
      error => {
        this._alertify.error(error);
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }

  loggedIn() {
    return this._authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this._alertify.message('Logged out');
    this.router.navigate(['/home']);
  }
}
