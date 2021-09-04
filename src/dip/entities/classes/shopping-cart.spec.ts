import { Discount } from './discount';
import { CartItem } from './interface/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return {
    sut,
    discountMock,
  };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProduct = () => {
  const { sut, discountMock } = createSut();
  const item1 = createItem('Camisa', 40);
  sut.additem(item1);

  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('Should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('Should contains item on card', () => {
    const { sut } = createSutWithProduct();
    expect(sut.items.length).toBe(1);
  });

  it('should check price total of cart', () => {
    const { sut } = createSutWithProduct();
    expect(sut.total()).toBe(40);
  });

  it('Should check if method discout was called', () => {
    const { sut, discountMock } = createSutWithProduct();
    const discountSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWhithDiscount();
    expect(discountSpy).toHaveBeenCalledTimes(1);
  });

  it('Should check the parmsm mtethos dicout calculte was passed', () => {
    const { sut, discountMock } = createSutWithProduct();
    const discountSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWhithDiscount();
    expect(discountSpy).toHaveBeenLastCalledWith(sut.total());
    expect(discountSpy).toReturnTimes(1);
  });
});
