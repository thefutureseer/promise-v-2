test('chains multiple promises', () => {
  let promise = new Promise((resolve, reject) => {
    resolve('First');
  }).then(result => {
    return result + ' Second';
  }).then(result => {
    return result + ' Third';
  });

  return expect(promise).resolves.toBe('First Second Third');
});