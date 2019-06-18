import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  setToken(token: string){
    console.log("inside setToken method");
    localStorage.setItem(TOKEN,token);
  }

  isLogged(){
    console.log("inside isLogged method");
    return localStorage.getItem(TOKEN) == "logged";
  } 
}
