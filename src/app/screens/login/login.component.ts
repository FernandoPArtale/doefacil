import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  }); 
  constructor() { }

  login() {
    
  }
}
