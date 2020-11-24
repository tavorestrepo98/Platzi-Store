import { Component } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

import { filter } from 'rxjs/operators';

declare var gtag;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ){
    const navEndEvents$ = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    );


    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-Z73HPMTJES', {
        page_path: event.urlAfterRedirects
      });
    });
  }

}
