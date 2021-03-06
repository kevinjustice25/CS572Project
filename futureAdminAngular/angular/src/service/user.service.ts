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
    return this.httpClient.get("http://localhost:4000/users");

  }

  save(user: IUser) {

    const newUser = {
      "name": user.name,
      "username": user.username,
      "password": user.password
    }

    return this.httpClient.post("http://localhost:4000/users", newUser);
  }

  private _listeners = new Subject<any>();
  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}
