import {
  NoDiscount,
  FiftyPercentDiscount,
  TenPercentDiscount,
} from './discount';

describe('NoDiscount', () => {
  it('Sould not apply discout', () => {
    const sut = new NoDiscount();
    expect(sut.calculate(10)).toBeCloseTo(10);
  });
});

describe('FiftyPercentDiscount', () => {
  it('Should apply 50% by discount', () => {
    const sut = new FiftyPercentDiscount();
    expect(sut.calculate(100)).toBeCloseTo(50);
  });
});

describe('TenPercentDiscount', () => {
  it('Should apply 10% by discount', () => {
    const sut = new TenPercentDiscount();
    expect(sut.calculate(100)).toBeCloseTo(90);
  });
});
