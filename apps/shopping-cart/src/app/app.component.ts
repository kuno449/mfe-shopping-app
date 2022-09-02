import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {CartStoreService, Item} from "@my-microfrontend/data-store";
import {Product} from "@my-microfrontend/product";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'my-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {

  public currentItems: Item[] = [];
  public totalPrice: number = 0;
  public numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

  private _cartSubscription: Subscription;
  private _totalPriceSubscription: Subscription;

  constructor(private _cartStore: CartStoreService, public auth: AuthService) {
    this._cartSubscription = this._cartStore.currentItems$.subscribe(items => {
      this.currentItems = items;
    });

    this._totalPriceSubscription = this._cartStore.totalPrice$.subscribe(total => {
      this.totalPrice = total;
    });
  }

  ngOnDestroy() {
    this._cartSubscription.unsubscribe();
    this._totalPriceSubscription.unsubscribe();
  }

  public onChangeAmount(prod: Product, event: any): void {
    const amount = event.target.value;
    this._cartStore.changeAmount(prod, Number(amount));
  }

  public removeItem(prod: Product) {
    this._cartStore.removeItem(prod);
  }
}
