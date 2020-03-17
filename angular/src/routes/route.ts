import { HomeComponent } from "../components/Home/home.component";
import { SigninComponent } from '../components/signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../components/signup/signup.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from '../components/profile/profile.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: ProfileComponent },

    // { path: 'pagenotfound', component: PagenotfoundComponent },
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class Routers { }
