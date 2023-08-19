import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userdetailspopup',
  templateUrl: './userdetailspopup.component.html',
  styleUrls: ['./userdetailspopup.component.css'],
})
export class UserdetailspopupComponent {
  constructor(
    public dialogRef: MatDialogRef<UserdetailspopupComponent>,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  viewPostForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    username: this.builder.control(''),
    email: this.builder.control(''),
    street: this.builder.control(''),
    suite: this.builder.control(''),
    city: this.builder.control(''),
    zipcode: this.builder.control(''),
    lat: this.builder.control(''),
    lng: this.builder.control(''),
    phone: this.builder.control(''),
    website: this.builder.control(''),
    companyName: this.builder.control(''),
    catchPhrase: this.builder.control(''),
    bs: this.builder.control(''),
  });
}
