import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css'],
})
export class UserpostsComponent {
  constructor(private service: AuthService, private router: Router) {
    this.Loaduser(Number(localStorage.getItem('selectedUserId')));
  }

  userList: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  Loaduser(id: number) {
    this.service.GetUserPosts(id).subscribe((res) => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = ['id', 'userId', 'title', 'body', 'action'];

  ViewComments(code: any) {
    localStorage.setItem('selectedPostId', code);
    this.router.navigate(['comments', code]);
  }
}
