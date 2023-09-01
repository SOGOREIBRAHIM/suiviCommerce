import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  router:Router;
  user:Client | undefined;
  register:boolean = false;
  serviceAuth:AuthService;
  authLogin = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]) 
  });
  authRegister = new FormGroup({
    email: new FormControl('', [Validators.required]),
    completName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.email]) 
  });
  constructor(serviceAuth:AuthService,router:Router){
      this.serviceAuth = serviceAuth;
      this.router = router;
  }

  login():any{
  //  id:number,nom:string,prenom:string,email:string,password:string)
    this.user =
     this.serviceAuth.getLogin(new Client(
      parseInt(""),
      "", //nom
      this.authLogin.value.email?? "",
      "",
      "",
      this.authLogin.value.password?? "",
      0
    ));
   // this.serviceAuth.setUser(new Client(1,"BBB","douc@gmail.com","1234"));
   // this.serviceAuth.user = 
   console.log(this.user);
   if(this.user){
    this.router.navigate(['/accueil']);
   }
    return this.user ? this.user : null;
  }
  registerf(){
    //id:number,nom:string,email:string,password:string)
    if(this.serviceAuth.putInUserList(new Client(
      this.serviceAuth.users.length+1,
      this.authRegister.value.completName?? "",
      this.authRegister.value.email?? "",
      "",
      "",
      this.authRegister.value.password?? "",
      0
    ))){
      this.register = false;
    }

  }
}
