import {createReducer, on} from '@ngrx/store';
import {addItem, removeItem} from './cart.actions';
import {Product} from "@my-microfrontend/product";

export const initialState: ReadonlyArray<Product> = [];

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, product) => {
    return [...state, product];
  }),
  on(removeItem, (state, product) => {
    const newEntries: Product[] = [...state];
    const found = newEntries.find(entry => entry.id == product.id);
    if (found) newEntries.splice(newEntries.indexOf(found), 1);

    return newEntries;
  })
);
