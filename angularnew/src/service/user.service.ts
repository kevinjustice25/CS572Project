import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";

import { IUser } from 'src/model/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser;
  formUser: FormGroup = new FormGroup({
    userId: new FormControl(null),
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    username: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  })

  //,private datePipe: DatePipe
  constructor(public httpClient: HttpClient) { }


  getList() {
    return this.httpClient.get("http://localhost:3000/users");

  }

  save() {

    this.user = {
      "_id": null,
      "firstName": this.formUser.get('firstName').value,
      "lastName": this.formUser.get('lastName').value,
      "username": this.formUser.get('username').value,
      "password": this.formUser.get('password').value
    }
    console.log(this.user);

    return this.httpClient.post("http://localhost:3000/users", this.user);
  }

  private _listeners = new Subject<any>();
  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}
