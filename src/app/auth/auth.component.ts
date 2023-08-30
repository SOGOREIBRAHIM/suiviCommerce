import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Client } from '../models/client';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user:Client | undefined;
  register:boolean = false;
  serviceAuth:AuthService;
  authLogin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.email]) 
  });
  authRegister = new FormGroup({
    email: new FormControl('', [Validators.required]),
    completName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.email]) 
  });
  constructor(serviceAuth:AuthService){
      this.serviceAuth = serviceAuth;
  }

  login(){
    //id:number,nom:string,prenom:string,email:string,password:string)
    this.user =
     this.serviceAuth.getLogin(new Client(
      parseInt(""),
      "", //nom
      this.authLogin.value.email?? "",
      this.authLogin.value.password?? ""
    ))
  }

  registerf(){
    //id:number,nom:string,email:string,password:string)
    this.serviceAuth.putInUserList(new Client(
      this.serviceAuth.getAllUsers().length+1,
      this.authRegister.value.completName?? "",
      this.authRegister.value.email?? "",
      this.authRegister.value.password?? ""
    ))
  }
}
