import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.minLength(5)])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
  }); 
  constructor(private userService: UserService) { }

  async login() {
    this.userService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
