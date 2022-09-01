import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "@my-microfrontend/data-store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: AppComponent },
      { path: 'cart', component: AppComponent }
    ]),
    StoreModule.forFeature('cart', cartReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
