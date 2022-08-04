import { Product } from "./product";

export class Basket {
  items: { product: Product; amount: number }[] = [];

  scan(product: Product): void {
    let item = this.items.find((item) => item.product.id === product.id);
    if (item) {
      item.amount += 1;
    } else {
      this.items.push({ product: product, amount: 1 });
    }
  }

  total(): number {
    return this.items
      .map(({ product, amount }) => product.realize(amount))
      .reduce((a, b) => a + b, 0);
  }
}
