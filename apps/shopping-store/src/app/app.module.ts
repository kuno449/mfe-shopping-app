import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {cartReducer} from "@my-microfrontend/data-store";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: AppComponent },
      { path: 'store', component: AppComponent }
    ]),
    StoreModule.forFeature('cart', cartReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
