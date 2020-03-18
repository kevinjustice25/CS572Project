import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit(): void {
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
