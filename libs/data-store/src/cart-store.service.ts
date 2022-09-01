import {Store} from "@ngrx/store";
import {Product} from "@my-microfrontend/product";
import {addItem, removeItem} from "./cart/cart.actions";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  constructor(private store: Store<{ cart: Product[] }>) {
  }

  public readonly currentItems$: Observable<Product[]> = this.store.select((state) => state.cart);

  public addItem(product: Product) {
    this.store.dispatch(addItem(product));
  }

  public removeItem(product: Product) {
    this.store.dispatch(removeItem(product));
  }
}

