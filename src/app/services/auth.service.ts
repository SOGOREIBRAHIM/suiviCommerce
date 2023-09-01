import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:Client[] = [];
  private userSubject = new Subject<Client>();
  user$ = this.userSubject.asObservable();

  private usernameSubject = new Subject<string>();
  username$ = this.usernameSubject.asObservable();

  user:Client;
  username:string;
   //  localStorage.setItem("users","");

  constructor() {
    this.user = new Client(1,"inc","","","","1234",0);
    this.username = this.user.nomComplet;
    this.users = this.getAllUsers() ? this.getAllUsers() : [];
   }
   setUser(user:Client){
      this.user = user;
      this.setUserName(this.user.nomComplet);
   }
   setUserName(username:string){
    this.usernameSubject.next(username);
   // this.username = username; 
   }
   getUserName():string{
    return this.username;
   }
    getUser():Client{
     return this.user;
    }
   getLogin(user:Client):any{
   // var users = localStorage.getItem("users");
    this.users = JSON.parse(localStorage.getItem("users") ?? "");
    const cUser = this.users.find(userFinded => userFinded.email === user.email && userFinded.password === user.password);
    
    if(cUser !== undefined){
        console.log(cUser);
      this.userSubject.next(cUser);
    }
    
    return cUser;// this.users.find(user => user.email === user.email && user.password === user.password);
    
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
