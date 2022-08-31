import {Product} from "../model/product";
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export default class ProductGenerator {

  public static generateRandomProducts(num: number): Product[] {

    const products = [];

    for (let i = 0; i < num; i++) {
      products.push({
        id: uuidv4(), // uuid
        name: faker.commerce.productName(),
        maker: faker.company.name(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(10, 800, 2, '€')
      } as Product);
    }

    return products;
  }
}
