import {Component} from '@angular/core';
import {Product, ProductGenerator} from "@my-microfrontend/product";
import {CartStoreService} from "@my-microfrontend/data-store";

@Component({
  selector: 'my-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public products: Product[] = [];

  constructor(private _cartStore: CartStoreService) {
    this.products = ProductGenerator.getPredefinedProducts();
  }

  public addCart(product: Product) {
    this._cartStore.addItem(product);
  }
}
