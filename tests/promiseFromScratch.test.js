const MyPromise = require('../promiseFromScratch');

describe('MyPromise', () => {

  test('resolves correctly', (done) => {
    const promise = new MyPromise((resolve, reject) => {
      setTimeout(() => resolve('Promise resolved!'), 100);
    });

    promise.then(result => {
      expect(result).toBe('Promise resolved!');
      done();
    });
  });

});