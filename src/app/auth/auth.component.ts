import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Auth } from '../auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user:Auth | undefined;
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
    this.user =
     this.serviceAuth.getLogin(new Auth(
      this.authLogin.value.email?? "",
      "",
      this.authLogin.value.password?? "",
      ""
    ))
  }

  registerf(){
    this.serviceAuth.putInUserList(new Auth(
      this.authRegister.value.email?? "",
      this.authRegister.value.completName?? "",
      this.authRegister.value.password?? "",
      ""
    ))
  }
}
