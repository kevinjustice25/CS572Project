import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  //template:`{{currentUser.name}}`,
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  public currentUser = {name:String, email:String};


  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
  }

  ngOnInit() {
    //this.currentUser ={name:'', email:''};
  }
}
