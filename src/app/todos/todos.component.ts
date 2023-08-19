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
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
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
    this.service.GetTodos().subscribe((res) => {
      console.log('Tüm postların tekrar çekilmesi', res);
      this.postList = res;
      this.dataSource = new MatTableDataSource(this.postList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = function (
        data: {
          id: number;
          userId: number;
          title: string;
          completed: boolean;
        },
        filter: string
      ): boolean {
        return (
          data.id.toString().includes(filter) ||
          data.userId.toString().includes(filter) ||
          data.title.toLowerCase().includes(filter) ||
          data.completed.toString().includes(filter)
        );
      };
    });
  }

  // displayedColumns: string[] = ['id', 'postId', 'name', 'email', 'body', 'action'];
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];

  // updateTodo(id: any, postId: any, name: any, email: any, body: any) {
  //   this.dialog.open(UpdatepopupComponent, {
  //     enterAnimationDuration: 500,
  //     exitAnimationDuration: 500,
  //     width: '50%',
  //     data: {
  //       id: id,
  //       postId: postId,
  //       name: name,
  //       email: email,
  //       body: body,
  //     },
  //   });

  //   this.dialog.afterAllClosed.subscribe((res) => {
  //     this.Loaduser();
  //   });
  // }

  // viewTodo(id: any, postId: any, name: any, email: any, body: any) {
  //   this.dialog.open(ViewpopupComponent, {
  //     enterAnimationDuration: 500,
  //     exitAnimationDuration: 500,
  //     width: '50%',
  //     data: {
  //       id: id,
  //       postId: postId,
  //       name: name,
  //       email: email,
  //       body: body,
  //     },
  //   });
  // }

  // deleteTodo(code: any) {
  //   this.service.DeleteTodo(code).subscribe((res) => {
  //     console.log(res);
  //     this.Loaduser();
  //   });
  // }

  openDialog(code: any) {
    console.log(code);
  }
}
