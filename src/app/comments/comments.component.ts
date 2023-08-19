import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { ViewpopupComponent } from '../viewpopup/viewpopup.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  constructor(
    private service: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.Loaduser();
  }

  // public doFilter = (value: string) => {
  //   this.dataSource.filter = value.trim().toLocaleLowerCase();
  // };

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLowerCase();
  };

  postList: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  Loaduser() {
    this.service.GetComments().subscribe((res) => {
      console.log('Tüm postların tekrar çekilmesi', res);
      this.postList = res;
      this.dataSource = new MatTableDataSource(this.postList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = function (
        data: {
          id: string;
          postId: string;
          name: string;
          email: string;
          body: string;
        },
        filter: string
      ): boolean {
        return (
          data.name.toLowerCase().includes(filter) ||
          data.email.toLowerCase().includes(filter) ||
          data.body.toLowerCase().includes(filter) ||
          data.id.toString().includes(filter) ||
          data.postId.toString().includes(filter)
        );
      };
    });
  }

  // displayedColumns: string[] = ['id', 'postId', 'name', 'email', 'body', 'action'];
  displayedColumns: string[] = ['id', 'postId', 'name', 'email', 'body'];

  updateComment(id: any, postId: any, name: any, email: any, body: any) {
    this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: 500,
      exitAnimationDuration: 500,
      width: '50%',
      data: {
        id: id,
        postId: postId,
        name: name,
        email: email,
        body: body,
      },
    });

    this.dialog.afterAllClosed.subscribe((res) => {
      this.Loaduser();
    });
  }

  viewComment(id: any, postId: any, name: any, email: any, body: any) {
    this.dialog.open(ViewpopupComponent, {
      enterAnimationDuration: 500,
      exitAnimationDuration: 500,
      width: '50%',
      data: {
        id: id,
        postId: postId,
        name: name,
        email: email,
        body: body,
      },
    });
  }

  deleteComment(code: any) {
    this.service.DeleteComment(code).subscribe((res) => {
      console.log(res);
      this.Loaduser();
    });
  }

  openDialog(code: any) {
    console.log(code);
  }
}
