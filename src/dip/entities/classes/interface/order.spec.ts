import { Messaging } from '../../../services/messaging';
import { Persistent } from '../../../services/persistent';
import { Order } from '../order';
import { CartItem } from './cart-item';
import { CustumerOrder } from './custumer-protocol';
import { ShoppingCartProtocal } from './shoppingcart-protocol';

class ShopMock implements ShoppingCartProtocal {
  get items(): Readonly<CartItem[]> {
    return [];
  }
  additem(item: CartItem): void {
    //
  }
  removeItem(index: number): void {
    //
  }

  total(): number {
    return 1;
  }
  totalWhithDiscount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {
    //
  }
}

class MessageMock implements Messaging {
  sendMenssage() {
    //
  }
}

class PersistentMock implements Persistent {
  savedOrder() {
    //
  }
}

class CompanyMock implements CustumerOrder {
  getName() {
    return '';
  }
  getIDN() {
    return '';
  }
}
const makeSut = () => {
  const shopMock = new ShopMock();
  const messageMock = new MessageMock();
  const persistentMock = new PersistentMock();
  const companyMock = new CompanyMock();
  const sut = new Order(shopMock, messageMock, persistentMock, companyMock);

  return {
    sut,
    shopMock,
    messageMock,
    persistentMock,
    companyMock,
  };
};

describe('Order', () => {
  afterEach(() => jest.clearAllMocks());
  const { sut, shopMock, persistentMock, messageMock } = makeSut();
  const shopcartspy = jest.spyOn(shopMock, 'isEmpty');
  const shopCartClearSpy = jest.spyOn(shopMock, 'clear');
  const persitedSpy = jest.spyOn(persistentMock, 'savedOrder');
  const messageSpy = jest.spyOn(messageMock, 'sendMenssage');

  it('should not checkout  if cart is Empty', () => {
    shopcartspy.mockReturnValueOnce(true);
    sut.checkout();
    expect(shopcartspy).toBeCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('Should checkout if the cart is not empty', () => {
    sut.checkout();
    shopcartspy.mockReturnValueOnce(false);
    shopCartClearSpy.mockReturnValueOnce();
    expect(shopcartspy).toBeCalledTimes(1);
    expect(persitedSpy).toBeCalledTimes(1);
    expect(messageSpy).toBeCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
    expect(shopCartClearSpy).toBeCalledTimes(1);
  });
});
