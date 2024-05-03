import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  signUpObj: SignUpModel  = new SignUpModel();
  loginObj: LoginModel  = new LoginModel();

  constructor( private router:Router){}

  onRegister(){
    console.log(this.signUpObj)
    // let localUser = new Array();
    // localUser = JSON.parse(localStorage.getItem('angular16users')) ? JSON.parse(localStorage.getItem('angular16users')):[] ;
    const localUser = localStorage.getItem('angular16users');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular16users', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular16users', JSON.stringify(users))
    }
    alert('Registration Success')
  }

  onLogin(){
    const localUsers =  localStorage.getItem('angular16users');
    if(localUsers != null) {
      const users =  JSON.parse(localUsers);

      const isUserPresent =  users.find( (user:SignUpModel)=> user.name == this.loginObj.name && user.password == this.loginObj.password);
      if(isUserPresent != undefined) {
        alert("User Found...");
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/profile');
      } else {
        alert("No User Found")
      }
    }
  }
  }



export class SignUpModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  name: string;
  password: string;

  constructor() {
    this.name = ""; 
    this.password= ""
  }
}
