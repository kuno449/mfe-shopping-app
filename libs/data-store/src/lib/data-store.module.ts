import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "../cart/cart.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ cart: cartReducer }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
  ],
})
export class DataStoreModule {}
