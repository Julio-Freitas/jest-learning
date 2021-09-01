import { Messaging } from './messaging';
describe('class Persistent', () => {
  afterEach(() => jest.clearAllMocks());
  const sut = new Messaging();
  const msg = 'value of message';
  it('Method sendMenssage Should return undefined', () => {
    expect(sut.sendMenssage(msg)).toBeUndefined();
  });

  it('Method sendMenssage should call console.log once', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMenssage(msg);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it(`Method SaveOrder should call console.log with mensagem enviada: ${msg}`, () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMenssage(msg);
    expect(consoleSpy).toHaveBeenCalledWith(`mensagem enviada: ${msg}`);
  });
});
