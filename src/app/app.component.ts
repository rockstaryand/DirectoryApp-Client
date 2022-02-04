import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>

      <nb-layout-header fixed>
      <!-- Insert header here -->
      </nb-layout-header>

      <nb-layout-column>
    <router-outlet></router-outlet>
      </nb-layout-column>

      <nb-layout-footer fixed>
      <!-- Insert footer here -->
      </nb-layout-footer>

    </nb-layout>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directoryList-frontend';

  constructor() {

  }

}
