import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Item} from "@my-microfrontend/data-store";

export const totalPriceSelector = createSelector(
  createFeatureSelector('cart'),
  (items: Item[]) => {
    let total = 0;
    items.forEach(item => {
      const priceStr = item.prod.price;
      const price = Number(priceStr.slice(1, priceStr.length));
      total += price * item.amount;
    });
    return total;
  }
);
