import { Basket } from "./basket.js";
import { Product } from "./product.js";

const INVENTORY: Product[] = [
  new Product("A0001", 12.99, { type: "percentage", percentage: 0.2 }),
  new Product("A0002", 3.99, { type: "buyXGetYFree", x: 2, y: 1 }),
  new Product("A0003", 9.99),
  new Product("A0004", 1.15),
  new Product("A0005", 44.44),
];

const basket = new Basket();

basket.scan(INVENTORY[0]);
basket.scan(INVENTORY[1]);
basket.scan(INVENTORY[1]);
basket.scan(INVENTORY[1]);
basket.scan(INVENTORY[2]);
basket.scan(INVENTORY[3]);

console.log(basket.total());
