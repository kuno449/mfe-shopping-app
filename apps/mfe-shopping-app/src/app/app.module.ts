import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'store', loadChildren: () => import('store/Module').then(m => m.AppModule) },
  { path: 'cart', loadChildren: () => import('store/Module').then(m => m.AppModule) },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
