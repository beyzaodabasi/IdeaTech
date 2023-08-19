import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-postcomments',
  templateUrl: './postcomments.component.html',
  styleUrls: ['./postcomments.component.css'],
})
export class PostcommentsComponent {
  constructor(private service: AuthService) {
    this.Loaduser(Number(localStorage.getItem('selectedUserId')));
  }

  userList: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  Loaduser(id: number) {
    this.service.GetPostComments(id).subscribe((res) => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = ['id', 'postId', 'name', 'email', 'body'];
}
