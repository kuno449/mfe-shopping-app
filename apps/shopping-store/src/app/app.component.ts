import {Component} from '@angular/core';
import {Product, ProductGenerator} from "@my-microfrontend/product";
import {StoreActionService} from "@my-microfrontend/data-store";

@Component({
  selector: 'my-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public products: Product[] = [];

  constructor(private _storeAction: StoreActionService) {
    this.products = ProductGenerator.getPredefinedProducts();
  }

  public addCart(product: Product) {
    this._storeAction.addItem(product);
  }
}
