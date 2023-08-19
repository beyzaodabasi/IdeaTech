import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.css'],
})
export class DeletepopupComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletepopupComponent>,
    private builder: FormBuilder,
    private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletePost(code: any) {
    this.service.DeletePost(code).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    });
  }

  viewPostForm = this.builder.group({
    id: this.builder.control(''),
    userId: this.builder.control(''),
    title: this.builder.control(''),
    body: this.builder.control(''),
  });
}
