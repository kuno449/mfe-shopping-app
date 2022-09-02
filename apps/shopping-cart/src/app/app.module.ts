import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "@my-microfrontend/data-store";
import {AuthModule} from "@auth0/auth0-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: AppComponent },
      { path: 'cart', component: AppComponent }
    ]),
    AuthModule.forRoot({
      domain: 'dev-h1q091jq.us.auth0.com',
      clientId: 'HaQe2622hR5EaJynPS96KA367QSXQfYs'
    }),
    StoreModule.forFeature('cart', cartReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
