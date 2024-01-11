import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AlertBoxComponent } from '../alert-box/alert-box.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit, OnDestroy {
  
  coursesSubscription: Subscription | undefined;
  courses: any;

  constructor(private dialogRef: MatDialog, private http: HttpClient) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.coursesSubscription = this.http.get<any>('http://localhost:8080/api/courses')
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
}
