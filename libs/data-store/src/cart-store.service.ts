import {Store} from "@ngrx/store";
import {Product} from "@my-microfrontend/product";
import {addItem, changeAmount, removeItem} from "./cart/cart.actions";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Item} from "./cart/cart.reducer";

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  constructor(private store: Store<{ cart: Item[] }>) {
  }

  public readonly currentItems$: Observable<Item[]> = this.store.select((state) => state.cart);

  public addItem(product: Product) {
    this.store.dispatch(addItem(product));
  }

  public removeItem(product: Product) {
    this.store.dispatch(removeItem(product));
  }

  public changeAmount(product: Product, amount: number) {
    this.store.dispatch(changeAmount({product, amount}));
  }
}

