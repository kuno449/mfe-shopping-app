import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "../cart/cart.reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ cart: cartReducer }, {})
  ],
})
export class DataStoreModule {}
