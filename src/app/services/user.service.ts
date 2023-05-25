import { Injectable } from '@angular/core';

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

  constructor() { }

}
