import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../alert-box/alert-box.component';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  newsignInUsername: any;
  newsignInPassword: any;
  retypeSignInPassword: any;
  hidePassword: boolean = false;
  hidePassword1: boolean = false;

  constructor(private http: HttpClient, private router: Router,private dialogRef: MatDialog) {

  }
  SignUp() {

    if ((this.newsignInPassword != undefined && this.newsignInUsername != undefined && this.retypeSignInPassword != undefined)
      && (this.newsignInPassword != "" && this.newsignInUsername != "" && this.retypeSignInPassword != "")
      && (this.newsignInPassword != null && this.newsignInUsername != null && this.retypeSignInPassword != null)
     && (this.newsignInPassword==this.retypeSignInPassword)) {
      this.http.post('http://localhost:8080/api/signup', {
        username: this.newsignInUsername,
        password: this.newsignInPassword,
      }, { responseType: 'text' }).subscribe(response => {

        console.log(response)
        this.dialogRef.open(AlertBoxComponent, {
        width: '300px',
        data: { success: true, message: 'Congratulations! Your signup was successful.' }
      })
        this.router.navigate(['sign-in'])

      }, error => {

        console.log('Sign up Failed', error);
        this.dialogRef.open(AlertBoxComponent, {
          width: '300px',
          data: { success: false, message: 'SignUp Failed!' }
        })
         



      });
  
    }

    else if(this.newsignInPassword!=this.retypeSignInPassword){
     
      this.dialogRef.open(AlertBoxComponent, {
        width: '300px',
        data: { success: false, message: 'Please Retype Same Password!' }
      })
       
    }
    else{
      this.dialogRef.open(AlertBoxComponent, {
        width: '300px',
        data: { success: false, message: 'Please Enter All Mandatory Details!' }
      })
    }
  }

  togglePasswordVisibility(input: HTMLInputElement): void {
    this.hidePassword = !this.hidePassword;
    input.type = this.hidePassword ? 'password' : 'text';
  }

  togglePasswordVisibility1(input: HTMLInputElement): void {
    this.hidePassword1 = !this.hidePassword1;
    input.type = this.hidePassword1 ? 'password' : 'text';
  }
  
}
