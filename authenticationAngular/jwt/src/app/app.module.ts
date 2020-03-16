import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent }


]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
