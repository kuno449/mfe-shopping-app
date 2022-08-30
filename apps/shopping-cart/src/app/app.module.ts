import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: AppComponent },
      { path: 'cart', component: AppComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
