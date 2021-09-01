import { Discount } from './discount';
import { CartItem } from './interface/cart-item';
import { ShoppingCartProtocal } from './interface/shoppingcart-protocol';

export class ShoppingCart implements ShoppingCartProtocal {
  private readonly _items: CartItem[] = [];
  constructor(private readonly discount: Discount) {}

  additem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWhithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
