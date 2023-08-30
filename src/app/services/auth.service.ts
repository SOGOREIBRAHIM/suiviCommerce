import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Client | undefined;
  users:Client[] = []; //  localStorage.setItem("users","");

  constructor() {

   }
   getUser():Client | undefined{
    return this.user;
   }
   getLogin(user:Client):any{
    var users = localStorage.getItem("users");
    this.users = JSON.parse(localStorage.getItem("users") ?? "");
    return this.users.find(user => user.email === user.email && user.password === user.password);
    
   }
   getAllUsers(){
    if(localStorage.getItem("users") == null){
      return;
    }
    return JSON.parse(localStorage.getItem("users") ?? "");
   }
   putInUserList(user:Client):boolean{
      this.users.push(user);
      localStorage.setItem("users",JSON.stringify(this.users));
      return true;
   }
   
}
