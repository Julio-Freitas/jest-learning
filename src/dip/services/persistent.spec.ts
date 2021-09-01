import { Persistent } from './persistent';

describe('class Persistent', () => {
  afterEach(() => jest.clearAllMocks());
  const sut = new Persistent();
  it('Method saveOrder Should return undefined', () => {
    expect(sut.savedOrder()).toBeUndefined();
  });

  it('Method SaveOrder should call console.log once', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sut.savedOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Method SaveOrder should call console.log with Pedido salvo com sucesso', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sut.savedOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});
