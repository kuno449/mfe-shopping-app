import { createAction, props } from '@ngrx/store';
import {Product} from "@my-microfrontend/product";

export const addItem = createAction(
  'Add item', props<Product>()
);

export const removeItem = createAction(
  'Remove item', props<Product>()
);

export const changeAmount = createAction(
  'Change amount', props<{product: Product, amount: number}>()
);
