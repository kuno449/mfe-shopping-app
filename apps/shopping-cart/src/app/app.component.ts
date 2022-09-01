import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "@my-microfrontend/product";
import {CartStoreService} from "@my-microfrontend/data-store";

@Component({
  selector: 'my-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {

  public currentItems: Product[] = [];

  private _cartSubscription: Subscription;

  constructor(private _cartStore: CartStoreService) {
    this._cartSubscription = this._cartStore.currentItems$.subscribe(items => {
      this.currentItems = items;
    });
  }

  ngOnDestroy() {
    this._cartSubscription.unsubscribe();
  }
}
