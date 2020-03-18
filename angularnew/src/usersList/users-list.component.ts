import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IUser } from 'src/model/Iuser';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<IUser>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'firstName', 'lastName', 'username', 'password'];
  dataSource: [];

  searchKey: string;

  constructor(public service: UserService) {

    this.service.listen().subscribe(m => {
      console.log(m);
      this.getList();
    });

  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    console.log("before");

    this.service.getList().subscribe(dataResp => {
      this.dataSource = (<[]>dataResp)
      console.log(this.dataSource);

    })

  }










}
