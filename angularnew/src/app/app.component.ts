import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminwork';


  constructor(private _router: Router, private _activedRoute: ActivatedRoute) {

  }

  // ngOnInit(): void {
  //   this.loadHomePage();
  // }

//   userAccountManagement() {
//     this._router.navigateByUrl('/userList');
//   }
// }
userAccountManagement() { 

  this._router.navigateByUrl('/usersignup');
}
}

