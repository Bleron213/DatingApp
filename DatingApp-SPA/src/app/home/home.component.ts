import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  constructor(
    // tslint:disable-next-line: variable-name
    private _httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }



  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
