import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { Route, Router } from '@angular/router';
import { MatToolbar,MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav,MatSidenavModule,MatDrawer,MatDrawerContainer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Project';

constructor(private router:Router){



}
navItems = [
  { label: 'Profile', icon: 'person', horizontal: true,link:'/sign-in' },
  { label: 'Explore', icon: 'explore', horizontal: true,link:'explore' },
  { label: 'Books', icon: 'books', horizontal: true ,link:'books'},
  { label: 'Discusssions', icon: 'chat', horizontal: true , link:'discussions'},
  { label: 'Notes', icon: 'notes', horizontal: true,link:'notes' },
  { label: 'Help', icon: 'help', horizontal: true,link:'help' },
  { label: 'Contact', icon: 'public', horizontal: true,link:'contact' },
  { label: 'Instructors', icon: 'people', horizontal: true,link:'instructors' },
 
 
];

isSidenavOpen = false;

  // Method to toggle the side navigation
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;

    
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
