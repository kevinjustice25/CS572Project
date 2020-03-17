import { Component, OnInit } from '@angular/core';
//import {MatDialog, MatDialogConfig} from "@angular/material";

import { UserService } from "../service/user.service";
import { IUser } from 'src/model/Iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  //  user : IUser;

  constructor(private service: UserService) { }

  // uploadResponse = { status: '', message: '', filePath: '' }
  ngOnInit() {
  }



  onSubmit() {
    // let resp = this.service.save(this.user);
    // alert(resp);
  }

  onClear() {

  }
}
