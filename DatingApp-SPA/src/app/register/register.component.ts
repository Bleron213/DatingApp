import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    // tslint:disable-next-line: variable-name
    private _authService: AuthService,
    // tslint:disable-next-line: variable-name
    private _alertify: AlertifyService
    ) { }

  ngOnInit() {
  }

  register() {
    console.log('register() method clicked in the component');
    console.log(this.model);
    this._authService.register(this.model)
        .subscribe(() => {
          this._alertify.success('registration successful!');
        },
        error => {
          this._alertify.error(error);
        });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
