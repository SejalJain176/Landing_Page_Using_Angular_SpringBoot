import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInUsername="";
  signInPassword="";
 
  constructor(private http:HttpClient,private router:Router){
    
  }

  SignIn() {
    this.http.post('http://localhost:8080/api/signin', {
      username: this.signInUsername,
      password: this.signInPassword,
    }, { responseType: 'text' }) 
      .subscribe(response => {
       
        const token = response as string;
      
        if(token!=null){
        
         console.log('Sign In Successful');
         console.log('JWT Token:', token);
         this.router.navigate(['profile'])
        }
       
      }, error => {
        alert('Sign In Failed')
        console.error('Sign In Failed', error);
      });
  }
  

  }

