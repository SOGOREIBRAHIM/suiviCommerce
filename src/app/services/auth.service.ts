import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Client | undefined;
  users = localStorage.setItem("users","");
  constructor() {

   }
   getUser():Client | undefined{
    return this.user;
   }
   getLogin(user:Client){
    var users = localStorage.getItem("users");
    return user;
   }
   getAllUsers(){
    if(localStorage.getItem("users") == null){
      return;
    }
    return JSON.parse(localStorage.getItem("users") ?? "");
   }
   putInUserList(user:Client){

   }
   setUser(user:Client){
    this.user = user;
   }
}
