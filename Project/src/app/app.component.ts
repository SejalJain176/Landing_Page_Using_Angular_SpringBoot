import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { Route, Router } from '@angular/router';
import { MatToolbar,MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

constructor(private router:Router){



}


 signInUsername="";
 signInPassword="";

 openSignInModal(){

  this.router.navigate(['sign-in'])
 }

 openSignUpModal(){
  this.router.navigate(['sign-up'])
 }
 
}
