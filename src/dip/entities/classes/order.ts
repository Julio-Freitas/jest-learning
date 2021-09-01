import { OrderStatus } from './interface/order-status';
import { Persistent } from '../../services/persistent';
import { Messaging } from '../../services/messaging';
import { CustumerOrder } from './interface/custumer-protocol';
import { ShoppingCartProtocal } from './interface/shoppingcart-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  constructor(
    private readonly cart: ShoppingCartProtocal,
    private readonly messaging: Messaging,
    private readonly persistent: Persistent,
    private readonly custumer: CustumerOrder
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('seu carrrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMenssage('Pedido recebido');
    this.persistent.savedOrder();
    this.cart.clear();
    console.log(
      `o cliente é: \n ${this.custumer.getName()} \n ${this.custumer.getIDN()}`
    );
    console.log(`status cart: ${this._orderStatus}`);
  }
}
