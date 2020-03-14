import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <p>{{title | uppercase}} </p>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'angular';
}
