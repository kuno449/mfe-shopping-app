import {Component} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'my-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  protected accessToken = '';

  constructor(public router: Router,
              public auth: AuthService) {
  }

  public login(): void {
    this.auth.loginWithPopup().subscribe(() => {
      this.auth.getAccessTokenSilently().subscribe(accessToken => {
        console.log('AccessToken::' + accessToken);
        this.accessToken = accessToken;
      });
    });
  }

  public logout(): void {
    this.auth.logout();
  }

  public toShoppingCart() {
    this.router.navigate(['cart']);
  }

  public toStore() {
    this.router.navigate(['store']);
  }
}
