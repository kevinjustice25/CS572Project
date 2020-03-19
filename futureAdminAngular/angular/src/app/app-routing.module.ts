import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UserComponent } from "../user/user.component";
import { UsersListComponent } from 'src/usersList/users-list.component';
import { UserComponent } from 'src/user/user.component';


const routes: Routes = [
  { path: 'userList', component: UsersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
