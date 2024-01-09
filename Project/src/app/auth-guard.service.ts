// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    
    const isAuthenticated = !!localStorage.getItem('authToken');

    if (isAuthenticated) {
      return true;
    } else {
     
      this.router.navigate(['sign-in']);
      return false;
    }
  }
}
