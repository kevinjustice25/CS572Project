import { Component, OnInit } from '@angular/core';
//import {MatDialog, MatDialogConfig} from "@angular/material";

import { UserService } from "../service/user.service";
import { IUser } from 'src/model/Iuser';

@Component({
  selector: 'app-user',
  templateUrl: './userSignUp.component.html',
  styleUrls: ['./userSignUp.component.scss']
})
export class UserSignUpComponent implements OnInit {

  constructor(public service: UserService) { }

  // uploadResponse = { status: '', message: '', filePath: '' }
  ngOnInit() {
  }



  onSubmit() {
    let resp = this.service.save().subscribe((data) => {
      console.log(data); alert("Created Succesfully");;
    });
    console.log(resp);

  }

  onClear() {

  }
}
