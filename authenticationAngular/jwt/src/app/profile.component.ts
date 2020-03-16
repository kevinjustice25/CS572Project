import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <p>
     If you can see this page, you are logged in!
    </p>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
