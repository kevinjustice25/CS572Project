import { Component, OnInit } from '@angular/core';
import { SignInModel } from '../../models/signinmodel'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(5)
    ])

  })
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  onLogInSubmit() {
    console.log(this.signinform.value)
  }

}
