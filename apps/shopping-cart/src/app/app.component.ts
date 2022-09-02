import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {CartStoreService, Item} from "@my-microfrontend/data-store";
import {Product} from "@my-microfrontend/product";

@Component({
  selector: 'my-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {

  public currentItems: Item[] = [];
  public numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

  private _cartSubscription: Subscription;

  constructor(private _cartStore: CartStoreService) {
    this._cartSubscription = this._cartStore.currentItems$.subscribe(items => {
      this.currentItems = items;
    });
  }

  ngOnDestroy() {
    this._cartSubscription.unsubscribe();
  }

  public onChangeAmount(prod: Product, event: any): void {
    const amount = event.target.value;
    this._cartStore.changeAmount(prod, Number(amount));
  }

  public removeItem(prod: Product) {
    this._cartStore.removeItem(prod);
  }
}
