import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { ViewpopupComponent } from '../viewpopup/viewpopup.component';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
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
    this.service.GetPosts().subscribe((res) => {
      console.log('Tüm postların tekrar çekilmesi', res);
      this.postList = res;
      this.dataSource = new MatTableDataSource(this.postList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = function (
        data: { title: string; body: string; id: string; userId: string },
        filter: string
      ): boolean {
        return (
          data.title.toLowerCase().includes(filter) ||
          data.body.toLowerCase().includes(filter) ||
          data.id.toString().includes(filter) ||
          data.userId.toString().includes(filter)
        );
      };
    });
  }

  displayedColumns: string[] = ['id', 'userId', 'title', 'body', 'action'];

  updatePost(id: any, userId: any, title: any, body: any) {
    this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: 500,
      exitAnimationDuration: 500,
      width: '50%',
      data: {
        id: id,
        userId: userId,
        title: title,
        body: body,
      },
    });

    this.dialog.afterAllClosed.subscribe((res) => {
      this.Loaduser();
    });
  }

  viewPost(id: any, userId: any, title: any, body: any) {
    this.dialog.open(ViewpopupComponent, {
      enterAnimationDuration: 500,
      exitAnimationDuration: 500,
      width: '50%',
      data: {
        id: id,
        userId: userId,
        title: title,
        body: body,
      },
    });
  }

  deletePost(code: any) {
    this.dialog.open(DeletepopupComponent, {
      enterAnimationDuration: 500,
      exitAnimationDuration: 500,
      width: '50%',
      data: {
        id: code,
      },
    });

    this.dialog.afterAllClosed.subscribe((res) => {
      this.Loaduser();
    });
  }

  openDialog(code: any) {
    console.log(code);
  }
}
