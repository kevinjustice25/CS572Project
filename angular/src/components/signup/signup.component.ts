import { Component, OnInit } from '@angular/core';
//import { SignUpModel } from '../../models/signupmodel';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(5),

    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(5)

    ])


  })
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  onRegisterSubmit() {
    console.log(this.signupform.value)
  }

}
