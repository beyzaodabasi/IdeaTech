import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewpopup',
  templateUrl: './viewpopup.component.html',
  styleUrls: ['./viewpopup.component.css'],
})
export class ViewpopupComponent{
  constructor(
    public dialogRef: MatDialogRef<ViewpopupComponent>,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  viewPostForm = this.builder.group({
    id: this.builder.control(''),
    userId: this.builder.control(''),
    title: this.builder.control(''),
    body: this.builder.control(''),
    });


}
