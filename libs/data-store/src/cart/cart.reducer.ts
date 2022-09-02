import {createReducer, on} from '@ngrx/store';
import {addItem, changeAmount, removeItem} from './cart.actions';
import {Product} from "@my-microfrontend/product";

export interface Item {
  prod: Product;
  amount: number;
}

export const initialState: ReadonlyArray<Item> = [];

export const cartReducer = createReducer(
  initialState,
  on(addItem, (cart, product) => {
    const item = cart.find(item => item.prod.id === product.id);
    if (item) {
      return changeAmountOfItem([...cart], item, item.amount + 1);
    } else {
      return [...cart, { prod: product, amount: 1 }];
    }
  }),
  on(removeItem, (cart, product) => {
    const newEntries: Item[] = [...cart];
    const found = newEntries.find(entry => entry.prod.id == product.id);
    if (found) newEntries.splice(newEntries.indexOf(found), 1);

    return newEntries;
  }),
  on(changeAmount, (cart, { product, amount }) => {
    const item = cart.find(item => item.prod.id === product.id);
    if (item) {
      return changeAmountOfItem([...cart], item, amount);
    } else {
      return cart;
    }
  }),
);

const changeAmountOfItem = (cart: Item[], item: Item, amount: number) => {
  const index = cart.indexOf(item);
  cart.splice(index, 1);
  return insert(cart, index,{ prod: item.prod, amount });
}

const insert = (arr: any[], index: number, newItem: any) => [
  ...arr.slice(0, index), newItem, ...arr.slice(index)
]
