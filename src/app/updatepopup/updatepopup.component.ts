import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css'],
})
export class UpdatepopupComponent {
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  updatePostForm = this.builder.group({
    id: this.builder.control(''),
    userId: this.builder.control(''),
    title: this.builder.control(''),
    body: this.builder.control(''),
  });

  UpdatePost(): void {
    this.service
      .UpdatePost(
        this.data.id,
        this.updatePostForm.value.userId,
        this.updatePostForm.value.title,
        this.updatePostForm.value.body
      )
      .then((res) => {
        this.updatePostForm.setValue({
          id: res.id,
          userId: res.userId,
          title: res.title,
          body: res.body,
        });
        this.dialog.closeAll();
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  }
}
