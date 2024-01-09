import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent {

  constructor(private dialogRef: MatDialogRef<AlertBoxComponent>,@Inject(MAT_DIALOG_DATA) public data: { success: boolean, message: string }){

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
