import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  newsignInUsername: any;
  newsignInPassword: any;
  retypeSignInPassword:any;

  constructor(private http:HttpClient,private router:Router){
    
  }
SignUp(){

  this.http.post('http://localhost:8080/api/signup', {
    username: this.newsignInUsername,
    password: this.newsignInPassword,
  },{ responseType: 'text' }).subscribe(response => {
    
    console.log(response)
    this.router.navigate(['sign-in'])
    
  }, error => {
   
    console.log('Sign up Failed', error);
    alert("Signed Up Failed!")


    
  
  });
}
}
