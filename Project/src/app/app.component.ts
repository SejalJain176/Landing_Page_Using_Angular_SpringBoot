import { Component } from '@angular/core';
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
  { label: 'Home', icon: 'home', horizontal: true },
  { label: 'Explore', icon: 'explore', horizontal: true },
  { label: 'Dashboard', icon: 'dashboard', horizontal: true },
  { label: 'Home', icon: 'home', horizontal: true },
  { label: 'Explore', icon: 'explore', horizontal: true },
  { label: 'Dashboard', icon: 'dashboard', horizontal: true },
  { label: 'Home', icon: 'home', horizontal: true },
  { label: 'Explore', icon: 'explore', horizontal: true },
 
 
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

 toogleMenu(input:HTMLElement){
  

 }
}
