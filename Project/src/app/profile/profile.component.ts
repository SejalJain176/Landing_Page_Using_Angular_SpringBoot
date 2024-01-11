import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  coursesSubscription: any;
  courses: any;
constructor(private router:Router,private http:HttpClient){

}

ngOnInit() {
  this.getUserCourses();
}

getUserCourses() {
  this.coursesSubscription = this.http.get<any>('http://localhost:8080/api/userCourses')
    .subscribe(
      (response: any) => {
        this.courses=response;
      },
      (error: any) => {
        console.error('Failed', error);
      }
    );
}

ngOnDestroy() {
  if (this.coursesSubscription) {
    this.coursesSubscription.unsubscribe();
  }
}
  

  signOut(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['sign-in']);
    console.log('User signed out');
  }
}
