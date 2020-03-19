import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from 'src/app/shared/post';
import { Route } from '@angular/compiler/src/core';
import { User } from '../../shared/user';
import { AddPostService } from 'src/app/shared/add-post.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  //template:`{{currentUser.name}}`,
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  myForm= new FormGroup({
  text :new FormControl(''),
  email: new FormControl(localStorage.getItem("userName"))
  });

  public currentUser = {
                        name:String,
                        username:String,
                        posts:Post,
                      };
  //public textArea;

  constructor( public authService: AuthService,
                private actRoute: ActivatedRoute,
                public router:Router,
                public addPostService: AddPostService) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    let email = this.actRoute.snapshot.paramMap.get('email');

    this.authService.getUserProfile(id).subscribe(res => {
      console.log(res.msg);
      this.currentUser = res.msg;
    });


  }
addPost(email){

  console.log(this.myForm.value);
  console.log(email);

      this.addPostService.addPost(this.myForm.value,email).subscribe(res=>{
        console.log(res.msg);
        if (res.result) {
            this.myForm.reset()
            this.router.navigate(['userProfile']);
        }
      });
  }

  ngOnInit() {
    //this.currentUser ={name:'', email:''};
  }

  logout(){
    this.authService.doLogout();
  }

}
