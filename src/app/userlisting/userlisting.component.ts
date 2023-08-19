import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { UserdetailspopupComponent } from '../userdetailspopup/userdetailspopup.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css'],
})
export class UserlistingComponent {
  constructor(
    private service: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.Loaduser();
  }

  userList: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  Loaduser() {
    this.service.GetAll().subscribe((res) => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = [
    'id',
    'username',
    'name',
    'email',
    'phone',
    'action',
  ];

  // {
  //   "id": 1,
  //   "name": "Leanne Graham",
  //   "username": "Bret",
  //   "email": "Sincere@april.biz",
  //   "address": {
  //     "street": "Kulas Light",
  //     "suite": "Apt. 556",
  //     "city": "Gwenborough",
  //     "zipcode": "92998-3874",
  //     "geo": {
  //       "lat": "-37.3159",
  //       "lng": "81.1496"
  //     }
  //   },
  //   "phone": "1-770-736-8031 x56442",
  //   "website": "hildegard.org",
  //   "company": {
  //     "name": "Romaguera-Crona",
  //     "catchPhrase": "Multi-layered client-server neural-net",
  //     "bs": "harness real-time e-markets"
  //   }
  // },
  ViewUser(code: any) {
    this.dialog.open(UserdetailspopupComponent, {
      enterAnimationDuration: 500,
      exitAnimationDuration: 500,
      width: '50%',
      data: {
        id: code.id,
        name: code.name,
        username: code.username,
        email: code.email,
        street: code.address.street,
        suite: code.address.suite,
        city: code.address.city,
        zipcode: code.address.zipcode,
        lat: code.address.geo.lat,
        lng: code.address.geo.lng,
        phone: code.phone,
        website: code.website,
        companyName: code.company.name,
        catchPhrase: code.company.catchPhrase,
        bs: code.company.bs,
      },
    });
  }

  ViewPosts(code: any) {
    localStorage.setItem('selectedUserId', code);
    this.router.navigate(['user', code]);
  }

  openDialog(code: any) {
    console.log(code);
  }
}
