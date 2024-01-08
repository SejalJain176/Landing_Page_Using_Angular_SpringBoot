import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  newsignInUsername: any;
  newsignInPassword: any;
  retypeSignInPassword:any;

  constructor(private http:HttpClient){
    
  }
SignUp(){

  this.http.post('http://localhost:8080/api/signup', {
    username: this.newsignInUsername,
    password: this.newsignInPassword,
  }).subscribe(response => {
    
    console.log('Sign up Successful');
    
    
  }, error => {
    console.log('Sign up Failed', error);
  
  });
}
}
