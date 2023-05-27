import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/types/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    confirmPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    document: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])),
    birthdate: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor() {

  }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(frm => {
      const password = frm.password;
      const confirm = frm.confirmPassword;
      if (password !== confirm && password.length != 0 && confirm.length != 0) {
        this.registerForm.get('confirmPassword')?.setErrors({ notMatched: true });
      }
      else {
        this.registerForm.get('confirmPassword')?.setErrors(null);
      }
    });
  }

  onSubmit() {
    
  }
}
