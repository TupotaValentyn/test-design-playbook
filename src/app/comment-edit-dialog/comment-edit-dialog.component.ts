import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-comment-edit-dialog',
  templateUrl: './comment-edit-dialog.component.html',
  styleUrls: ['./comment-edit-dialog.component.css']
})
export class CommentEditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CommentEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
    name = 'this name'
}


