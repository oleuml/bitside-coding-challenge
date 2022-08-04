import { Basket } from "./basket";
import { Product } from "./product";

const INVENTORY: Product[] = [
  new Product("A0001", 12.99, { type: "percentage", percentage: 0.2 }),
  new Product("A0002", 3.99, { type: "buyXGetYFree", x: 2, y: 1 }),
  new Product("A0003", 9.99),
  new Product("A0004", 1.15),
  new Product("A0005", 44.44),
  new Product("A0006", 6.99, { type: "buyXGetYFree", x: 4, y: 5 }),
];

test("testPercentage", () => {
  const basket = new Basket();
  basket.scan(INVENTORY[0]);
  basket.scan(INVENTORY[0]);
  expect(basket.total()).toEqual(12.99 * 0.8 + 12.99 * 0.8);
});

test("testBuy2Get1Free", () => {
  const basket = new Basket();
  basket.scan(INVENTORY[1]);
  basket.scan(INVENTORY[1]);
  basket.scan(INVENTORY[1]);
  expect(basket.total()).toEqual(3.99 * 2);
});
