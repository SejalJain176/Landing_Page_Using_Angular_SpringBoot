import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../alert-box/alert-box.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInUsername="";
  signInPassword="";
  hidePassword: boolean=false;
  signInSubscription: any;
 
  constructor(private http:HttpClient,private router:Router,private dialogRef: MatDialog ){
    
  }

  SignIn() {

    if (this.signInUsername != undefined && this.signInPassword != undefined
    && this.signInUsername != "" && this.signInPassword != ""
    && this.signInUsername != null && this.signInPassword != null ){
      this.signInSubscription = this.http.post('http://localhost:8080/api/signin', {
      username: this.signInUsername,
      password: this.signInPassword,
    }, { responseType: 'text' }) 
      .subscribe(response => {
       
        const token = response as string;
      
        if(token!=null){
        localStorage.setItem('authToken',token)
         console.log('Sign In Successful');
         console.log('JWT Token:', token);
         this.dialogRef.open(AlertBoxComponent, {
          width: '300px',
          data: { success: true, message: 'Signed In Successfully!' }
        })
         this.router.navigate(['profile'])
        }
       
      }, error => {
       
        console.error('Sign In Failed', error);
        this.dialogRef.open(AlertBoxComponent, {
          width: '300px',
          data: { success: false, message: 'Signed In Failed!' }
        })
      });
    } else{

      this.dialogRef.open(AlertBoxComponent, {
        width: '300px',
        data: { success: false, message: 'Signed In Failed!' }
      })
    }
  }
  
  togglePasswordVisibility(input: HTMLInputElement): void {
    this.hidePassword = !this.hidePassword;
    input.type = this.hidePassword ? 'password' : 'text';
  }

  ngOnDestroy(){
   if(this.signInSubscription ){
    this.signInSubscription.unsubscribe()
   }
  }
  }

