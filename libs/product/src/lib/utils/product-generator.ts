import {Product} from "../model/product";
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export const predefinedProducts: Product[] = [
  {
    "id": "e964db82-79b7-474b-b659-0c97217a2f33",
    "name": "Practical Cotton Chips",
    "maker": "Gleason - Auer",
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "price": "€672.00"
  },
  {
    "id": "16895578-a6e9-43b9-9ecd-ed7b1fee811e",
    "name": "Oriental Metal Pizza",
    "maker": "Anderson, Gibson and Kshlerin",
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "price": "€699.00"
  },
  {
    "id": "0d82ab06-9a6a-4d9f-9ce3-c7df0bfaede8",
    "name": "Small Cotton Ball",
    "maker": "Beer - Leannon",
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "price": "€660.00"
  },
  {
    "id": "f18e231c-9b1f-46d7-9c4d-80406f5532a9",
    "name": "Awesome Steel Gloves",
    "maker": "Kassulke - Okuneva",
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "price": "€143.00"
  },
  {
    "id": "15b71e6f-4341-4ec8-802c-1cad8fc7023c",
    "name": "Tasty Fresh Towels",
    "maker": "Wiegand Inc",
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "price": "€518.00"
  },
  {
    "id": "a24108de-4387-48d4-9050-1876d1270bd2",
    "name": "Elegant Frozen Keyboard",
    "maker": "Bergnaum, Cronin and Bradtke",
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "price": "€603.00"
  },
  {
    "id": "b569d273-ebdd-4f16-811a-e0db4188a72a",
    "name": "Modern Concrete Sausages",
    "maker": "Kuhn - Pollich",
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "price": "€409.00"
  },
  {
    "id": "af11227a-84dc-48bf-b4a7-301cabfca382",
    "name": "Licensed Concrete Shirt",
    "maker": "Labadie - Ritchie",
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "price": "€213.00"
  },
  {
    "id": "dc679431-d352-4b3f-9284-d28fa58e935a",
    "name": "Rustic Concrete Gloves",
    "maker": "Dickens, Sporer and Bernier",
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "price": "€53.00"
  },
  {
    "id": "b0b7661c-9d4b-48f8-88af-40735e587697",
    "name": "Fantastic Steel Table",
    "maker": "Hauck and Sons",
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "price": "€360.00"
  },
  {
    "id": "37cf50ff-5346-4f2c-ad6c-3b03c5d397db",
    "name": "Gorgeous Frozen Gloves",
    "maker": "Fisher LLC",
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "price": "€116.00"
  },
  {
    "id": "91121a8d-1916-4ce5-9fe3-c6f7bc6b5961",
    "name": "Rustic Rubber Chicken",
    "maker": "Weber, Walsh and Lowe",
    "description": "The Football Is Good For Training And Recreational Purposes",
    "price": "€738.00"
  },
  {
    "id": "15136eed-6fdc-492f-826f-5ad34cd312b7",
    "name": "Refined Rubber Table",
    "maker": "Crooks and Sons",
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "price": "€514.00"
  },
  {
    "id": "cf9e9821-078c-4a6a-8dc2-79690fe286cd",
    "name": "Incredible Rubber Mouse",
    "maker": "Kling LLC",
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "price": "€276.00"
  },
  {
    "id": "3a1872a9-0608-4a06-9001-951d7934b03e",
    "name": "Refined Frozen Bike",
    "maker": "Lueilwitz - Champlin",
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "price": "€650.00"
  },
  {
    "id": "050688ea-a1fe-4aa3-af95-9ee44487e768",
    "name": "Licensed Fresh Sausages",
    "maker": "Marvin and Sons",
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "price": "€627.00"
  },
  {
    "id": "f57dff3c-bdc9-449e-a264-19cc9c324697",
    "name": "Recycled Rubber Ball",
    "maker": "Nienow, Aufderhar and Schneider",
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "price": "€687.00"
  },
  {
    "id": "8c8cbdae-53cc-4f85-9b0d-08c678168c17",
    "name": "Handcrafted Soft Chair",
    "maker": "Streich, Gerhold and Donnelly",
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "price": "€118.00"
  },
  {
    "id": "87ebd0dd-8885-4450-9481-ef5a96709a36",
    "name": "Modern Granite Chips",
    "maker": "Bosco, Feeney and Ernser",
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "price": "€349.00"
  },
  {
    "id": "a3d6f07d-4551-41ed-a564-4c17e6e070f4",
    "name": "Tasty Bronze Pizza",
    "maker": "Corkery - Runolfsdottir",
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "price": "€686.00"
  },
  {
    "id": "b1609848-c20f-449c-b30a-aa2c9ccb3412",
    "name": "Licensed Fresh Sausages",
    "maker": "Schumm - Haag",
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "price": "€90.00"
  },
  {
    "id": "901fadb9-dc3c-4aa1-aaa3-6193c891748a",
    "name": "Tasty Fresh Chair",
    "maker": "Rempel, Nikolaus and Wisoky",
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "price": "€329.00"
  },
  {
    "id": "8bf195ea-b9df-4827-be7f-86f16e41beda",
    "name": "Practical Granite Cheese",
    "maker": "Medhurst, Reinger and Stamm",
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "price": "€98.00"
  },
  {
    "id": "56232b18-6a67-4123-aecc-4eb749d74c45",
    "name": "Small Steel Bacon",
    "maker": "Rau Inc",
    "description": "The Football Is Good For Training And Recreational Purposes",
    "price": "€599.00"
  },
  {
    "id": "0779aec7-6a03-4772-afac-2692196e7b79",
    "name": "Practical Frozen Bike",
    "maker": "McDermott LLC",
    "description": "The Football Is Good For Training And Recreational Purposes",
    "price": "€502.00"
  },
  {
    "id": "35111009-9d7c-4889-982a-3dd0621d61d2",
    "name": "Fantastic Steel Chips",
    "maker": "Osinski, Ullrich and Haley",
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "price": "€69.00"
  },
  {
    "id": "b7b8d6bf-c157-4b77-8137-9710819e99c3",
    "name": "Incredible Metal Soap",
    "maker": "Little, Mante and Feest",
    "description": "The Football Is Good For Training And Recreational Purposes",
    "price": "€250.00"
  },
  {
    "id": "5bb7f243-9f8a-40dc-9e21-e8514284cb17",
    "name": "Electronic Frozen Pizza",
    "maker": "Deckow - Orn",
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "price": "€501.00"
  },
  {
    "id": "129d585c-8092-4dc0-97da-938c5f4788c3",
    "name": "Bespoke Concrete Bike",
    "maker": "Greenholt Inc",
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "price": "€218.00"
  },
  {
    "id": "edf7243e-dfcd-4aa9-b519-a8272d6a3cc2",
    "name": "Oriental Soft Soap",
    "maker": "Kilback - Bosco",
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "price": "€26.00"
  }
];

export class ProductGenerator {

  public static getPredefinedProducts(): Product[] {
    return predefinedProducts;
  }

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
