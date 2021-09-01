import { CartItem } from './cart-item';

export interface ShoppingCartProtocal {
  items: Readonly<CartItem[]>;
  additem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWhithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
