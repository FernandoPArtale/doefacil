import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _token?: string | undefined;
  public get token(): string | undefined {
    if (!this._token) {
      this._token = localStorage.getItem('token') ?? undefined;
      this.isLoggedIn = !!this._token;
    }
    return this._token;
  }
  public set token(value: string | undefined) {
    if(this._token != value) {
      localStorage.setItem('token', value ?? '');
    }
    this.isLoggedIn = !!value;
    this._token = value;
  }

  public isLoggedIn: boolean = false;

  
  constructor(private router: Router) { }


  public login(username: string, password: string) {
    this.router.navigate(['/']);
  }

  public logout() {
    this.token = undefined;
    this.router.navigate(['/']);
  }


}
