import {Component} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'my-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'mfe-shopping-app';

  constructor(public auth: AuthService) {
  }

  public login(): void {
    this.auth.loginWithPopup();
  }

  public logout(): void {
    this.auth.logout();
  }
}
