interface DealPercentage {
  type: "percentage";
  percentage: number;
}

interface DealBuyXGetY {
  type: "buyXGetYFree";
  x: number;
  y: number;
}

export type Deal = DealPercentage | DealBuyXGetY;

export class Product {
  id: string;
  price: number;
  deal?: Deal;

  constructor(id: string, price: number, deal?: Deal) {
    this.id = id;
    this.price = price;
    this.deal = deal;
  }

  realize(amount: number): number {
    if (this.deal) {
      switch (this.deal.type) {
        case "percentage":
          if (this.deal.percentage < 0 || this.deal.percentage > 1) {
            throw new Error(
              `Percentage must be between or equals 0.0 and 1.0: ${this.deal.percentage}`
            );
          }
          return this.price * (1 - this.deal.percentage) * amount;
        case "buyXGetYFree":
          const x = this.deal.x;
          const y = this.deal.y;

          if (amount <= x) {
            return amount * this.price;
          } else if (amount > x) {
            let dealFrequency = Math.floor(amount / (x + y));
            let rest = amount % (x + y);
            return x * dealFrequency * this.price + rest * this.price;
          }
          return this.price * amount;
        default:
          throw new Error(`Unknown deal! ${this.deal}`);
      }
    } else {
      return this.price * amount;
    }
  }
}
