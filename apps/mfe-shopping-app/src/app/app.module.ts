import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { AuthModule } from '@auth0/auth0-angular';
import {loadRemoteModule} from "@angular-architects/module-federation";
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import {cartReducer, DataStoreModule} from "@my-microfrontend/data-store";
import {StoreModule} from "@ngrx/store";

const routes: Routes = [
  { path: 'store', loadChildren: () => import('store/Module').then(m => m.AppModule) },
  { path: 'cart', loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Module',
    }).then((m) => m.AppModule)
  },
  { path: '', loadChildren: () => import('store/Module').then(m => m.AppModule) }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot({
      domain: 'dev-h1q091jq.us.auth0.com',
      clientId: 'HaQe2622hR5EaJynPS96KA367QSXQfYs'
    }),
    HttpClientModule,
    TranslocoRootModule,
    DataStoreModule,
    StoreModule.forFeature('cart', cartReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
