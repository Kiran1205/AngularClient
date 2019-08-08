import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isAuthenticated() : boolean {
    //const token =  localStorage.getItem('token');
    return false;
  }

  public getToken() : string {
    return localStorage.getItem('token');
  }

  public setToken(token : string) {
     localStorage.setItem('token',token);
  }

  public removeToken(token : string) {
    localStorage.removeItem('token');
 }

}
