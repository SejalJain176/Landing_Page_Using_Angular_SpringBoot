import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInUsername="";
  signInPassword="";
 
  constructor(private http:HttpClient){
    
  }

  SignIn(){

    this.http.post('http://localhost:8080/api/signin', {
      username: this.signInUsername,
      password: this.signInPassword,
    }).subscribe(response => {
      
      console.log('Sign In Successful');
      
      
    }, error => {
      console.error('Sign In Failed', error);
    
    });
  }

  }

