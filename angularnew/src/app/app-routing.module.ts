import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UserComponent } from "../user/user.component";
import { UsersListComponent } from 'src/usersList/users-list.component';
import { UserSignUpComponent } from 'src/user/userSignUp.component';
import { UserSignInComponent } from 'src/user/user-sign-in.component';


const routes: Routes = [
  // { path: 'userList', component: UsersListComponent },
  { path: 'usersignup', component: UserSignUpComponent },
  { path: 'usersignin', component: UserSignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
