import {Store} from "@ngrx/store";
import {Product} from "@my-microfrontend/product";
import {addItem, removeItem} from "./cart/cart.actions";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class StoreActionService {

  constructor(private store: Store) {}

  public addItem(product: Product) {
    this.store.dispatch(addItem(product));
  }

  public removeItem(product: Product) {
    this.store.dispatch(removeItem(product));
  }
}

