import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  // tslint:disable-next-line: variable-name
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    console.log('register() method clicked in the component');
    console.log(this.model)
    this._authService.register(this.model)
        .subscribe(() => {
          console.log('registration successful!');
        },
        error => {
          console.log(error);
        });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
