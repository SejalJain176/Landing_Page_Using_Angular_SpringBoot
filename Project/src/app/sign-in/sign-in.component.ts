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

  SignIn() {
    this.http.post('http://localhost:8080/api/signin', {
      username: this.signInUsername,
      password: this.signInPassword,
    }, { responseType: 'text' }) 
      .subscribe(response => {
       
        const token = response as string;
      
        if(token!=null){
         alert('Sign In Successful')
         console.log('Sign In Successful');
         console.log('JWT Token:', token);
        }
       
      }, error => {
        alert('Sign In Failed')
        console.error('Sign In Failed', error);
      });
  }
  

  }

