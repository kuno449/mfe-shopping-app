import { Component } from '@angular/core';
import ProductGenerator from "../../../../libs/product/src/lib/utils/product-generator";
import {Product} from "../../../../libs/product/src/lib/model/product";

@Component({
  selector: 'my-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public products: Product[] = [];

  constructor() {
    this.products = ProductGenerator.generateRandomProducts(30);
  }

  public addCart(product: Product) {

  }
}
